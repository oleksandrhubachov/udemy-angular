import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-assignment-reactive-forms',
  templateUrl: './assignment-reactive-forms.component.html',
  styleUrls: ['./assignment-reactive-forms.component.css']
})
export class AssignmentReactiveFormsComponent implements OnInit {

  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], [this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable', [Validators.required])
    });
    this.projectForm.reset();
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

}
