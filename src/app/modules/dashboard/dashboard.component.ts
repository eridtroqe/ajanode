import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../endpoint/auth.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mimeType } from '../../mime-type.validator';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addPropertyRequest, updatePropertyRequest } from '../../store/actions/property.actions';
import { getProgress, getInProgress, getReady, getFailed, isLoadingProperty, getCompleted, getMode, getProperty } from '../../store/reducers/property.reducer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Mode, Post } from 'src/app/model/auth.iterface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  form: FormGroup;
  imagePreview = [];
  filesToUpload: Array<File> = [];

  progress$: Observable<number>;
  error$: Observable<string>;

  isInProgress$: Observable<boolean>;
  isReady$: Observable<boolean>;
  hasFailed$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  mode: string;
  property: Post;

  faSpinner = faSpinner;

  propertySub: Subscription;
  modeSub: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private fb: FormBuilder) {
  }

  ngOnInit() {

    this.modeSub = this.store.select(getMode).subscribe(val => this.mode = val);
    this.propertySub = this.store.select(getProperty).subscribe(prop => this.property = prop);

    this.form = this.fb.group({
      title: [''],
      description: [''],
      address: [''],
      sip: [''],
      typology: [''],
      rooms: [''],
      toilets: [''],
      floor: [''],
      type: ['Rent'],
      exclusive: false,
      position: '',
      rented: false,
      sold: false,
      prenoted: false,
      price: [''],
      imagePath: [[], {
        validators: Validators.required,
        // asyncValidators: [mimeType]
      }]
    });

    if (this.mode === Mode.Update) {
      this.form.setValue({
        title: this.property.title,
        description: this.property.description,
        address: this.property.address,
        sip: this.property.sip,
        typology: this.property.typology,
        rooms: this.property.rooms,
        toilets: this.property.toilets,
        floor: this.property.floor,
        type: this.property.type,
        exclusive: this.property.exclusive,
        position: this.property.position,
        rented: this.property.rented,
        sold: this.property.sold,
        prenoted: this.property.prenoted,
        price: this.property.price,
        imagePath: this.property.imagePath
      });
      this.imagePreview = this.form.get('imagePath').value;
    }

    console.log('form ', this.form.value);

    this.progress$ = this.store.select(getProgress);
    this.isInProgress$ = this.store.select(getInProgress);
    this.isReady$ = this.store.select(getReady);
    this.hasFailed$ = this.store.select(getFailed);
    this.isLoading$ = this.store.select(isLoadingProperty);
  }

  ngOnDestroy() {
    this.modeSub.unsubscribe();
    this.propertySub.unsubscribe();
  }

  isExclusive() {
    return this.form.get('exclusive').value;
  }

  isTypeRent() { return this.form.get('type').value === 'Rent' ? true : false; }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    if (this.mode === Mode.Create) {
      this.store.dispatch(addPropertyRequest({ payload: this.form.value, imagePath: this.filesToUpload }));
    } else {
      this.store.dispatch(updatePropertyRequest({ payload: this.form.value, id: this.property._id, imagePath: this.filesToUpload }));
    }
    this.form.disable();
  }

  onChangeExclusive(event: MatCheckboxChange) {
    if (event.checked) {
      this.form.patchValue({ position: 0 });
    }
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    const fileArray = Array.from(file);

    if (file === undefined) { return; }
    for (const fil of fileArray) {
      this.form.get('imagePath').updateValueAndValidity();
      this.filesToUpload.push(fil);
      this.form.patchValue({ imagePath: fil });
      const reader = new FileReader();
      reader.onload = () => {
        //  this.imagePreview.push(reader.result);
         this.imagePreview = [...this.imagePreview, reader.result];
      };
      reader.readAsDataURL(fil);
    }

  }
}
