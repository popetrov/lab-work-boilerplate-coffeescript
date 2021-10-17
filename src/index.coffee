
image = document.querySelector('.image')
text = document.querySelector('.text')

textHidden =-> text.style.display = 'none' 

clickFunction =->
    text.style.display = 'block'
    image.style.display = 'none'

textHidden()
image.addEventListener 'click',clickFunction