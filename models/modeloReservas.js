import mongoose from "mongoose"

const Schema = mongoose.Schema;

/* Se Construye el esquema personalizado para la informacion name, lastname, tel, date initial, date final, number of persons, id*/
const Reserva = new Schema({
    id:{
        type: String,
        required: true
    },
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
    fechainicial:{
        type: Date,
        required: true
    },
    fechafinal:{
        type: Date,
        required: true
    },
    numeropersona:{
        type: Number,
        required: true
    }

})

export const modeloHabitacion = mongoose.model('Reserva')