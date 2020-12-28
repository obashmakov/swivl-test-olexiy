const likes = [...document.querySelectorAll('.popularity__button--liked')];

likes.forEach(
  like => like.addEventListener('click', function() {
    let likesNumber = Number(like.innerText);

    likesNumber++;

    like.children[1].innerText = likesNumber;
  }),
);

const profileOptions = document.querySelector('.options__dots');
const optionsWindow = document.querySelector('.options__window');

profileOptions.addEventListener('click', function() {
  optionsWindow.classList.toggle('options__window--active');
});
