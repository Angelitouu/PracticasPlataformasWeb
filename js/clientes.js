var persona = {
    "nombre": "Ángel",
    "apellido": "Chasi",
    "edad": 20,
    "cedula": 1727438838,
    "direccion": "La Joya",
    "correo": "achasi@gmail.com"
};

function saludo() {
    document.write("<br>Hola " + persona.nombre);
}


function mensajeBienvenida(nombre, correo) {
    alert("Bienvenido, " + nombre + "\nCorreo: " + correo);
}

saludo();
mensajeBienvenida(persona.nombre, persona.correo);