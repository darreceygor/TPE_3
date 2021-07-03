document.addEventListener('DOMContentLoaded', function() {
    'Use strict';
    let tablaAdmin = document.querySelector('#contenido'); /*guarda el id en la variable*/
    let tablaUsuario = document.querySelector('#tabla-usuario')
    let contenidoTabla = [];
    let ultimoId = 0;

    traerDatosPordefecto();
    
    function traerDatosPordefecto() {
        fetch('json/producto.json') /*toma la direccion del arhivo json a tratar*/
            .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
            .then(datos => { /*traemos los datos para procesar*/
                cargarTablaAdmin(datos);
            });
    }
    
    function cargarTablaAdmin(datos) {
        tablaAdmin.innerHTML = '';
        cargarTabla(tablaAdmin, datos)
    }

    function cargarTablaUsuario(datos) {
        tablaUsuario.innerHTML = ''; 
        cargarTabla(tablaUsuario, datos);
    }

    function cargarTabla(tabla, datos) {
        datos.forEach(valor => {
            tabla.innerHTML += `
            <tr>
                <td>${valor.id}</td>
                <td><img src="${valor.url}" id="img-item-adm"></td>
                <td>${valor.marca}</td>
                <td>${valor.modelo}</td>
                <td>${valor.precio}</td>
                <td>${valor.obslinea1}</td>
                <td>${valor.obslinea2}</td>
                <td>${valor.obslinea3}</td>
            </tr>
            `
        });
    }
    
    /*La API Fetch es una funcionalidad con la cual podemos realizar 
    peticiones asíncronas y obtener respuesta a las mismas de una forma sencilla.*/
  
    document.getElementById('agregarItem').addEventListener('click', () => {
        if(verificarInputsVacios()) {
            contenidoTabla.push(crearObjeto());
            cargarTablaUsuario(contenidoTabla);
        }
    });
    
    document.getElementById('agregarItem-3').addEventListener('click', () => {
        let objetos = [{
            "id": ultimoId++,
            "marca": "test",
            "modelo": "test",
            "precio": "test",
            "obslinea1": "test",
            "obslinea2": "test",
            "obslinea3": "test",
            "url": "../img/item1.jpg"
        }, {
            "id": ultimoId++,
            "marca": "test",
            "modelo": "test",
            "precio": "test",
            "obslinea1": "test",
            "obslinea2": "test",
            "obslinea3": "test",
            "url": "../img/item1.jpg"
        }, {
            "id": ultimoId++,
            "marca": "test",
            "modelo": "test",
            "precio": "test",
            "obslinea1": "test",
            "obslinea2": "test",
            "obslinea3": "test",
            "url": "../img/item1.jpg"
        }];
        objetos.forEach(obj => {
            contenidoTabla.push(obj);
        }); /*llamamos a la fc tabla que pondra los datos en la pagina */
        cargarTablaUsuario(contenidoTabla);
    });
    
    function crearObjeto() {
        let obj = {
            "id": contenidoTabla.length,
            "marca": document.getElementById("inputProdMarca").value,
            "modelo": document.getElementById("inputProdModelo").value,
            "precio": document.getElementById("inputProdPrecio").value,
            "obslinea1": document.getElementById("inputProdObs1").value,
            "obslinea2": document.getElementById("inputProdObs2").value,
            "obslinea3": document.getElementById("inputProdObs3").value,
            "url": "../img/item1.jpg"
        };
        return obj;
    }
    
    function verificarInputsVacios() {
        let inputs = (document.getElementById('inputs').querySelectorAll('input'));
        let inputVacio = false;
        inputs.forEach(input => {
            if(!inputVacio){
                inputVacio = input.value != "";
            }
        }); 
        console.log(inputVacio)
        return inputVacio;
    }
});