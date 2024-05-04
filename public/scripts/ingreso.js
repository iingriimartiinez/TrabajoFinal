// Verificar conexion con html

console.log("Hola soy ingreso");
console.log("hola soy registro");
const form = document.getElementById('Formulario')
console.log(form)
form.addEventListener('submit',e=>{
    e.preventDefault()
})
//Crear mi funcion

const iniciarSesion = async () => {

    //1. Obtener los valores ingresados por el usuario

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('password').value;

    console.log(correo, contrasena);

    try {

        //2. Realizar la peticion GET a nuestra base de datos

        const respuesta = await fetch('http://localhost:3000/api/obtenerUsuario');
        const usuarios = await respuesta.json();

        console.log(usuarios);

        //3. Verificar si se encontro un usuario con el correo y la contraseña

        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);



        if(esUsuarioRegistrado){

            //Verificamos si es admin
            const correoAdmin = 'ingridtatianamartinezdiaz@gmail.com';
            if(esUsuarioRegistrado.correo == correoAdmin ){
                alert('Hola administrador!');
                window.location.href = './admin.html'

            }else{
                alert('Ingreso exitoso');
                window.location.href = './index.html'

            }


        }else{
            alert('correo o password incorrectos, Usuario no encontrado! Vuelve a intenterlo o registrarte');

        }


    } catch (error) {
    console.error('Error al verfificar inicio de sesion:', error);}

}