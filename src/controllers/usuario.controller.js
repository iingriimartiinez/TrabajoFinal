//Importamos dependencias - lo que necesitemos para el funcionamiento del codigo
import usuarioModel from '../models/usuario.model.js';





/*Peticiones

GET -> Me muestra mis usuarios
POST -> Crear usuarios
PUT -> Me modifica mis usuarios
DELETE -> Elimina mis usuarios

*/


//Prueba Inicial
//LOGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    

    //Manejo de errores con try y catch

    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});
    }
    
}



// LOGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    //manejo de errores con try y catch

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario)
    }catch(error){
        return res.json({error: "error al crear el usuario,holi" ,message:error.message});

    }
}

//LOGICA
//LOGICA PARA MODIFICAR USUARIOS
export const putUsuario = async(req, res) => {
   try{
    let datosModificar = req.body;
    let idModificar = req.params._id;

    await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
    return res.json({message:"Usuario actualizado correctamente"})
   }catch(error){
    return res.json({error: "error al modificar usuario" ,message:error.message});

   }
   
    
}
// LOGICA PARA ELIMIAR USUARIOS
export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario Eliminado correctamente"});

        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }
    }catch(error){
        return res.json({error: "error al eliminar usuario" ,message:error.message});
    }
}