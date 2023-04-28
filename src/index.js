import validator from './validator.js';

console.log(validator);

const form        = document.getElementById ("form");
const inputNumero = document.getElementById ("inputNumero");
const textform    = document.getElementById ("textform");
const aparecer    = document.getElementById ("aparecer")

form.addEventListener("submit" , (event) =>{
//nao deixa que envie valor em branco para o terminal
  if(inputNumero.value === ''){
    //o textform exibe mensagem 'campo obrigatorio'
    textform.textContent = 'Campo Obrigatório'
  }
  else {
    //console para ver se os dados estao entranto no terminal
    console.log(inputNumero.value);
  }
  //o preventdefault esta empedindo de que a pagina carregue e os dados do cartao no campo sumam
  event.preventDefault()
})

//para acessar o campo de formulario (ver se os numeros estao entrando cada)
inputNumero.addEventListener("keyup" , (e) => {
  const valorInput = e.target.value;
  //remove espaços em brando
  inputNumero.value = valorInput.replace(/\s/g, '')
  //remove letras
    .replace(/\D/g, '')
    //da espaço a cada quatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //remove o ultimo espaçamento
    .trim();
  aparecer.textContent = valorInput;
  if(valorInput === ''){
    aparecer.textContent = '0000 0000 0000 0000';
  }
});