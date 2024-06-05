async function getDefinition() {
    const word = document.getElementById('wordInput').value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const respuesta = await fetch(apiUrl);
        const info = await respuesta.json();

        const definition = info[0]?.meanings[0]?.definitions[0]?.definition || 'No se encontró la definición';
        document.getElementById('definition').textContent = definition;
    } catch (error) {
        console.error('Error al obtener la definición:', error);
    }
}