import validator from './validator.js';

console.log(validator);


let inputNumero = document.getElementById ("inputNumero");
let form           = document.getElementById ("form");
let textform       = document.getElementById ("textform");
let aparecer       = document.getElementById ("aparecer")

    form.addEventListener("submit" , (event) =>{
        //nao deixa que envie valor em branco para o terminal
        if(inputNumero.value == ''){
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
        let valorInput = e.target.value;

            //o replace é uma expressao regular
            //tira espaços em brando
            inputNumero.value = valorInput.replace(/\s/g, '')
	                                         //tira letras
	                                      .replace(/\D/g, '')
	                                         //da espaço a cada quatro numeros
	                                      .replace(/([0-9]{4})/g, '$1 ')
	                                        //tira o ultimo espaciado
	                                      .trim();
            aparecer.textContent = valorInput;
                if(valorInput == ''){
                    aparecer.textContent = '#### #### #### ####';
                }
    });



//o comando abaixo serve para chamar o numeroDoCartao
/*numeroDoCartao.addEventListener("onkeyup" , () =>){
    if(validarcartao(numeroDoCartao.value) !== true)
}*/


//manipulação do dom vai aqui