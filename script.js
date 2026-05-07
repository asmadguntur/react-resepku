const favBtns = document.querySelectorAll('.favorite-icon')

favBtns.forEach(favBtn => {
  const loveIcon = favBtn.querySelector('span')
  favBtn.addEventListener('click', function() {
    loveIcon.classList.toggle('text-red-500')
    if (loveIcon.style.fontVariationSettings === "'FILL' 1") {
      loveIcon.style.fontVariationSettings = ""
    } else {
      loveIcon.style.fontVariationSettings = "'FILL' 1"
    }
  })
})
