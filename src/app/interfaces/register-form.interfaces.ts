export interface RegisterForm{
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    password?: string;
    id?: number;
    telefono: string;
    ciudad: string;
    pais: string;
    unRol?: string;
    terminos?:boolean;
}