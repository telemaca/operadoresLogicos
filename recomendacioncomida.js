// Recomendación de comida

// Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no. Dependiendo de las respuestas, debe recomendar un plato (es decir, debe haber cuatro platos posibles).

const lunchOrDinner = confirm(`Si va a almorzar, presione "Aceptar". Si va a cenar, presione "Cancelar".`);
const vegetariano = confirm(`¿Es usted vegetariano?`);

const mensaje = (lunchOrDinner === true && vegetariano === true && `Usted puede comer una ensalada completa.`) ||
(lunchOrDinner === true && vegetariano === false && `Usted puede comer una hamburguesa completa.`) ||
(lunchOrDinner === false && vegetariano === true && `Usted puede comer una tarta de verduras.`) ||
(lunchOrDinner === false && vegetariano === false && `Usted puede comer carne al horno con papas.`);

alert(mensaje);