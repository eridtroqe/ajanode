import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../../model/email.interface';
import { BackendService } from '../../../endpoint/backend.service';

@Component({
  selector: 'app-right-side-info',
  templateUrl: './right-side-info.component.html',
  styleUrls: ['./right-side-info.component.scss']
})
export class RightSideInfoComponent implements OnInit {

  @ViewChild(FormGroupDirective) myForm;
  form: FormGroup;
  propertyId: string;
  constructor(
    private fb: FormBuilder,
    private be: BackendService,
    private route: ActivatedRoute) { }

  ngOnInit() {
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
