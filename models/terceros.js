import mongoose from 'mongoose'

const tercerosSchema= new mongoose.Schema({
    nombre:{type:String, required:true},
    identificacion:{type:Number, required:true},
    direccion:{type:String, required:true},
    telefono:{type:Number, required:true},
    tipo:{type:Number, required:true}, 
    estado:{type:Number, required:true, default:1} 
},{
    timestamps:true
})

const tercerosModel = mongoose.model("terceros",tercerosSchema)
export default tercerosModel  