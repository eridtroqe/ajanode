import { Component, OnInit } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';
import Quill from 'quill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addBlogRequest } from 'src/app/store/actions/blog.actions';
import { Observable } from 'rxjs';
import { getProgress, getInProgress, getReady, getFailed, isLoadingProperty } from 'src/app/store/reducers/property.reducer';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  modules = {};
  content = '';
  form: FormGroup;
  imagePreview: string;
  progress$: Observable<number>;
  error$: Observable<string>;

  isInProgress$: Observable<boolean>;
  isReady$: Observable<boolean>;
  hasFailed$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.modules = {
      'emoji-shortname': true,
      'emoji-toolbar': true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }],               // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],      // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }],          // outdent/indent
        [{ direction: 'rtl' }],                         // text direction

        [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video'],                         // link and image, video
        ['emoji']

      ]
    };
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null, Validators.required]
    });

    this.progress$ = this.store.select(getProgress);
    this.isInProgress$ = this.store.select(getInProgress);
    this.isReady$ = this.store.select(getReady);
    this.hasFailed$ = this.store.select(getFailed);
    this.isLoading$ = this.store.select(isLoadingProperty);
  }

  onImagePicked(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onSubmitBlog() {

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(addBlogRequest({blog: this.form.value}));
    console.log('blog-form ', this.form.value);
  }

}
