const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const obj = new FormData(formEl);
  console.log(obj);
  obj.forEach(elem => console.log(elem));

  event.target.reset();
}
