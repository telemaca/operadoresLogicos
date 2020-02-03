// Indicador de tiempo

// Crear un programa que pida ingresar la temperatura del día e indique qué tiempo hace dependiendo de la misma (p. ej.: "Hace frío", "Está templado", etc.). Hacerlo para 3 posibles casos mínimo.

const temperatura = Number(prompt(`¿Qué temperatura tenemos hoy?`))

const mensaje = (temperatura <= -35 && `¿Estás en Siberia? Mejor probá con otro número.`) || 
(temperatura > -35 && temperatura <= -10 && `Hace muchísimo frío. Abrigate y tomá algo calentito.`) ||
(temperatura > -10 && temperatura <= 15 && `Hace frío.`) || 
(temperatura > 15 && temperatura <= 25 && `Está templado.`) ||
(temperatura > 25 && temperatura <= 34 && `Hace calor.`) ||
(temperatura > 34 && temperatura <= 55 && `Está sofocante. Hidratate.`) ||
(temperatura > 55 && `¿Estás segurx de que no estás en el Sol? Mejor probá con ingresar otro número.`) ||
(temperatura !== Number && `No ingresaste un número. Probá de nuevo.`)

alert(mensaje)