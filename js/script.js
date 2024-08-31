const datos = {
    nombre:'',
    email:'',
    mensaje:''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.fomulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto)

// Validar fromulario 
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

     const {nombre, email,mensaje} = datos;

     if(nombre === '' || email === '' || mensaje === ''){

    //se le agrega un segundo valor en boleano "true" = error
    //para usarlo como identificador posteriormente
        mostrarAlerta('Ingresa los campos obligatiorios', true)

        return;
     }
   
     else{
        mostrarAlerta('Se ha enviado el fomulario')
     }
     
});
// leer los datos desde form
function leerTexto (e) {
    datos[e.target.id] = e.target.value;
}

//refactory 

const mostrarAlerta = (mensaje, error= null) =>{ // se le asigna un valor por default
    const alerta = document.createElement('P'); //con la finalidad de que si no esta el valor boleano no haya problemas 
    alerta.textContent = mensaje;
    if( error){
        alerta.classList.add('error');
        
        
    }else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);

    //desvanecimeinto de la alerta 
    
    setTimeout(() =>{

        error.remove();
    }, 5000)
 

}


/*
// Muestra error en pantalla

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');


   formulario.appendChild(error)

    // Desvanecer despues de 5s

    setTimeout(() =>{

        error.remove();
    }, 5000)
 
}

const mostrarMensaje =(mensaje) =>{
    const completo = document.createElement('P');
    completo.textContent = mensaje;
    completo.classList.add('alerta');
    console.log(mensaje)
     formulario.appendChild(completo)

    setTimeout(() =>{

        error.remove();
    }, 5000)
}
    */
