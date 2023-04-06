const toggler = document.querySelector('#toggler')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('.el')

toggler.addEventListener('click', function (){
  input.classList.toggle('hideInput');
})

input.addEventListener('keyup', function(e){
  if(e.key === 'Enter' && e.target.value !== ''){
    const newLi = `
      <li class="el">
        <span class="trash"><i class="fa fa-trash"></i></span>
        ${e.target.value}
      </li>`;

      ul.innerHTML += newLi
      input.value = ''
  }
})


document.addEventListener('click', function(event){
  if (event.target.classList.contains('el')) {
      event.target.classList.toggle('completed')
  }
  
  if (event.target.classList.contains('trash')) {
      event.target.parentElement.remove();
  }
})