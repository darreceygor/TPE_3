"use strict"
/*constantes botones, input, codigo de seguridad*/

const cambiarTexto = document.querySelector('.cambiar-texto');
const leerTexto = document.querySelector('.leer-texto');
const codigo = document.querySelector('.codigo-seguridad');
const input = document.querySelector('.input-usuario');
const verificar = document.querySelector('.verificar');

/*escucha el click del usuario*/

cambiarTexto.addEventListener('click', () =>{
    codigo.textContent = crearCaptcha();
});
window.addEventListener('load', () =>{
    codigo.textContent = crearCaptcha();
});
/*funcion crear captcha*/

function crearCaptcha(){
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
    let a =  letras[Math.floor(Math.random() * letras.length)];
    let b =  letras[Math.floor(Math.random() * letras.length)];
    let c =  letras[Math.floor(Math.random() * letras.length)];
    let d =  letras[Math.floor(Math.random() * letras.length)];
    let e =  letras[Math.floor(Math.random() * letras.length)];
    let f =  letras[Math.floor(Math.random() * letras.length)];
    let g =  letras[Math.floor(Math.random() * letras.length)];
    let codigo = a + b + c + d + e + f + g;
    return codigo;
}

/*verificar el codigo ingresado*/ 
verificar.addEventListener('click' , () =>{
    let valor = input.value;
    if (valor == ''){
        let salida = document.getElementById("salida");
        salida.innerHTML = "Por Favor, ingrese el codigo";
    }
    else if(valor == codigo.textContent){
        let salida = document.getElementById("salida");
        salida.innerHTML = "Codigo Valido";
    }
    else{
        let salida = document.getElementById("salida");
        salida.innerHTML = "Codigo invalido";
    }
});
