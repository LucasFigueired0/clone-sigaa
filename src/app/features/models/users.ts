export interface Users {
    id?:number;
    name:string;
    email:string;
    last_name:string;
    username:string;
    registration_number:string;
    level:string;
    cpf:string;
    rg:string,
    date_of_birth:string,
    initial_semester:string,
    password?:string;
    confirmPassword?:string;
    courses?:Disciplinas[];
}

interface Disciplinas{
    id?:number;
    name?:string;
}
