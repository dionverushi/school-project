function slide(){
    var play = document.querySelector('.play');
    var slide = document.querySelector('.slide');
    play.addEventListener('click', function(){
        slide.style.transform = 'translateY(0%)'
    });
}

slide();