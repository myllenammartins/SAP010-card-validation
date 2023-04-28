const validator = {
  maskify: function () {
    
  },

  isValid: function isValid(numero) {
    //remove espaços em branco e Transforma o número em string
    const numString = String(numero).replace(/\s/g, '');
    //converte os números do cartao em um array
    const numAr = numString.split('').map(Number);
    //inverte o array dos numeros para começar a partir do final
    const invertAr = numAr.reverse();
    //inicia a soma em 0
    let soma = 0;
    //loop pelos numeros, multiplicando por 2 os índices pares
    for (let i = 0; i < invertAr.length; i++) {
      //se o numero for par, multiplica por 2
      if (i % 2 === 1) {
        let double = invertAr[i] * 2;
        //Se o resultado for maior ou igual a 10, soma os dígitos do resultado
        if (double >= 10) {
          double = double.toString().split('').map(Number).reduce((a, b) => a + b);
        }
        //adiciona o resultado da multiplicaçao a soma
        soma += double;
      } else {
        //adiciona o digito a soma
        soma += invertAr[i];
      }
    }
    //se a soma for um múltiplo de 10, retorna verdadeiro caso contrario é falso
    return soma % 10 === 0;
  }
  

}

export default validator;