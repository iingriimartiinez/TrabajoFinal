//IMPORTAMOS DEPENDENCIAS
//Rutas nos conectan el front


import express from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario.controller.js';

//Defini una variable para nuestras rutas

const usuarioRouter = express.Router();

//Definimos nuestras rutas especificas
usuarioRouter.get('/obtenerUsuario', getUsuario);


//Ruta para crear usuario
usuarioRouter.post('/crearUsuario', postUsuario);

//Ruta para modificar usuarios por su Id-> Identificador unico
usuarioRouter.put('/modificarUsuario/:_id', putUsuario);

//Ruta para eliminar usuario
usuarioRouter.delete('/eliminarUsuario/:_id', deleteUsuario);


//Exportamos las rutas
export default usuarioRouter;
