'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//if there are more elements of same class name we can simply use All keyword with querySelector
const btnopenModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
//function to open the window when show model button is clicked
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//condition if one out of three show model buttons is clicked than open modal
for (let i = 0; i < btnopenModal.length; i++) {
  btnopenModal[i].addEventListener('click', openModal);
}
//condition to close modal when clese modal button is clicked
btncloseModal.addEventListener('click', closeModal);
//condition to close the modal when clicked on overlay
overlay.addEventListener('click', closeModal);
//condition when escape (Esc) button is clicked
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
