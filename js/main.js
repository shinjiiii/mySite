'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.hero ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function hiddenButtons() {
    next.classList.remove('hidden');
    prev.classList.remove('hidden');
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    ul.style.transform = `translateX(${-100 * currentIndex}%)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const setbutton = document.createElement('button');
      setbutton.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        hiddenButtons();
        moveSlides();
      })
      dots.push(setbutton);
      document.querySelector('.hero nav').appendChild(setbutton);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  hiddenButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    hiddenButtons();
    moveSlides();
    updateDots();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    hiddenButtons();
    moveSlides();
    updateDots();
  });

  function play () {
    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      hiddenButtons();
      moveSlides();
      updateDots();
      play();
    }, 5000);
  }
    
  play();
}
