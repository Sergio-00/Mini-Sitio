const form = document.getElementById("formProducto");
const lista = document.getElementById("listaProductos");
const totalDiv = document.getElementById("total");

function crearCard(nombre, precio) {
  const card = document.createElement("div");
  card.className = "card";
  const titulo = nombre.trim().toUpperCase();
  card.innerHTML = `
        <h2>${titulo}</h2>
        <p>Precio: $${precio}</p>
        <img src="./assets/package.png" alt="Imagen del producto">
    `;
  return card;
}

function calcularTotal() {
  const cards = document.querySelectorAll(".card p");
  let suma = 0;
  cards.forEach((c) => {
    suma += parseInt(c.textContent.replace("Precio: $", ""));
  });
  return suma;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  if (!nombre?.trim() || !precio) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const card = crearCard(nombre, precio);
  lista.appendChild(card);

  totalDiv.textContent = "Total: $" + calcularTotal();

  form.reset();
});
