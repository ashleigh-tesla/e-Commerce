let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
let slides = document.querySelectorAll('.slide-container')
let index = 0;

function next() {
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}

function prev() {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}
document.querySelectorAll('.featured-image1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src')
        document.querySelector('.big-image1').src = src
    })
})
document.querySelectorAll('.featured-image2').forEach(image_2 => {
    image_2.addEventListener('mouseover', () => {
        var src = image_2.getAttribute('src')
        document.querySelector('.big-image2').src = src
    })
})
document.querySelectorAll('.featured-image3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src')
        document.querySelector('.big-image3').src = src
    })
})
document.querySelectorAll('.featured-image4').forEach(image_4 => {
    image_4.addEventListener('mouseover', () => {
        var src = image_4.getAttribute('src')
        document.querySelector('.big-image4').src = src
    })
})
document.querySelectorAll('.featured-image5').forEach(image_5 => {
    image_5.addEventListener('click', () => {
        var src = image_5.getAttribute('src')
        document.querySelector('.big-image5').src = src
    })
})
document.querySelectorAll('.featured-image6').forEach(image_6 => {
    image_6.addEventListener('mouseover', () => {
        var src = image_6.getAttribute('src')
        document.querySelector('.big-image6').src = src
    })
})