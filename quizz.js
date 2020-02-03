// Quizz

// Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.

const pregunta1 = confirm(`¿El sol es una estrella?`)
const pregunta2 = confirm(`¿Este año es bisiesto?`)
const pregunta3 = confirm(`¿El azul es un color primario?`)

const mensaje = (pregunta1 === true && pregunta2 === true && pregunta3 && true && `¡Felicitaciones! Respondió bien todas las preguntas.`) || 
(pregunta1 === false || pregunta2 === false || pregunta3 === false) && `Lo sentimos. Perdió el juego.`

alert(mensaje)