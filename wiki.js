// Mini wiki

// Crear un programa que permita al usuario ingresar una elección sobre una temática en particular (p.ej.: personajes de Marvel, animales, géneros de música, etc.) y dependiendo de la opción que elija muestre un mensaje con una breve información sobre la opción elegida. Si no se elige alguna de las elecciones propuestas, mostrar un mensaje de advertencia. Hacer mínimo 4 opciones posibles.

const opcion = prompt(`Bienvenidos a la wiki de los dioses griegos. ¿Sobre quién querés saber? Podés averiguar info sobre estos: Zeus, Atenea, Dionisio, Apolo.`);



const mensaje = opcion === "Zeus" && `Zeus es el rey de los dioses y supervisa el universo.​ Es el dios del cielo y el trueno y por ende de la energía. Entre sus atributos se incluyen el cetro y la corona (como símbolos de su poder), el rayo, el águila, el toro y el roble.` ||
opcion === "Atenea" && `Atenea es la diosa de la guerra, la civilización, sabiduría, estrategia en combate, de las ciencias, de la justicia y de la habilidad.` ||
opcion === "Dionisio" && `Dionisio es el dios de la fertilidad y el vino. Es el dios patrón de la agricultura y el teatro. También es conocido como el ‘Libertador’ (Eleuterio), liberando a uno de su ser normal, mediante la locura, el éxtasis o el vino. La misión divina de Dioniso era mezclar la música del aulós y dar final al cuidado y la preocupación` ||
opcion === "Apolo" && `Apolo es el dios de las artes, del arco y la flecha, que amenazaba o protegía desde lo alto de los cielos, siendo identificado con la luz de la verdad. Era el dios de la muerte súbita, de las plagas y enfermedades, pero también el dios de la curación y de la protección contra las fuerzas malignas. Además, era el dios de la belleza, de la perfección, de la armonía, del equilibrio y de la razón.` ||
opcion !== ["Zeus", "Atenea", "Dionisio", "Apolo"] && `No ingresó un nombre válido.`;

alert(mensaje)