//Importamos las dependencias que necesitamos
import mongoose from 'mongoose';

//Crear una funcion que nos conecte la base da datos
const conexionMongo = async() => {

    await mongoose.connect(process.env.BD_URL,{})


    //control de errores try - catch
    try{
        console.log('Excelente! Conexión exitosa');

    } catch(error){
        console.log ('Error de conexion' , error.message);
    }


}
//tenemos que exportar nuestra funcion para llamarla desde nuestro servidor
export default conexionMongo;