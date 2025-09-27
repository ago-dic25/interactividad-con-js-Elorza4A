//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


// === Variables Ejercicio de Clases === ///
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos");
var posts = document.getElementById("posts");
var post = document.querySelectorAll("div.post")
var botonBuscar = document.getElementById("buscar");
var busqueda = document.getElementById("txtBusqueda");
var botonModo = document.getElementById("btnModo");
var modo = document.querySelectorAll(".modo");
console.log(modo)
// === EVENTOS ==== //


// modo oscuro
botonModo.addEventListener("click", function(){
    if(botonModo.innerText === "🌙"){
        botonModo.innerText = "☀️";
    }
    else{
        botonModo.innerText = "🌙";
    }

    modo.forEach(m => {
        if (m.classList.contains("light")){
            m.classList.add("dark");
            m.classList.remove("light");
        }
        else{
            m.classList.remove("dark");
            m.classList.add("light");
        }
    });
});


// muestra el textbox de busqueda
botonBuscar.addEventListener("click", function(){
    if(busqueda.classList.contains("ocultar")){
        busqueda.classList.remove("ocultar");
        busqueda.classList.add("mostrar");
    }
    else{
        busqueda.classList.remove("mostrar");
        busqueda.classList.add("ocultar");
    }
    
});

// realiza la busqueda
busqueda.addEventListener("keydown", function(tecla){
    if(tecla.key === "Enter"){
        post.forEach(div => {
            if (div.textContent.includes(busqueda.value)){
                div.classList.add("mostrar");
                div.classList.remove("ocultar");
            }
            else{
                div.classList.remove("mostrar");
                div.classList.add("ocultar");
            }
        });
    }
})



var x = 1;
// Eventos de cada elemento
mas.addEventListener("click", function(){
    // mostrar alerta en boton de +
    alert("Conteo: " + x);
    x = x + 1;
})

verTodos.addEventListener("click", function(){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    }
    else{
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
})

var seePicks = document.getElementById("seeAll");
var imagen = document.getElementById("imagen");
var imagenes = ["imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg",
    "imagenes/soundtrap-n30_i7mx62o-unsplash.jpg",
    "imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg"
];

// galería
var i = 0;

function cambiarImagen() {
    var url = "url(" + imagenes[i] + ")";
    imagen.style.backgroundImage = url;
    i = i + 1;
    if (i >= imagenes.length) {
        i = 0;
    }
}

var intervalo = null;

seePicks.addEventListener("mouseover", function () {

    if (intervalo === null) {
        intervalo = setInterval(cambiarImagen, 3000);
    }
});

seePicks.addEventListener("mouseout", function () {
    clearInterval(intervalo);
    intervalo = null; // importante reiniciarlo
});