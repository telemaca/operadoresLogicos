// Pago con crédito

// Crear un programa que pida el monto a pagar, y si quiere pagarlo pagarlo con tarjeta o no. Si responde que no, debe mostrar un mensaje que diga "Gracias por su compra". Si responde que sí, debe preguntar en cuántas cuotas desea pagarlo: 3, 6, o 12. Luego, debe mostrar la cantidad de cuotas a pagar elegidas con su valor teniendo en cuenta el interés. El interés debe ser del 5% para 3 cuotas, 10% para 6 y 15% para 12, sobre el total. Guardar los porcentajes de intereses en variables.

const montoAPagar = Number(prompt(`¿Cuánto debe pagar?`))
const tarjeta = confirm(`¿Desea pagar con tarjeta?`)

const cuotas3 = 1.05
const cuotas6 = 1.10
const cuotas12 = 1.15

if (tarjeta === false) {
    alert(`Gracias por su compra.`)
}

if (tarjeta === true) {
    efectivoOCuotas = Number(prompt(`¿En cuántas cuotas quiere pagar: 3, 6 o 12?`))

    const totalCuota = efectivoOCuotas === 3 && ((montoAPagar * cuotas3) / efectivoOCuotas) ||
    efectivoOCuotas === 6 && ((montoAPagar * cuotas6) / efectivoOCuotas) ||
    efectivoOCuotas === 12 && ((montoAPagar * cuotas12) / efectivoOCuotas) 

    alert(`Pagará ${efectivoOCuotas} cuotas de $${totalCuota} cada una.`)
}