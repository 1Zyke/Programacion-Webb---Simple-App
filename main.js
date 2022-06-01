window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoPantalla = window.innerHeight/2.5;

    if(posicionObj1 < tamanoPantalla) {
        animacion.style.animation = 'mover 1s ease-out'
    }
})

