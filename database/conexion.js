import mongoose from 'mongoose'

export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("Exito Al conectarse")

    }catch(error){
        console.log("Fallo al conectarse")

    }

}