import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/endpoint/backend.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Mail } from 'src/app/model/email.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild(FormGroupDirective) myForm;

  form: FormGroup;

  constructor(private be: BackendService) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required]}),
      service: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl(''),
    });
  }


  onSendMail() {
    if (this.form.invalid) {
      return;
    }

    const emailForm: Mail = {
      name: this.form.value.name,
      email: this.form.value.email,
      service: this.form.value.service,
      phone: this.form.value.phone,
      message: this.form.value.message
    };

    this.be.sendMail(emailForm);

    if (this.myForm) {
      this.myForm.resetForm();
    }
  }

}
