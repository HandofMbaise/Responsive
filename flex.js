const box = document.querySelectorAll('.box');


function Game(){
   alert('Hi Box');
}

box.forEach(box => {box.addEventListener('click', Game)});