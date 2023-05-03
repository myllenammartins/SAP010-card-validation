import validator from './validator.js';

console.log(validator)

const form        = document.getElementById ("form");
const inputNumero = document.getElementById ("inputNumero");
const textform    = document.getElementById ("textform");
const carDigito   = document.getElementById ("carDigito");


form.addEventListener("submit" , (event) =>{
//nao deixa que envie valor em branco para o terminal
  if(inputNumero.value === ''){
    //o textform exibe mensagem 'campo obrigatorio'
    textform.textContent = 'Campo Obrigatório'
  } else {
    const valorInput   = inputNumero.value.replace(/\s/g, '').replace(/\D/g, '');
    const numEscondido = validator.maskify(valorInput);

    if (validator.isValid(valorInput)) {
      alert(`Cartão válido! final: ${numEscondido}`);
    }else {
      alert(`Cartão inválido! final: ${numEscondido}`);
    }
  }

  console.log(inputNumero.value);

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
  carDigito.textContent = valorInput;
  if(valorInput === ''){
    carDigito.textContent = '0000 0000 0000 0000';
  }
});