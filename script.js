const bottone = document.getElementById("messaggioButton");
const messaggio = document.getElementById("messaggio");

bottone.addEventListener("click", function () {

    messaggio.textContent =
        "Benvenuti nel sito della 3IA! Continuiamo a imparare, programmare e creare nuovi progetti.";

});

const anno = document.getElementById("anno");

anno.textContent = new Date().getFullYear();
