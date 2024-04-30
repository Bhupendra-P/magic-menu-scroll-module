const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const storiesContainer = document.getElementById('stories-container');

let scrollAmount = 150;

// SCROLL AMOUNT

leftBtn.addEventListener('click', () => {
  storiesContainer.scrollTo({
    left: storiesContainer.scrollLeft - scrollAmount,
    behavior: 'smooth',
  });
});

rightBtn.addEventListener('click', () => {
  storiesContainer.scrollTo({
    left: storiesContainer.scrollLeft + scrollAmount,
    behavior: 'smooth',
  });
});

// console.log(storiesContainer.scrollLeft);