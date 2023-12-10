import { Injectable } from '@angular/core';
import { Users } from 'src/app/features/models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterValidateType } from '../models/registerValidateType';
import { UsersService } from '../services/users.service';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class RegisterValidate {
    form!: FormGroup;
    validForm!: RegisterValidateType;

    constructor(
        private formBuilder: FormBuilder,
        private usersService:UsersService,
        private router:Router
    ) { }

    private passwordValidation(password: string, confirmPassword: string): boolean {
        if ((password === confirmPassword)&&(password!='')) {
            return true;
        } else {
            return false;
        }
    }

    private userNameConverter(nameInput:string):string{
        const words = nameInput.split(" ");
        const name = words[words.length-1];

        const accentRemove = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const removeSpace = accentRemove.replace(/\s+/g, '');
        const lowercaseLetter = removeSpace.toLowerCase();
        return lowercaseLetter;
    }

    userValidate(object: Users): RegisterValidateType {
        this.form = this.formBuilder.group(
            {
                name: [`${object.name}`, [Validators.required, Validators.minLength(2)]],
                last_name: [`${object.last_name}`, [Validators.required, Validators.minLength(2)]],
                registration_number: [`${object.registration_number}`, [Validators.required, Validators.minLength(4)]],
                undergraduate_degree:[`${object.undergraduate_degree}`, [Validators.required,Validators.minLength(4)]],
                semester:[`${object.semester}`,[Validators.required,Validators.minLength(5)]],
                level: [`${object.level}`],
                cpf: [`${object.cpf}`, [Validators.required, Validators.minLength(11)]],
                rg: [`${object.rg}`, [Validators.required, Validators.minLength(4)]],
                date_of_birth: [`${object.date_of_birth}`,[Validators.required]],
                email: [`${object.email}`, [Validators.required, Validators.email]],
                password: [`${object.password}`,[Validators.maxLength(30),Validators.required, Validators.minLength(6)]],
                confirmPassword: [`${object.confirmPassword}`,[Validators.required]]
            }
        );
        this.validForm = {
            name: this.form.get('name')?.errors === null ? true : false,
            last_name: this.form.get('last_name')?.errors === null ? true : false,
            registration_number: this.form.get('registration_number')?.errors === null ? true : false,
            undergraduate_degree: this.form.get('undergraduate_degree')?.errors === null ? true : false,
            semester: this.form.get('semester')?.errors === null ? true : false,
            level: this.form.get('level')?.errors === null ? true : false,
            cpf: this.form.get('cpf')?.errors === null ? true : false,
            rg: this.form.get('rg')?.errors === null ? true : false,
            date_of_birth: this.form.get('date_of_birth')?.errors === null ? true : false,
            email: this.form.get('email')?.errors === null ? true : false,
            password: this.form.get('password')?.errors === null ? true : false,
            confirmPassword: this.passwordValidation(this.form.value.password, this.form.value.confirmPassword),
            isValidForm: this.form.valid
        }

        if(this.form.valid && this.passwordValidation(this.form.value.password, this.form.value.confirmPassword)){
            object['username'] = `${this.userNameConverter(object.name)}.${this.userNameConverter(object.last_name)}`;
            
            this.usersService.setUser(object).subscribe({
                next:() => {
                  this.usersService.isValidLogin();
                  const sucess = window.confirm("Usuário criado com sucesso! Deseja voltar à tela de login?");
                  sucess && this.router.navigate(['/login']);
                },
                error:(error) => {
                  console.error('Erro ao criar usuário:', error);
                }
            });
        }

        return this.validForm
    }
}
