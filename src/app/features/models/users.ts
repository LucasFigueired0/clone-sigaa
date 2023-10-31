export interface Users {
    id:number;
    name:string;
    email:string;
    password?:string;
    courses:Disciplinas[];
}

interface Disciplinas{
    id:number;
    name:string;
}
