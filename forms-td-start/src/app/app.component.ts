import { Component, ViewChild } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f') myForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // setzt alle
    this.myForm.setValue( { username: this.suggestUserName, email: 'test@test.de', secret: 'pet' });
    this.myForm.form.patchValue( { username: this.suggestUserName });
  }

  onSubmit() {

    console.log(this.myForm);
    console.log(this.myForm.value.email);
    console.log(this.myForm.value.secret);
    console.log(this.myForm.value.username);
  }

  /*onSubmit(form: NgForm) {
    
    console.log(form.value.email);
    console.log(form.value.secret);
    console.log(form.value.username);
  }*/
}
