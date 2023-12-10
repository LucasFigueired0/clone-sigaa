export interface IsLoginValid {
    isLoggedIn: boolean | undefined,
    id: number | undefined,
    name?:string,
    last_name?:string,
    email?:string,
    registration_number?:string,
    undergraduate_degree?:string,
    initial_semester?:string,
    level?:string
}