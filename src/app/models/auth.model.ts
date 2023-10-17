export interface User {
    detalles: any
    curp: string | null
    idDistrito: string
    nombreCompleto: string
    idEstado: string
    email: string
    nombreCorto: string
    nombreUsuario: string
    secciones: string | null
    primerLogin: string | null
    fechaServidor: string | null
    enabled: boolean
    password: string
    username: string
    dn: string | null
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
    authorities: Authority[]
    idRol: string
    status?: number
    Mensaje?: string
}

export interface UserDTO extends Partial<User> {

}

export interface Authority {
    authority: string
}

export interface ErrorLoginResponse {
    status: number
    Mensaje: string
}
