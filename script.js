// Elementos

const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const crawlContainer = document.getElementById("crawl-container");
const galaxy = document.getElementById("galaxy");

const theme = document.getElementById("theme");
const saber = document.getElementById("saber");

// Al pulsar el botón

startButton.addEventListener("click", () => {

    // Sonido sable

    saber.play();

    // Música principal

    setTimeout(() => {
        theme.play();
    }, 800);

    // Ocultar intro

    intro.style.display = "none";

    // Mostrar crawl

    crawlContainer.style.display = "block";

    // Después de 60 segundos mostrar galaxia

    setTimeout(() => {

        crawlContainer.style.display = "none";

        galaxy.style.display = "block";

        document.body.style.overflow = "auto";
    
    }, 80000);

});