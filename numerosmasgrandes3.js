// Número más grande (3 números)

// Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.


const numero1 = Number(prompt(`Ingrese un número:`));
const numero2 = Number(prompt(`Ingrese otro número:`));
const numero3 = Number(prompt(`Ingrese otro número:`));

const mensaje = 
numero1 > numero2 && numero1 > numero3 && `${numero1} es mayor que ${numero2} y ${numero3}.` || 
numero2 > numero1 && numero2 > numero3 && `${numero2} es mayor que ${numero1} y ${numero3}.` ||
numero3 > numero1 && numero3 > numero2 && `${numero3} es mayor que ${numero1} y ${numero2}.`;


alert(mensaje);

const mensaje2 = numero1 === numero2 && `${numero1} y ${numero2} son iguales.` || 
numero1 === numero3 && `${numero1} y ${numero3} son iguales.` || 
numero2 === numero3 && `${numero2} y ${numero3} son iguales.` ||


alert(mensaje2)