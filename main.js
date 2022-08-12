const saveDataParse = JSON.parse(localStorage.getItem("carritoSesion"))


const calzados = [
    {
        id: 1,
        nombre: "Nike Air Force 1",
        color: "Blanco",
        precio: 3990
    },
    {
        id: 2,
        nombre: "Nike Air Max Sc",
        color: "Verde y Blanco",
        precio: 4990,
    },
    {
        id: 3,
        nombre: "Nike Air Max Excee",
        color: "Negro y Blanco",
        precio: 6990,
    },
    {
        id: 4,
        nombre: "Nike Air Max Bella",
        color: "Lila",
        precio: 5990
    },
    {
        id: 5,
        nombre: "Nike Air Zoom Pegasus 38",
        color: "Blanco y Rojo",
        precio: 4990
    },
    {
        id: 6,
        nombre: "Nike Quest 5",
        color: "Negro",
        precio: 5590
    },
    {
        id: 7,
        nombre: "Nike Max Infinity 2",
        color: "Negro y blanco",
        precio: 5990
    },
    {
        id: 8,
        nombre: "Nike Revolution 5",
        color: "Azul",
        precio: 7990
    },
    {
        id: 9,
        nombre: "Nike Winflo 8 Premium",
        color: "Blanco y dorado",
        precio: 6690
        },
]

const contenedorCarrito = document.getElementById("carrito");
const precioTotal = document.getElementById("precioTotal");


let carrito = [];

const agregarAlCarrito = (prodId) => {
    const item = calzados.find((prod) => prod.id === prodId);
    carrito.push(item);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.classList = ("productosEnCarrito");
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$ ${prod.precio}</p>
        <p>${prod.color}</p> `

        contenedorCarrito.appendChild(div);
    })

    precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}



calzados.forEach((calzado) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h4> ${calzado.id} - ${calzado.nombre} </h4>
        <p>Color: ${calzado.color} </p>
        <p>$ ${calzado.precio}</p>
        <button id="agregar${calzado.id}">Agregar al carrito</button>`
    
        document.getElementById("catalogoCalzado").append(card);

        const boton = document.getElementById(`agregar${calzado.id}`);
        boton.onclick = () => {
            agregarAlCarrito(calzado.id);
        }
})


