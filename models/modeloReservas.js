import mongoose from "mongoose"

const Schema = mongoose.Schema;

/* Se Construye el esquema personalizado para la informacion name, lastname, tel, date initial, date final, number of persons, id*/
const Reserva = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    fechaInicial:{
        type: Date,
        required: true
    },
    fechaFinal:{
        type: Date,
        required: true
    },
    numeropersona:{
        type: Number,
        required: true
    },
    costoReserva:{
        type: Number,
        default:0
    },
    idHabitacion:{
        type: String, 
        required: true
    }

})

export const modeloReserva = mongoose.model('Reserva', Reserva)