const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function () {
  console.log('click burger');

  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open');
  }
});
