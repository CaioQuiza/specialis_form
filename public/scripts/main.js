//Controle de slides da apresentação dos temas
var indiceSlide = 1;
mostraSlides(indiceSlide);

//próximo/anterior

function avancSlide(n){
    mostraSlides(indiceSlide = n);
}

function mostraSlides(n){
    var i;
    var slides = document.getElementsByClassName("temaAtual");
    if (n > slides.length) {indiceSlide = 1}
    if (n < 1) {indiceSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[indiceSlide-1].style.display = "block";
    }
    
}
