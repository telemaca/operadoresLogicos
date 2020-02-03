// Juez de gusto

// Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia.

let gusto = Number(prompt(`Del 1 al 10, ¿cuánto te gusta el healdo?`))

let mensaje = (gusto >= 0 && gusto <= 3 && `¿Cómo no te va a gustar el helado, salame?`) || 
(gusto > 3 && gusto <= 7 && `Sos un tibio.`) || 
(gusto > 7 && gusto <= 10 && `Sos de los míos. ¡Aguante el helado!`) || 
(gusto < 0 || gusto > 10 || gusto !== Number) && `Incorrecto. No ingresó un número del 1 al 10.`

alert(mensaje)

gusto = Number(prompt(`Del 1 al 10, ¿cuánto te gusta Harry Potter?`))

mensaje = (gusto >= 0 && gusto <= 3 && `¿No te gusta Harry Potter? ¡50 puntos menos para Gryffindor!`) || 
(gusto > 3 && gusto <= 7 && `OK, ni fu ni fa. Sos un Hufflepuff.`) || 
(gusto > 7 && gusto <= 10 && `Inteligente como yo. Debes ser de Ravenclaw.`) || 
(gusto < 0 || gusto > 10 || gusto !== Number) && `Incorrecto. No ingresó un número del 1 al 10.`

alert(mensaje)

gusto = Number(prompt(`Del 1 al 10, ¿cuánto te gusta el fútbol?`))

mensaje = (gusto >= 0 && gusto <= 3 && `¿No mirás ni los partidos de la selección? ¡Igual que yo!`) || 
(gusto > 3 && gusto <= 7 && `Decís que sos de un equipo, pero seguro ni sabés quién es el técnico.`) || 
(gusto > 7 && gusto <= 10 && `Sos capaz de clavarte un Deportivo Merlo-Chacarita un domingo a las 16. Bien ahí.`) || 
(gusto < 0 || gusto > 10 || gusto !== Number) && `Incorrecto. No ingresó un número del 1 al 10.`

alert(mensaje)

gusto = Number(prompt(`Del 1 al 10, ¿cuánto te gusta dormir?`))

mensaje = (gusto >= 0 && gusto <= 3 && `¿Acaso sos un robot?`) || 
(gusto > 3 && gusto <= 7 && `Sos responsable. Dormís porque hay que hacerlo.`) || 
(gusto > 7 && gusto <= 10 && `¡Dormilón, ey! ¡¡Ey!! ¡¡Despertate!!`) || 
(gusto < 0 || gusto > 10 || gusto !== Number) && `Incorrecto. No ingresó un número del 1 al 10.`

alert(mensaje)