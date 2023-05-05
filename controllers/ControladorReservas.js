import { ServicioReservas } from "../services/ServicioReservas.js"
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorReservas {
    constructor() {}
  
    async registrandoReservas(peticion, respuesta) {
      let datosReserva = peticion.body

      let servicioHabitacion = new ServicioHabitaciones()
      let servicioReserva = new ServicioReservas()
      let fechaInicio = new Date(datosReserva.fechaInicial)
      let fechaFinal = new Date(datosReserva.fechaFinal)
      console.log(fechaInicio)
      console.log(fechaFinal)
      try {
        let habitacion = await servicioHabitacion.buscarHabitacion(datosReserva.idHabitacion)
        if (habitacion){
          if(Date.parse(fechaFinal)< Date.parse(fechaInicio)){
              respuesta.status(400).json({
                mensaje:"La fecha de ingreso no puede ser menor a la de salida"
            })
          }else{
          console.log(habitacion)
          const diferenciaEnMilisegundos = Math.abs(fechaFinal.getTime() - fechaInicio.getTime());
          const cantidadDeDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 3600 * 24));
          const costoReserva = habitacion.precioNoche * cantidadDeDias
          const valortotal = "costoReserva"
          datosReserva[valortotal]= costoReserva
          console.log(datosReserva)
          await servicioReserva.registrarReserva(datosReserva)
          respuesta.status(200).json({
             mensaje: "Succesfull, adding the data"
          })
          }
        }
        else{
          respuesta.status(400).json({
            "mensaje":"La habitacion con ese id no existe"
          })
        }
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the data ma bro"+errorPeticion
        })
      }
    }
  
    async buscandoReservas(peticion, respuesta) {
        let idReserva = peticion.params.idReserva
        let servicioReserva = new ServicioReservas()
        try {
          respuesta.status(200).json({
            "mensaje": "Succesfull, faunding the reserv",
            "reserva": await servicioReserva.buscarReserva(idReserva)
  
          })
        } catch (errorPeticion) {
          respuesta.status(400).json({
            "mensaje": "Error in the found ma bro" + errorPeticion
          })
        }
      }
  
    async buscandoTodasReservas(peticion, respuesta) {
      let servicioReserva = new ServicioReservas()
      try {
        respuesta.status(200).json({
          "mensaje": "Succesfull, faunding the reservs",
          "reserva": await servicioReserva.buscarTodasReservas()
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    async editandoReservas(peticion, respuesta) {
      let idReserva= peticion.params.idReserva
      let datosReserva= peticion.body
      let servicioReserva = new ServicioReservas()
      try {
        await servicioReserva.editarReservas(idReserva,datosReserva)
        respuesta.status(200).json({
          "mensaje": "Succesfull, modified the reservation",
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          "mensaje": "Error in the modified ma bro" + errorPeticion
        })
      }
    }

    async eliminarReservas(peticion, respuesta) {
      let idReserva= peticion.params.idReserva
      let datosReserva= peticion.body
      let servicioReserva = new ServicioReservas()
      try {
        await servicioReserva.eliminarReserva(idReserva,datosReserva)
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