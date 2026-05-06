const favBtn = document.querySelector('.favorite-icon')
const loveIcon = favBtn.querySelector('span')


favBtn.addEventListener('click', function() {
  loveIcon.classList.toggle('text-red-500')
})
