import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../endpoint/auth.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mimeType } from '../../mime-type.validator';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addPropertyRequest } from '../../store/actions/property.actions';
import { getProgress, getInProgress, getReady, getFailed, isLoadingProperty, getCompleted } from '../../store/reducers/property.reducer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
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

  faSpinner = faSpinner;

  completeSub: Subscription;

  constructor(private authService: AuthService,
              private store: Store<AppState>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      address: [null, Validators.required],
      sip: [null, Validators.required],
      typology: [null, Validators.required],
      rooms: [null, Validators.required],
      toilets: [null, Validators.required],
      floor: [null, Validators.required],
      type: [null, Validators.required],
      price: [null, Validators.required],
      imagePath: [null, {
        validators: Validators.required,
        asyncValidators: [mimeType]
      }]
    });

    this.progress$ = this.store.select(getProgress);
    this.isInProgress$ = this.store.select(getInProgress);
    this.isReady$ = this.store.select(getReady);
    this.hasFailed$ = this.store.select(getFailed);
    this.isLoading$ = this.store.select(isLoadingProperty);
    // this.completeSub =  this.store.select(getCompleted).subscribe(val => {
    //   if(val){
    //   this.form.enable();
    //   this.form.markAsPristine();
    //   this.form.reset();
    //   }
    // });
  }

  ngOnDestroy() {
  //  this.completeSub.unsubscribe();
  }

  onAddPost() {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(addPropertyRequest({payload: this.form.value, imagePath: this.filesToUpload}));
    this.form.disable();
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
        this.imagePreview.push(reader.result);
      };
      reader.readAsDataURL(fil);
    }

  }
}
