import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorHabitaciones {
    constructor() {}
  
    async registrandoHabitacion(peticion, respuesta) {
        let datosHabitacion = peticion.body
        let servicioHabitacion = new ServicioHabitaciones()
      try {

        if(datosHabitacion.precioNoche < 100 && datosHabitacion.cantidadmaxima <2 ){
          respuesta.status(400).json({
            "mensaje":"Revisa el precio por noche y la cantidad maxima de personas ingresadas"
          })

        }else if(datosHabitacion.precioNoche < 100){
          respuesta.status(400).json({
            "mensaje":"Revisa el precio por noche y la cantidad maxima de personas ingresadas"
          })
        }
        else if (datosHabitacion.cantidadmaxima < 2 ){
          respuesta.status(400).json({
            "mensaje":"Muy poca gente en esta habitacion"
          })
        }
        else{
          await servicioHabitacion.registrarHabitacion(datosHabitacion)
          respuesta.status(200).json({
          "mensaje": "Succesfull, adding the data"
        })
      }
        
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the data ma bro"+errorPeticion
        })
      }
    }
  
    async buscandoHabitacion(peticion,respuesta) {
        let idHabitacion = peticion.params.idHabitacion
        let servicioHabitacion = new ServicioHabitaciones()
      try {
        respuesta.status(200).json({
          "mensaje": "Succesfull, faunding the room",
          "habitacion": await servicioHabitacion.buscarHabitacion(idHabitacion)

        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    async buscandoTodasHabitaciones(peticion, respuesta) {
      let servicioHabitacion = new ServicioHabitaciones()
      try {
        respuesta.status(200).json({
          "mensaje": "Succesfull, faunding the rooms",
          "haitaciones": await servicioHabitacion.buscarTodasHabitaciones()
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    async editandoHabitaciones(peticion, respuesta) {
      let idHabitacion= peticion.params.idHabitacion
      let datosHabitacion= peticion.body
      let servicioHabitacion = new ServicioHabitaciones()
      try {
        await servicioHabitacion.editarHabitaciones(idHabitacion,datosHabitacion)
        respuesta.status(200).json({
          "mensaje": "Succesfull, modified the room",
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the modified ma bro" + errorPeticion
        })
      }
    }
  }
  