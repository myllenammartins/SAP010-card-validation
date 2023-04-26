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

let numeroDoCartao = document.getElementById ("numeroDoCartao");
let form           = document.getElementById ("form");
let textform       = document.getElementById ("textform");

form.addEventListener("submit" , (event) =>{
    //nao deixa que envie valor em branco para o terminal
    if(numeroDoCartao.value == ''){
        //o textform exibe mensagem 'campo obrigatorio'
        textform.textContent = 'Campo Obrigatório'
    }
    else {
        //console para ver se os dados estao entranto no terminal
         console.log(numeroDoCartao.value);
    }
    //o preventdefault esta empedindo de que a pagina carregue e os dados do cartao no campo sumam
    event.preventDefault()
})






//o comando abaixo serve para chamar o numeroDoCartao
/*numeroDoCartao.addEventListener("onkeyup" , () =>){
    if(validarcartao(numeroDoCartao.value) !== true)
}*/


//manipulação do dom vai aqui