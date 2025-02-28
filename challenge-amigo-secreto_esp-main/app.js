// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable (Array) para agregar amigos
let amigos = [];

// Función para agregar nombres de amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value.trim();
     
    // Validar que el campo no esté vacío
    if (inputAmigo === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }

    //Valida que el nombre sea formato texto
    if (!/^[a-zA-Z\s]+$/.test(inputAmigo)) {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(inputAmigo)) {
        alert(`El nombre ${inputAmigo} ya se encuentra en su lista`);
        return;
    }

    // Agregar el nombre a la lista "amigos"
    amigos.push(inputAmigo);

    // Limpiar el campo para agregar nombres
    document.getElementById('amigo').value = "";
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
   
    // Limpiar la lista
    listaAmigos.innerHTML = "";

    // Recorre el Array con un for
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo
function sortearAmigo() {
    // Validar que se ingresaron nombres
    if (amigos.length === 0) {
        alert("No ingresó nombres de amigos a sortear. Agregar al menos un nombre.");
        return;
    }

    // Seleccion aleatoria
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

