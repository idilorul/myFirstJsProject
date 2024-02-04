'use strict';

const link__one = document.querySelector('.link__one');
const exmp__one__icon = document.querySelector('.exmp__one__icon')
const link__two = document.querySelector('.link__two');
const exmp__two__icon = document.querySelector('.exmp__two__icon')
const link__three = document.querySelector('.link__three')
const exmp__three__icon = document.querySelector('.exmp__three__icon');
const link__four = document.querySelector('.link__four');
const exmp__four__icon = document.querySelector('.exmp__four__icon');
const parag__one= document.querySelector('.parag__one');
const parag__two = document.querySelector('.parag__two')
const parag__three = document.querySelector('.parag__three')
const parag__four = document.querySelector('.parag__four')

const linkOneF = function () {
    parag__one.classList.toggle('hidden');
}

const linkTwoF = function () {
    parag__two.classList.toggle('hidden');
}

const linkThreeF = function () {
    parag__three.classList.toggle('hidden');
}

const linkFourF = function () {
    parag__four.classList.toggle('hidden');
}


link__one.addEventListener('click', linkOneF)
exmp__one__icon.addEventListener('click', linkOneF)


link__two.addEventListener('click', linkTwoF)
exmp__two__icon.addEventListener('click', linkTwoF)


link__three.addEventListener('click', linkThreeF)
exmp__three__icon.addEventListener('click', linkThreeF)


link__four.addEventListener('click', linkFourF)
exmp__four__icon.addEventListener('click', linkFourF)
