function slidesPlugin (activeNum = 0) {
    const slides = document.querySelectorAll('.slide'),
      body = document.querySelector('body'),
      activeSlide = slides[activeNum]

    activeSlide.classList.add('_active')
    body.style.backgroundImage = activeSlide.style.backgroundImage

    for(const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('_active')
            body.style.backgroundImage = slide.style.backgroundImage
        })
    }

    function clearActiveClasses() {
        slides.forEach(slide => slide.classList.remove('_active'))
    }
}

slidesPlugin()