alert ("Bienvenido a la creacion de un producto")


let precio =prompt ("ingresa un precio")
function solicitarValor() {
  precio = Number(prompt("Ingrese el valor a simular"));
  while (isNaN(precio) || "" == precio) {
    precio = Number(prompt("Por favor ingrese un valor valido"));
  }
  return precio;
}
solicitarValor();
let precioHtml = ducument.getElementById('precio')
precioHtml.innerHTML ="El numero ingresado es" + precio;
