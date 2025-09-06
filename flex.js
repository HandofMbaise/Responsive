const box = document.querySelectorAll('.box');


function Game(){
   fetch('https://myheroku-app-b4ea51ca30c7.herokuapp.com/box', {
      method: 'GET',
      headers: {
         'content-Type': 'text/plain'
      }
   }).then(response => response.text())
   .then(data => window.alert(data))
}

box.forEach(box => {box.addEventListener('click', Game)});