// Funcion asincronica para tener la definicion de una palabra
async function getDefinition() {
    // Obtener el valor ingresado por el usuario en el campo de entrada
    const word = document.getElementById('wordInput').value;

    //Utilizando template string se obtiene el valor que quiere el usuario
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        // Realizar una llamada asincrona a la API utilizando fetch
        const respuesta = await fetch(apiUrl);

        // Convertir la respuesta de la API a formato JSON
        const info = await respuesta.json();

        // Extraer la definición de la palabra del objeto JSON
        const definition = info[0]?.meanings[0]?.definitions[0]?.definition || 'No se encontró la definición';
        document.getElementById('definition').textContent = definition;
    } catch (error) {
        // Manejar errores y mostrar un mensaje en la consola en caso de fallo
        console.error('Error al obtener la definición:', error);
    }
}
