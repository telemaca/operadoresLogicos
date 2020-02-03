// Compra de computadora

// Crear un programa que muestre el mensaje: "Está por comprar la Notebook HP 3000 a $40000". Luego debe preguntar, por separado, si desea agregarle más memoria, más espacio en disco, y una placa de vídeo mejor. Por cada respuesta afirmativa, debe agregarle $10000 al precio base. Mostrar al final un mensaje con un detalle de la compra, las mejoras elegidas y el precio final.

alert(`Está por comprar la Notebook HP 3000 a $40000`);

let memoria = confirm(`¿Desea agregar más memoria?`);
let espacioEnDisco = confirm(`¿Desea agregar más espacio en disco?`);
let placaDeVideo = confirm(`¿Desea agregar una placa de video?`);

memoria = (memoria === true && 10000) || (memoria === false && 0)
espacioEnDisco = (espacioEnDisco === true && 10000) || (espacioEnDisco === false && 0)
placaDeVideo = (placaDeVideo === true && 10000) || (placaDeVideo === false && 0)

const resultado = 40000 + memoria + espacioEnDisco + placaDeVideo

alert(`Detalle de su compra:
-Notebook HP 3000: $40000
-Memoria extra: $${memoria}
-Espacio en disco: $${espacioEnDisco}
-Placa de video: $${placaDeVideo}
El precio final será de $${resultado}.`)