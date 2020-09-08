const burgerbtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');




const sideMenu = () => {
  burgerbtn.classList.toggle('active')

  if (burgerbtn.classList.contains("active")) {
    menu.style.left = '0';
    document.body.classList.add('lock')
    document.body.style.overflow = 'hidden';
  } else {
    menu.style.left = '-100%';
    document.body.style.overflow = 'visible';
    document.body.classList.remove('lock')
  }
}


burgerbtn.addEventListener('click', sideMenu)




// ANIMATION ON SCROLL
const animItems = document.querySelectorAll('.anim-item')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 5

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('anim')
      } else {
        if (!animItem.classList.contains('no-anim')) {
          animItem.classList.remove('anim')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll()
  }, 300)
}



// TYPING EFFECT

const text = 'Find Yourself Outside.';

const name = document.querySelector('.header__title');

// Parametry
let indexText = 0;
const time = 180;

// Implementacja
const addLetter = () => {
 name.textContent += text[indexText];
 indexText++;
 if (indexText === text.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);