import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/endpoint/auth.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mimeType } from '../../mime-type.validator';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addPropertyRequest } from 'src/app/store/actions/property.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading: false;
  imagePreview = [];
  filesToUpload: Array<File> = [];

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

  }

  ngOnDestroy() {

  }

  onAddPost() {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(addPropertyRequest({payload: this.form.value, imagePath: this.filesToUpload}));

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
