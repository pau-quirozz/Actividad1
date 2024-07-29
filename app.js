import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log('si funciona la conexion a la base')
})
.catch((error) => {
    console.log('no funciono la conexion a la base')
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('se escucha perfectamente tu servidor local')
} )

const esquema = new mongoose.Schema({
    name:{
        type: String
    }
})

const modelo = new mongoose.model('tabla', esquema)
modelo.create({
    name: "Gabriel"
})