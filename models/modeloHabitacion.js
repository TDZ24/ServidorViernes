import mongoose from "mongoose"

const Schema = mongoose.Schema;

/* Se Construye el esquema personalizado para la informacion */
const Habitacion = new Schema({
    nombre:{
        type: String,
        required: true
    },
    foto:{
        type: [String],
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precioNoche:{
        type: Number,
        required: true
    },
    cantidadmaxima:{
        type: Number,
        required: true
    }

})

export const modeloHabitacion = mongoose.model('Habitacion', Habitacion)