import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../../model/email.interface';
import { BackendService } from '../../../endpoint/backend.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/auth.iterface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getBlog } from 'src/app/store/reducers/blog.reducer';
import { getLastBlogRequest } from 'src/app/store/actions/blog.actions';

@Component({
  selector: 'app-right-side-info',
  templateUrl: './right-side-info.component.html',
  styleUrls: ['./right-side-info.component.scss']
})
export class RightSideInfoComponent implements OnInit {

  @ViewChild(FormGroupDirective) myForm;
  form: FormGroup;
  propertyId: string;
  latestBlog$: Observable<Blog>;

  constructor(
    private fb: FormBuilder,
    private be: BackendService,
    private store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(getLastBlogRequest());
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ''
    });
    this.route.paramMap.subscribe(param => {
      this.propertyId = param.get('id');
      // console.log('params ', param.);
    });

    this.latestBlog$ = this.store.select(getBlog);

  }

  onSendMail() {
    if (this.form.invalid) {
      return;
    }

    const urlPost = '/real-estate/' + this.propertyId;

    const emailForm: Mail = {
      name: this.form.value.name,
      email: this.form.value.email,
      postUrl: urlPost,
      phone: this.form.value.phone,
      message: this.form.value.message
    };

    this.be.sendMail(emailForm);

    if (this.myForm) {
      this.myForm.resetForm();
    }
  }
}
