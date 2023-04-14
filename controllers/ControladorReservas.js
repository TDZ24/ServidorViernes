export class ControladorReservas {
    constructor() {}
  
    registrandoReservas(peticion, respuesta) {
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
  
    buscandoReservas(peticion, respuesta) {
        let idReserva=peticion.params
        console.log(idReserva)
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, faunding the reservation"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    buscandoTodasReservas(peticion, respuesta) {
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, faunding the reservations"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    editandoReservas(peticion, respuesta) {
      try {
        respuesta.status(200).json({
          mensaje: "Succesfull, modified the reservation"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the modified ma bro" + errorPeticion
        })
      }
    }

    eliminarReservas(peticion, respuesta) {
        try {
          respuesta.status(200).json({
            mensaje: "Succesfull, eliminated the reservation"
          })
        } catch (errorPeticion) {
          respuesta.status(400).json({
            mensaje: "Error in the eliminated ma bro" + errorPeticion
          })
        }
      }
  }
  