let slideIndex = 1
showSlides(slideIndex) 

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("mySlides")
    // let dots = document.getElementsByClassName("dot")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < slides.length) {
        slideIndex = slides.length
    }
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    // for (let index = 0; index < dots.length; index++) {
    //     dots[index].className = dots[index].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block"
    // dots[slideIndex - 1].className += " active"
}