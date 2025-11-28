const form = document.getElementById("formProducto");
const lista = document.getElementById("listaProductos");

function crearCard(nombre, precio) {
  const card = document.createElement("div");
  card.className = "card";
  const titulo = nombre.toUpperCase();
  card.innerHTML = `
        <h2>${titulo}</h2>
        <p>Precio: $${precio}</p>
        <img src="./assets/package.png">
    `;
  return card;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  console.log("Producto guardado:", nombre, precio);
});
