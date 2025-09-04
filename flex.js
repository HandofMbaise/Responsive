const box = document.querySelectorAll('.box');


function Game(){
   console.log('Hi');
}

box.forEach(box => {box.addEventListener('click', Game)});