import { Component } from '@angular/core';
import { LoginValidate } from 'src/app/features/validators/loginValidate';

import { HelpList } from 'src/app/features/models/helpListType';
import { HelpListService } from 'src/app/features/services/help-list.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form!: FormGroup;
  helpList!: HelpList[];
  isValidForm!: boolean;

  constructor(
    private helpListValues: HelpListService,
    private formBuilder: FormBuilder,
    private loginValidate: LoginValidate
  ) { }

  ngOnInit() {
    this.helpList = this.helpListValues.getHelpList();
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.loginValidate.loginConfirm(this.form.value.username, this.form.value.password)
      .subscribe((result) => {
        if (result) {
          this.isValidForm = false;
          console.log(result)
          console.log(this.isValidForm)
        } else {
          this.isValidForm = true;
          console.log(result)
          console.log(this.isValidForm)
        }
      })
  }
}
