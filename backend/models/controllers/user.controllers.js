import { modelo } from "../models/user.model.js";
TextDecoderStream(() =>{
    console.log('si funciona la conexion entre el modelo y el controlador')
})
modelo.create({
    name: "Gabriel"
})