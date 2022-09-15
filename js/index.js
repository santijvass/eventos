

 const productos =
 [
   {
    id : 1,
    imagen : "./imagenes/corderito blanco.jpg",
    descripcion : "buzo-corderito",
    nombre : "buzo corderito",
    precio : 800,
    talle : "1",
    disponibilidad : true
},

{
    id : 2,
    imagen : "./imagenes/bichitos disfraz.jpg",
    descripcion : "disfraz-perro",
    nombre : "disfraz perro",
    precio : 850,
    talle : "1",
    disponibilidad : true
},

{
    id : 3,
    imagen : "./imagenes/funda .jpeg",
    descripcion : "funda-para-auto-con-lateral",
    nombre : "funda para auto con lateral",
    precio : 8000,
    talle : "unico",
    disponibilidad : false
}



 ]

const eventos = () =>
{
    let buttons = document.querySelectorAll('.button');
 for (const button of buttons) {
    button.addEventListener('click', ()=>{
        for (const prod of productos) {
            if(prod.id == button.id){
                alert('producto name:', prod.nombre)
            }
        }
    })
 }
}


const cargaProducto = (productos) => 
{
    let container = document.querySelector('#container');
    console.log('container:', container);
    for (const product of productos) {
        let div = document.createElement('div');
        div.setAttribute('class','card');
        div.innerHTML = `
        <img class="imagen" src="${product.imagen}" alt="${product.descripcion}">
        <h3 class="precio">$${product.precio}</h3>
        <h4 class="nombre">${product.nombre}</h4>
        <button class="button" id='${product.id}'> Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    
}

cargaProducto(productos);


