import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  forbiddenUsernames = ['Chris', 'Anna'];

  forbiddenEMailAddresses = ['test@test.com'];

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
                                          this.forbiddenNamesValidator.bind(this)
                                        ]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEMailsAsyncValidator.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    console.log(this.myForm);

    this.myForm.setValue({'userData': {
      'username': 'Manuel',
      'email': 'Manuel@test.com',
      },
      'gender': 'female',
      'hobbies' : []});

    // this.myForm.patchValue({'userData': {'username': 'Manuel'}});
    this.myForm.valueChanges.subscribe(() => console.log(this.myForm));
    this.myForm.statusChanges.subscribe(() => console.log(this.myForm.status));
  }

  submitted() {
    console.log(this.myForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }

  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEMailsAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenEMailAddresses.indexOf(control.value) !== -1) {
          resolve({'emailAddressIsForbidden': true});
        }
         resolve(null);
      }, 1500);
    });
    return promise;
  }
}
