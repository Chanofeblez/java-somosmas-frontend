export class Miembro
{
    id?: string;
    nombre: string;
    primerApellido:string;
    segundoApellido?: string;
    telefono:string;
    email: string;
    password: string;
    ciudad: string;
    pais: string;

    constructor()
    {
        this.id = '';
        this.nombre = '';
        this.primerApellido = '';
        this.segundoApellido = '';
        this.telefono = '';
        this.email = '';
        this.password = '';
        this.ciudad = '';
        this.pais = '';
    }

    
}