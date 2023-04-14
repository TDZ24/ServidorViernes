export class ControladorHabitaciones {
    constructor() {}
  
    registrandoHabitacion(peticion, respuesta) {
        let datosHabitacion = peticion.body
        console.log(datosHabitacion)
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, adding the data"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the data ma bro" + errorPeticion
        })
      }
    }
  
    buscandoHabitacion(peticion, respuesta) {
        let idHabitacion=peticion.params.idhabitacion
        console.log(idHabitacion)
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, faunding the room" + idHabitacion
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    buscandoTodasHabitaciones(peticion, respuesta) {
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, faunding the rooms"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    editandoHabitaciones(peticion, respuesta) {
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, modified the room"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the modified ma bro" + errorPeticion
        })
      }
    }
  }
  