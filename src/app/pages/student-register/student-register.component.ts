import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/app/features/models/users';
import { Router } from '@angular/router';

import { RegisterValidate } from 'src/app/features/validators/registerValidate';
import { RegisterValidateType } from 'src/app/features/models/registerValidateType';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent {
  form!: FormGroup;
  elements!: Users;
  endForm!: boolean;
  sair!: string
  formValues!: RegisterValidateType;

  correctName?: boolean;
  correctLastName?: boolean;
  correctRegistration?: boolean;
  correctUndergraduateDegree?:boolean;
  correctLevel?: boolean;
  correctCpf?: boolean;
  correctRg?: boolean;
  correctBirthDay?: boolean;
  correctEmail?: boolean;
  correctPassWord?: boolean;
  correctConfirmPassword?: boolean;
  isFormValidate?:boolean;
  correctSemester?:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerValidate: RegisterValidate
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: [''],
        last_name: [''],
        registration_number: [''],
        undergraduate_degree:[''],
        semester:[''],
        level: [''],
        cpf: [''],
        rg: [''],
        date_of_birth: [''],
        email: [''],
        password: [''],
        confirmPassword: [''], 
        courses: [[{}]]
      }
    );

    this.correctName = true;
    this.correctLastName = true
    this.correctRegistration = true;
    this.correctUndergraduateDegree = true;
    this.correctLevel = true;
    this.correctCpf = true;
    this.correctRg = true;
    this.correctBirthDay = true;
    this.correctEmail = true;
    this.correctPassWord = true;
    this.correctConfirmPassword = true;
    this.isFormValidate = true;
    this.correctSemester = true;

    this.form.get('level')?.setValue('Graduação');
  }

  onInputChangeNumber(controlName: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/\D/g, '');
    this.form.get(controlName)?.setValue(numericValue);
  }

  formataCPF(cpf: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    this.form.get(cpf)?.setValue(formattedValue);
  }

  semesterFormat(value: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/\D/g, '');
  
    // Modificação para o formato desejado (0000-0)
    const formattedValue = numericValue.replace(/(\d{4})(\d{1})/, "$1-$2");
  
    this.form.get(value)?.setValue(formattedValue);
  }
  
  onInputChangeChar(controlName: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
    this.form.get(controlName)?.setValue(numericValue);
  }

  onSubmit() {
    this.elements = this.form.value;
    this.formValues = this.registerValidate.userValidate(this.elements);

    this.correctName = this.formValues.name;
    this.correctLastName = this.formValues.last_name
    this.correctRegistration = this.formValues.registration_number;
    this.correctUndergraduateDegree = this.formValues.undergraduate_degree;
    this.correctLevel = this.formValues.level;
    this.correctCpf = this.formValues.cpf;
    this.correctRg = this.formValues.rg;
    this.correctBirthDay = this.formValues.date_of_birth;
    this.correctEmail = this.formValues.email;
    this.correctPassWord = this.formValues.password;
    this.correctConfirmPassword = this.formValues.confirmPassword;
    this.correctSemester = this.formValues.semester;
    this.isFormValidate = this.formValues.isValidForm && this.formValues.confirmPassword

    if (this.formValues.isValidForm && this.formValues.confirmPassword) {
      this.form.reset();
    }
  }
  backPage() {
    this.endForm = window.confirm("Deseja cancelar a operação? Todos os dados digitados não salvos serão perdidos!");
    this.endForm && this.router.navigate(['/login']);
  }
}
