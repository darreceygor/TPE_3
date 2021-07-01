window.onload = partial();

function partial(event)
{

    const url=`https://60c96f9a772a7600172037ef.mockapi.io/api/productos/productos/`
    ponerSB();
    
    traerProd(url);
    
}

function ponerSB(event)
{
    document.querySelector("#sidebar");
    let text = "partial/sidebar.html";
    fetch(text)
        .then(res => res.text())
        .then(text => {
                document.querySelector("#sidebar").innerHTML = text;
        });
}


async function traerProd(url){

    await fetch(url) /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datosProd =>{   /*traemos los datos para procesar*/
        listarProd(datosProd) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })

    
}

function listarProd(datosProd){

    let max=datosProd.length;
    let catalogo = document.getElementById("catalogo");

    for (let i=0;i<max;i++) {         /*pongo el valor de cada campo*/
        
        catalogo.innerHTML +=`
            <article id="contenido${i}" class="card">
                <div class ="item">
                    <div id="item-descripcion">
                        <img src="${datosProd[i].url}" alt="imagen ${i}" class="img-item">
                    <p>
                        <h4>${datosProd[i].descripcion}</h4> <br>
                            
                        Marca: ${datosProd[i].marca} <br>
                        Modelo: ${datosProd[i].modelo}<br>
                        Precio: ${datosProd[i].precio}<br><br>
                        <hr><br>
                        Especificaciones: <br><br>
                        ${datosProd[i].obslinea1} <br>
                        ${datosProd[i].obslinea2} <br>
                        ${datosProd[i].obslinea3} <br><hr>
                    </p>
                                    
                        <div id="botones" >
                                <button id="btn-agregar" class="enviar" name="boton${i}" 
                                data-id=${datosProd[i].id} data-marca=${datosProd[i].marca} 
                                data-modelo=${datosProd[i].modelo} data-precio=${datosProd[i].precio} >Agregar</button>
                        </div>
                    </div>
                </div>    
                </article>
    `
    }
}

document.addEventListener("click", async e => {

    let carro = document.getElementById("carrito");

    if (e.target.matches(".enviar")) {
        let fila =` ${e.target.dataset.id} - ${e.target.dataset.marca}  
                    ${e.target.dataset.modelo} = ${e.target.dataset.precio} <br>`;
         
        carro.innerHTML+= fila;   
       
        total=parseFloat(e.target.dataset.precio);
        console.log(total)
        actualizarCarro(total);
    };
})

let precioFinal=0;

async function actualizarCarro(total){
    let precioTotal = document.getElementById("totalCarro")
    precioFinal+=total;
    precioTotal.innerHTML = "";
    precioTotal.innerHTML = precioFinal;
    
}

