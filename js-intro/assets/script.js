let knopf = document.getElementById('knopf');
console.log(knopf.innerHTML);

function changeColor() {
  if (knopf.style.backgroundColor === 'blue') {
    knopf.style.backgroundColor = 'white'
  } else {
    knopf.style.backgroundColor = 'blue';
  }
}