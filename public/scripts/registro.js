//1. Verificar conexion con html
console.log("hola soy registro");
const form = document.getElementById('Formulario')
form.addEventListener('submit',e=>{
    e.preventDefault()
})

//2 Crear mi funcion para registro

const Iniciarsesion = async () => {

    //2.1 Obtener los datos de mi formulario
    const nombreCompleto = document.getElementById('Username').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('password').value;


    console.log(nombreCompleto, correo, contrasena);

    // 2.2 Crear un objeto con los datos del usuario

    const User = {
        nombreCompleto,
        correo,
        contrasena
    }

    console.log(User);

    //2.3 Hacer la peticion POST Ppara crear usuario en nuestra base de datos

    try {

        const respuesta = await fetch('http://localhost:3000/api/crearUsuario',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(User)
            }
        );

        const nuevoUsuario = await respuesta.json();
        console.log('Usuario creado exitosamente', nuevoUsuario);

        //Condicional para redireccionar para ingreso

        if(nuevoUsuario.correo){
            alert('Registro exitoso!');
            window.location.href = './ingreso.html'
        } else{
            alert('Ups! erro de registro, intentelo nuevamente');
        }

    } catch (error) {
        console.error('Error al registrar usuario', error);
    }
} 