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
                        <img src="${datosProd[i].url}" alt="imagen ${i}" id="img-item">
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


  
function ponerCarro2(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data2 =>{   

        let carro2 = document.querySelector("#carrito2")
        cantidad[1] = cantidad[1]+1;
        carro2.innerHTML="";
        carro2.innerHTML+= 
                `${data2[1].modelo} - 
                Cantidad: ${cantidad[1]} 
                Precio: ${data2[1].precio*cantidad[1]}`;
                
                let precioTotal = document.querySelector("#totalCarro")

                marca[1]=data2[1].marca; console.log(marca[1]);
                modelo[1]=data2[1].modelo; console.log(modelo[1]);
                precio[1]=data2[1].precio; console.log(precio[1]);

                sumarCarro(data2[1].precio);
    })
     
}   


function ponerCarro3(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data3 =>{   

        let carro3 = document.querySelector("#carrito3")
        cantidad[2]+=1;
        carro3.innerHTML="";
        carro3.innerHTML+= 
                `${data3[2].modelo} - 
                Cantidad: ${cantidad[2]} 
                Precio: ${data3[2].precio}`;
                
                let precioTotal = document.querySelector("#totalCarro")

                sumarCarro(data3[2].precio);
    })
     
}  

function ponerCarro4(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data4 =>{   

        let carro4 = document.querySelector("#carrito4")
        cantidad[3]+=1;
        carro4.innerHTML="";
        carro4.innerHTML+= 
                `${data4[3].modelo} - 
                Cantidad: ${cantidad[3]} 
                Precio: ${data4[3].precio}`;

                sumarCarro(data4[3].precio);
                
                
    })
     
}  

function ponerCarro5(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data5 =>{   

        let carro5 = document.querySelector("#carrito5")
        cantidad [4]+=1;
        carro5.innerHTML="";
        carro5.innerHTML+= 
                `${data5[4].modelo} - 
                Cantidad: ${cantidad[4]} 
                Precio: ${data5[4].precio}`;
                
                sumarCarro(data5[4].precio);
                
                
    })
     
}  

function ponerCarro6(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data6 =>{   

        let carro6 = document.querySelector("#carrito6")
        cantidad [5]+=1;
        carro6.innerHTML="";
        carro6.innerHTML+= 
                `${data6[5].modelo} - 
                Cantidad: ${cantidad[5]} 
                Precio: ${data6[5].precio}`;
                
                sumarCarro(data6[5].precio);
                
                
    })
     
} 

function ponerCarro7(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data7 =>{   

        let carro7 = document.querySelector("#carrito7")
        cantidad [6]+=1;
        carro7.innerHTML="";
        carro7.innerHTML+= 
                `${data7[6].modelo} - 
                Cantidad: ${cantidad[6]} 
                Precio: ${data7[6].precio}`;
                
                sumarCarro(data7[6].precio);
                
                
    })
     
}

function ponerCarro8(){
    fetch('json/producto.json') 
    .then(res => res.json()) 
    .then(data8 =>{   

        let carro8 = document.querySelector("#carrito8")
        cantidad [7]+=1;
        carro8.innerHTML="";
        carro8.innerHTML+= 
                `${data8[7].modelo} - 
                Cantidad: ${cantidad[7]} 
                Precio: ${data8[7].precio}`;
                
                sumarCarro(data8[7].precio);

               

    })
     
}

function sumarCarro(valor){
    
        totalFinal+=valor
        
        actualizarCarro();

}

function actualizarCarro(){
    let precioTotal = document.querySelector("#totalCarro")

    precioTotal.innerHTML = "";
    precioTotal.innerHTML = totalFinal;
    
}
