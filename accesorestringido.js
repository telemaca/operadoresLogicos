// Acceso restringido

// Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas cuatro cosas y muestre luego un mensaje indicando si tiene el acceso permitido o no.

const miembro = confirm(`¿Es miembro?`)
const cuota = confirm(`¿Tiene la cuota al día? (Si no es miembro, ponga que no.)`)
const noMiembro = confirm(`Si no es miembro, ¿tiene autorización? (Si es miembro, ponga que no.)`)

const mensaje = ((miembro === true && cuota === true) && `Puede entrar.`) || 
((miembro === true && cuota === false) && `No puede entrar.`) ||
((miembro === false && noMiembro === true) && `Puede entrar.`) ||
((miembro === false && noMiembro === false) && `No puede entrar.`)

alert(mensaje)