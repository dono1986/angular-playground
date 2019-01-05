import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
        'projectname': new FormControl(null, Validators.required, this.projectNameValidatorAsync),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectstatus': new FormControl(null)
    });

    this.projectForm.patchValue({'projectname': 'Manuel'});

  }

  onSubmit(): void {
    console.log(this.projectForm.value);
  }

  // Synchronous Validator
  projectNameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.toLowerCase() === 'Test'.toLowerCase()) {
      return {'projectNameInvalid': true};
    }
    return null;
  }

  // Asynchronous Validator
  projectNameValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toLowerCase() === 'Test'.toLowerCase()) {
          resolve({'projectNameInvalid': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }


}
