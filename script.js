const fancyText = document.querySelector('#fancy-text');

fancyText.addEventListener('mouseover', () => {
  fancyText.classList.add('hover');
});

fancyText.addEventListener('mouseout', () => {
  fancyText.classList.remove('hover');
});