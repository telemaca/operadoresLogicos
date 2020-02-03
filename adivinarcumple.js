// Adivinar cumpleaños

// Crear un programa que pida adivinar tu cumpleaños ingresando por separado ingresar día, mes y año, en números, y mostrar luego si un mensaje si ha adivinado o no.

const dia = Number(prompt(`¿Qué día es mi cumpleaños?`))
const mes = Number(prompt(`¿Qué mes es mi cumpleaños? Ingréselo en números.`))
const año = Number(prompt(`¿Qué día es mi cumpleaños? Ingrese 4 números.`))

const diaReal = 12
const mesReal = 8
const añoReal = 1986

const mensaje = 
(dia === diaReal && mes === mesReal && año === añoReal && `¡¡Adivinaste!!`) || 
((dia !== diaReal) && (mes === mesReal) && (año === añoReal) && `No adivinaste :(`) ||
((dia !== diaReal) && (mes !== mesReal) && (año === añoReal) && `No adivinaste :(`) ||
((dia !== diaReal) && (mes === mesReal) && (año !== añoReal) && `No adivinaste :(`) ||
((dia === diaReal) && (mes !== mesReal) && (año !== añoReal) && `No adivinaste :(`) ||
((dia === diaReal) && (mes === mesReal) && (año !== añoReal) && `No adivinaste :(`) ||
((dia === diaReal) && (mes !== mesReal) && (año === añoReal) && `No adivinaste :(`) ||
((dia !== diaReal) && (mes !== mesReal) && (año !== añoReal) && `No adivinaste :(`)

alert(mensaje)