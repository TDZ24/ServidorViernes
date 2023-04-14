import express from "express"
import {rutas} from "./routes/rutas.js"
import { establecerConexion } from "./database/conexion.js"

export class API{
    constructor(){
        this.app = express()  //APP es express
        this.enrutarPeticiones()
        this.conectarBD()
    }
    despertarServidor(){
        this.app.listen(3000,()=> console.log("Servidor encendido..."))
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarBD(){
        establecerConexion ()
    }
}