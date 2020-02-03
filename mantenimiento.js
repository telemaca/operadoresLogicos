// Mantenimiento

// Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. Mostrar en un mensaje si tiene que hacer mantenimiento o no si alguna de las respuestas es negativa

const aceite = confirm(`¿El auto tiene aceite?`)
const agua = confirm(`¿El auto tiene agua?`)
const neumaticos = confirm(`¿El auto tiene neumáticos con presión?`)

const mensaje = ((aceite === true && agua === true && neumaticos === true) && `El auto no necesita mantenimiento.`) ||
((aceite === false || agua === false || neumaticos === false) && `El auto necesita mantenimiento.`)

alert(mensaje)