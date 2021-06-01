const numAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numAleatorio);
const mensaje = document.querySelector(".mensaje");
const botonRespuesta = document.querySelector(".adivinar");
const numeroRespuesta = document.querySelector(".numero");

const respuesta = () => {
  if (numeroRespuesta.value < numAleatorio) {
    mensaje.classList.add("error");
    mensaje.textContent = "pringat, t'has quedat curt";
  } else if (numeroRespuesta.value > numAleatorio) {
    mensaje.classList.add("error");
    mensaje.textContent = "pringat, t'has passat";
  } else {
    mensaje.classList.add("acierto");
    mensaje.textContent = "ets un crack, has encertat";
    botonRespuesta.disabled = true;
    numeroRespuesta.disabled = true;
  }
};

botonRespuesta.addEventListener("click", respuesta);
