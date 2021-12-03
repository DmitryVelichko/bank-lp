const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header')

btnHamburger.addEventListener('click', function () {
  console.log('click burger');

  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open');
  } else {
    btnHamburger.classList.add('open');
  }
});
