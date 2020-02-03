// Autenticación

// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado

const usuario = prompt(`Ingrese su usuario:`);
const contrasenia = prompt(`Ingrese su contraseña:`);

const mensaje = ((usuario === "Ada" && contrasenia === "Ada123") && `Acceso autorizado`) ||
((usuario !== "Ada" && contrasenia !== "Ada123") && `Acceso denegado`);

alert(mensaje)