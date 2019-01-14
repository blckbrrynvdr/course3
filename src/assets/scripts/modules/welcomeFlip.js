const buttonAuth = document.querySelector('.auth__btn');
const buttonBack = document.querySelector('.auth__back');
const authPanel = document.querySelector('.welcome__panel');

buttonAuth.addEventListener('click',function () {
  authPanel.style.transform = 'rotateY(180deg)';
  buttonAuth.style.opacity = '0';
  setTimeout(() => {
    authPanel.classList.add('welcome__panel--sideB');
    authPanel.style.transform = 'rotateY(0deg)';
    buttonAuth.style.display = 'none';
  }, 350);
})

buttonBack.addEventListener('click',function (e) {
  e.preventDefault();
  authPanel.style.transform = 'rotateY(180deg)';
  buttonAuth.style.display = 'inline-block';
  setTimeout(() => {
    authPanel.classList.remove('welcome__panel--sideB');
    authPanel.classList.add('welcome__panel--sideA');
    authPanel.style.transform = 'rotateY(0deg)';
    buttonAuth.style.opacity = '1';
  }, 350);
})

