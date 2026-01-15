const params = new URLSearchParams(window.location.search);
const foto = params.get("img");

if (foto) {
  document.getElementById("foto").src = "imagenes/" + foto;
} else {
  document.getElementById("foto").style.display = "none";
  document.getElementById("texto-frase").textContent = "No hay imagen para mostrar 😞";
  document.getElementById("contenedor-sentimiento").style.display = "none";
}

const frases = [
  "Lo bonito se queda aunque duela poquito 💛",
  "Todo pasa por algo y tú también pasaste por algo 💫",
  "Lo que un día te dolió hoy te hace más fuerte 🤍",
  "Hay recuerdos que abrazan, otros que enseñan 🌿",
  "Nada que valga la pena es fácil 💗",
  "Si estás aquí, ya vas ganando 🕊️"
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("texto-frase").textContent = fraseAleatoria;

