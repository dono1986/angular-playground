import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  forbiddenUsernames = ['Chris', 'Anna'];

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, 
                                          /*(control: FormControl) : {[s: string]: boolean} => {
                                                if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
                                                  return {'nameIsForbidden': true};
                                                }
                                                return null;
                                          }*/ 
                                          this.forbiddenNames.bind(this)
                                        ]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    console.log(this.myForm);
  }  

  submitted() {
    console.log(this.myForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl) : {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
