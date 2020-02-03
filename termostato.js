// Termostato

// Crear un programa que muestre la temperatura actual de la habitación y pregunte si tiene desea subir la temperatura. Si responde que sí, que pregunte en cuánto desea subirla, y mostrar luego la temperatura actualizada. Si responde que no, que pregunte si desea bajar la temperatura. Si responde que sí desea hacerlo, que pregunte en cuánto desea bajarla, y mostrar luego la temperatura actualizada.

const siONo = confirm(`La temperatura actual en la habitación es de 20 °C. ¿Desea subir la temperatura?`);


if (siONo === true){
    grados = Number(prompt(`¿Cuántos grados desea subirla?`))

    let gradosActualizados = 20 + grados;

    alert(`La temperatura será ahora de ${gradosActualizados} °C.`)
}

else {
    bajarTemperatura = confirm(`¿Desea bajar la temperatura?`)

    if (bajarTemperatura === true){

    const mensaje = bajarTemperatura === true && `¿Cuántos grados desea bajarla?`

    grados = Number(prompt(mensaje))

    gradosActualizados = 20 - grados;

    alert(`La temperatura será ahora de ${gradosActualizados} °C.`)
    }

    else {
        alert(`La temperatura quedará como está.`)
    }
}