import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/app/features/models/users';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: [''],
        last_name: [''],
        registration_number: [''],
        level: [''],
        cpf: [''],
        rg: [''],
        date_of_birth: [''],
        email: ['',Validators.required],
        password: [''],
        confirmPassword: ['']
      }
    );
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
  

  onInputChangeChar(controlName: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
    this.form.get(controlName)?.setValue(numericValue);
  }

  onSubmit() {
    this.elements = this.form.value;
    console.log("###", this.elements);
  }
  backPage() {
    this.endForm = window.confirm("Deseja cancelar a operação? Todos os dados digitados não salvos serão perdidos!");
    console.log("###", this.endForm);
    this.endForm && this.router.navigate(['/login']);
  }
}
