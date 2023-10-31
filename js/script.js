"use strict"

// menu Burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}

// Test email
let mainForm = document.querySelector('.subscribe__form');
let mainFormInput = document.querySelector('.subscribe__input');
mainForm.addEventListener('submit', function (event) {
   if (emailTest(mainFormInput)) {
      mainFormInput.value = 'enter email!';
      mainFormInput.style.color = 'red';

      event.preventDefault();
   }
})



mainFormInput.addEventListener('focus', function (event) {
   mainFormInput.value = '';
   mainFormInput.style.color = 'black';
});

function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

