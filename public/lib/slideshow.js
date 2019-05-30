const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    //Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    //Add current to first
    slides[0].classList.add('current');
  }
  // Remove current class with delay
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if(current.previousElementSibling){
    //Add current to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  // Remove current class with delay
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
  //JS method clearInterval
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, intervalTime)
}
});

prev.addEventListener('click', e => {
  prevSlide();
  if(auto) {
  //JS method clearInterval
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, intervalTime)
}
});

//AUTO SLIDE
if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime)
}
