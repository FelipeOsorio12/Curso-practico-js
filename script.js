//Escuhar eventos

const h1 = document.querySelector('h1') 
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btncalcular')
const result = document.querySelector('#result')


btn.addEventListener('click', btnOnclick)

function btnOnclick (){

    let suma= parseInt(input1.value) + parseInt(input2.value)
    result.innerHTML = "Resultado: " + suma
}