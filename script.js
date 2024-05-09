/*
    La forma que tenemos de interactuar con un documento html desde nuestro archivo de js, es mediante el objeto "document", esto es posible gracias al navegador que utilizemos el cual nos brinda toda estas funciones, pero en otros entornos como node.js para el manejo de backend no existen este tipo de funciones 
*/

/*
    Ya para traer propiamente un elemento del html al archivo js hay varias formas, la siguiente es una de estas:
*/

const h1 = document.querySelector('h1') //no esta trayendo todos los h1 del documento html, trae el primero que encuentra.
const p = document.querySelector('p') 
const parrafito = document.querySelector('.parrafito') //acá esta haciendo referencia a la clase "parrafito"
const pid =  document.querySelector('#pid') // acá esta haciendo referencia al id "pid"
const input =   document.querySelector('input')


// Como es de forma habitual utilizamos el console.log para depurar nuestro codigo y mostrar lo que contiene las constantes que definimos anteriormente 
console.log({ 
    h1,
    p,
    parrafito,
    pid,
    input
})

// Para poder insertar texto o nuevas etiquetas dentro del documento html a traves del archivo .js, lo hacemos mediante el metodo .innerHTML
h1.innerHTML= 'patito' 

/*

// El metodo .getAttribute nos trae el atributo establecido de algún elemento del documento HTML
h1.getAttribute('class')
// Y con el metodo de .setAttribute podemos cambiar el atributo establecido de algún elemento del documento HTML
h1.setAttribute('class','rojo')

*/

//Si lo que se quiere modificar es una clase en especifico, lo hacemos de la siguiente manera:


h1.classList.add('rojo') //acá le estamos asignando la clase rojo a la etiqueta h1
h1.classList.remove('verde')//Y acá le estamos quitando la clase verde a la etiqueta h1

//Para crear el elemento de html que nosotros queramos desde JS, usamos el siguiente metodo:

const img = document.createElement('img'); //Creando un elemento/etiqueta de tipo imagen de html desde js

img.setAttribute('src', 'Assets/imagen1.png') //Al anterior elemento/etiqueta que creamos le estamos asignado el atributo "src" que tiene toda imagen

pid.innerHTML=''
pid.append(img) // a nuestra constante que tiene el elemento/etiqueta con id "pid" le estamnos agregando el elemento img que creamos desde JS