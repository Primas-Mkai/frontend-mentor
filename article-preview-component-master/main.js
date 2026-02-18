
const shareBtn = document.querySelector(".icon-holder");
const popupBtn = document.querySelector(".popup-share-block");
const popupShareBtn = document.querySelector(".share-icon-holder");

popupBtn.classList.add('popup-share-hidden');

shareBtn.addEventListener('click', () => {
    popupBtn.classList.toggle('popup-share-hidden');
});

popupShareBtn.addEventListener('click', (e) => {
    popupBtn.classList.toggle('popup-share-hidden');
});