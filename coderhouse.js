alert ("Bienvenido a la creacion de un producto")

let tituloProducto = prompt("Ingrese el titulo de su producto")
let titulo = document.getElementById("El titulo de su producto sera: " + titulo)
titulo.innerHTML = tituloProducto

let descripcionProducto = prompt("Ingrese una descripcion para su producto")
let descripcion = document.getElementById("La descripcion de su producto sera: " + descripcionProducto)
titulo.innerHTML = descripcionProducto

let precioProducto = prompt("Ingrese un precio para su producto")
let precio = document.getElementById("Su preco es $: " + precioProducto)
function solicitarValor() {
  precioProducto = Number(prompt("Ingrese el valor a simular"));
  while (isNaN(precioProducto) || "" == precioProducto) {
    precioProducto = Number(prompt("Por favor ingrese un valor valido"));
  }
  return precio;
}
solicitarValor();
titulo.innerHTML = precioProducto
