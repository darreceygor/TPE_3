

//TRAE LAS PC ARMADAS DESDE TABLA.JSON => ARMADO.HTML
function traer(){
    fetch('json/tabla.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
        tabla(datos) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })
}


function tabla(datos){
    contenido.innerHTML='' /*borra datos existentes*/
 
    for (let valor of datos) {         /*pongo el valor de cada campo*/
        
            contenido.innerHTML +=`
                <tr>
                    <td>${valor.id}</td>
                    <td>${valor.fecha}</td>
                    <td>${valor.componente}</td>
                    <td>${valor.cantidad}</td>
                    <td>${valor.modelo}</td>
                    <td>${valor.descripcion}</td>
                </tr>
        `
    }
}

