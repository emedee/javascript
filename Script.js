let button = document.querySelector('.button');
let body = document.querySelector('body');
let input = document.querySelector('.input')
let type = document.querySelector('.blue')
let p = document.querySelector('.p')
let toggle = document.querySelector('.toggle')
let box = document.querySelector('.box')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let images = document.querySelectorAll('.image-gallery')
let currentlySelected = 0;

button.addEventListener('click', function(){
    let r = Math.round(Math.random() * 256) + 1;
    let g = Math.round(Math.random() * 256) + 1;
    let b = Math.round(Math.random() * 256) + 1;

    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

input.addEventListener('change', function(){
    body.style.backgroundColor = input.value;
})
input.addEventListener('keyup', function(){
    p.innerHTML = input.value;
})

toggle.addEventListener('click', function(){
    if (box.style.display === 'none'){
        box.style.display = 'block';
    } else {
        box.style.display ='none';
    }
})

prevBtn.addEventListener('click', function(){
    nextBtn.disabled = false
    if(currentlySelected === 0){
        prevBtn.disabled = true
    } else {
        images[currentlySelected].classList.remove('active');
        currentlySelected--;
        images[currentlySelected].classList.add('active');
    }
})

nextBtn.addEventListener('click', function(){
    prevBtn.disabled = false
    images[currentlySelected].classList.remove('active');
    currentlySelected++;
    images[currentlySelected].classList.add('active');
    // console.log(images.length)
    // console.log(currentlySelected + 1)

    if(currentlySelected + 1 === images.length){
        nextBtn.disabled = true;
    }
})