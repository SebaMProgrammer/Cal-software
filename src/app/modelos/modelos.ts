export class Usuario {
    nombre: string = '';
    apellido: string = '';
    rut: string = '';
    esProfesor: string = '';
    asignaturas_inscrita: [] = [];
    asignaturas_a_cargo: [] = [];
    correo: string = '';
    contrasena: string = '';
}

export class Asignatura {
    nombre: string = '';
    codigo:string = '';
    alumnos_inscritos : [] = [];
    profesor: string = '';
}

export class Asistencia {
    fecha: number = 0;
    alumnos_presentes: [] = [];
    nombre_asignatura: string = '';
    codigo_asignatura: string = '';
    id_asistencia: string = '';
}


