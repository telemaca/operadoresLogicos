// Número más grande (2 números)

// Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

const numero1 = Number(prompt(`Ingrese un número:`));
const numero2 = Number(prompt(`Ingrese otro número:`));

const mensaje = numero1 > numero2 && `${numero1} es mayor que ${numero2}.` || 
numero1 < numero2 && `${numero2} es mayor que ${numero1}.` || 
numero1 === numero2 && `${numero1} es igual a ${numero2}.`;

alert(mensaje)