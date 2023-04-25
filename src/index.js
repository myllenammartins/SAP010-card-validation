import validator from './validator.js';

console.log(validator);

//o comando abaixo serve para deixar um espaço para separar os numeros do cartao
const input = document.querySelector('input')

input.addEventListener('keypress', () => {
     let inputLength = input.value.length

     if (inputLength === 4 || inputLength === 9 || inputLength == 14) {
             input.value += ' '
  }
})





//manipulação do dom vai aqui*/