let menu =  (function(options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');

  let _toggleMenu = function() {
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }

  let addListeners = function() {
    buttonOpen.addEventListener('click', _toggleMenu);
    let list = document.querySelector('.overlay-menu__list');

    list.addEventListener('click', function(e) {
      let target = e.target;
       if(target.classList.contains('overlay-menu__link')){
        _toggleMenu();
       }
    })
  }

  return {open:addListeners}
})({
  buttonOpen: '#open',
  menu: '#overlay'
});


menu.open();

