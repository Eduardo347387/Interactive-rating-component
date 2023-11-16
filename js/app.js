// Selecciona todos los elementos con la clase 'button-qualification'
const buttons = document.querySelectorAll('.button-qualification');

// Selecciona el botón de envío y el elemento de calificación por su id
const submit = document.querySelector('#button-submit');
const calificacion = document.querySelector('#valor');

// Declara una variable para almacenar el último botón seleccionado
let selectedButton;

// Itera sobre cada botón y agrega un evento de clic a cada uno
buttons.forEach(element => {
    element.addEventListener('click', calificar);
});

// Enviar calificacion

submit.addEventListener('click',enviarCalificacion);



// Función para manejar el clic en un botón de calificación
function calificar(e) {
    // Si hay un botón previamente seleccionado, quita su clase 'selecButton'
    deseleccionarBoton()

    // Almacena el botón actual en la variable selectedButton
    selectedButton = e.target;

    // Obtiene la calificación del botón haciendo referencia al atributo 'data-qualification'
    let qualification = e.target.getAttribute('data-qualification');

    // Si hay una calificación, togglea la clase 'selecButton' en el botón actual
    if (qualification) {
        selectedButton.classList.toggle('selecButton');
    }
}

function enviarCalificacion(e){
    e.preventDefault();
}


function deseleccionarBoton() {
    if (selectedButton) {
        selectedButton.classList.remove('selecButton');
    }
}

