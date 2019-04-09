var index = 1;

showSlides();
autoSlide();


function changeIndex(n){
    index = index + n;
    showSlides(index);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    if(n > slides.length){index=1}
    if(n < 1){index=slides.length}
    for(var i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}

function autoSlide() {
    var slides = document.getElementsByClassName("slide");
    for(var i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    if(index > slides.length) {index=1}
    slides[index-1].style.display = "block";
    index++;
    setTimeout(autoSlide, 5000);
}