const params = new URLSearchParams(window.location.search);
const foto = params.get("img");

const img = document.getElementById("foto");
const fraseTexto = document.getElementById("texto-frase");
const contenedorSentimiento = document.getElementById("contenedor-sentimiento");

const frases = [
  "Lo bonito se queda aunque duela poquito 💛",
  "Todo pasa por algo y tú también pasaste por algo 💫",
  "Lo que un día te dolió hoy te hace más fuerte 🤍",
  "Hay recuerdos que abrazan, otros que enseñan 🌿",
  "Nada que valga la pena es fácil 💗",
  "Si estás aquí, ya vas ganando 🕊️"
];

if (foto) {
  img.src = "imagenes/" + foto;
  fraseTexto.textContent = frases[Math.floor(Math.random() * frases.length)];
} else {
  img.style.display = "none";
  contenedorSentimiento.style.display = "none";
  fraseTexto.textContent = "No hay imagen para mostrar 😞";
}
