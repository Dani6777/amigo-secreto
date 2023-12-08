function realizarSorteo() {
    const participantes = prompt("Ingrese los nombres de los participantes separados por coma (,):");
    const participantesArray = participantes.split(",").map(name => name.trim());

    if (participantesArray.length < 2) {
        alert("Debe haber al menos dos participantes.");
        return;
    }

    const amigosSecretos = asignarAmigosSecretos(participantesArray);

    // Muestra los resultados de forma interactiva
    for (let i = 0; i < participantesArray.length; i++) {
        const nombre = prompt(`Hola ${participantesArray[i]}! Por favor, ingresa tu nombre para descubrir a tu Amigo Secreto:`);
        const amigoSecreto = amigosSecretos.find(asignacion => asignacion.participante === nombre)?.amigoSecreto;

        if (amigoSecreto) {
            alert(`Tu Amigo Secreto es: ${amigoSecreto}`);
        } else {
            alert("¡Ups! Parece que ingresaste un nombre incorrecto o algo salió mal.");
        }
    }
}

function asignarAmigosSecretos(participantes) {
    const copiaParticipantes = participantes.slice();
    const amigosSecretos = [];

    participantes.forEach(participante => {
        let amigoSecreto;
        do {
            amigoSecreto = copiaParticipantes[Math.floor(Math.random() * copiaParticipantes.length)];
        } while (amigoSecreto === participante);

        amigosSecretos.push({ participante, amigoSecreto });
        copiaParticipantes.splice(copiaParticipantes.indexOf(amigoSecreto), 1);
    });

    return amigosSecretos;
}
