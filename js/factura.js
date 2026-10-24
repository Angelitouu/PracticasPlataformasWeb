var precio;
var cantidad;
var total;

producto = 'tomate';
precio = 0.75;
cantidad = 14;
total = precio * cantidad;

var el=document.getElementById('cost');
el.textContent = producto + ' $'+ total;

let productos = ['tomate', 'manzana', 'pera', 'zanahoria'];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}