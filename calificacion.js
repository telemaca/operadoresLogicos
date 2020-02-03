// Calificación

// Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que diga:

// ¡Excelente!, si la nota es 10

// ¡Muy bien!, si la nota es 8 o 9

// Aprobado, si la nota es 6 o 7

// Reprobado, si la nota es menor a 6

const nota = Number(prompt(`¿Qué nota te sacaste?`))

const mensaje = (nota === 10 && `¡Excelente!`) ||
((nota === 9 || nota === 8) && `¡Muy bien!`) ||
((nota === 7 || nota === 6) && `Aprobado.`) ||
(nota < 6 && `Reprobado.`)

alert(mensaje)
