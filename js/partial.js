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
                                <button id="btn-agregar" class="enviar" name="boton${i}" >Agregar</button>
                        </div>
                    </div>
                </div>    
                </article>
    `
    }

    tomarBtn();

}


async function tomarBtn () {
    let btn = document.getElementsByClassName("enviar")

    console.log(btn);

    id = btn[4].name

    console.log(id).addEventListener("click",ponerCarro);;


let marca=[];
let modelo=[];
let precio=[];


let cantidad=[0,0,0,0,0,0,0,0];
let totalCarro=[0,0,0,0,0,0,0,0];
let totalFinal=0;

/* function agregarBtn(){
let btn = document.getElementById("boton1").addEventListener("click",ponerCarro); */


}


function ponerCarro(data){

  fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data =>{   
     
        let carro = document.querySelector("#carrito")
        
        cantidad[0] = cantidad[0]+1;
        carro.innerHTML="";
        console.log(cantidad[0]);
        carro.innerHTML += 
                `=> ${data[0].modelo} - 
                 Cantidad: ${cantidad[0]} 
                Precio: ${data[0].precio}`;
                 
                let precioTotal = document.querySelector("#totalCarro")

                marca[0]=data[0].marca; console.log(marca[0]);
                modelo[0]=data[0].modelo; console.log(modelo[0]);
                precio[0]=data[0].precio; console.log(precio[0]);

                sumarCarro(data[0].precio);
                  
               
    })}

function sumarCarro(valor){
    
        totalFinal+=valor
        
        actualizarCarro();

}

function actualizarCarro(){
    let precioTotal = document.querySelector("#totalCarro")

    precioTotal.innerHTML = "";
    precioTotal.innerHTML = totalFinal;
    
}
