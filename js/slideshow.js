'use strict';

const images = [
    { 'id': '1', 'url':'img/eva.jpg' },
    { 'id': '2', 'url':'img/hxh.jpg' },
    { 'id': '3', 'url':'img/dbz.jpg' },
    { 'id': '4', 'url':'img/berserk.jpg' },
    { 'id': '5', 'url':'img/onepiece.jpg' },
    { 'id': '6', 'url':'img/cb.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);


//Nova função: passar slides com as setas 
document.addEventListener ('keydown', (e) => {
    if(e.key === 'ArrowLeft'){
        console.log('Apertou seta da esquerda')
        previous()
    }else if(e.key === 'ArrowRight'){
        console.log('Apertou seta da direita')
        next()
    }
})