const validator = {

  maskify: function (inputNumero) {

    const caractere       = '#';
    const numerosvisiveis = 4;

    if (inputNumero.length <= numerosvisiveis){
      return inputNumero;
    }
    const mascarar  = inputNumero.length - numerosvisiveis;
    const resultado = caractere.repeat(mascarar) + inputNumero.slice(-numerosvisiveis);
    return resultado;
  
    /*// remove espaços em branco do numero do cartao
    const  numString  =  String (inputNumero).replace(/\s/g, '');
    // armazena os ultimos quatro digitos do cartao
    const lastFourDigits = numString.slice(-4);
    // esconde os digitos, exceto os ultimos quatro
    const maskedDigits = numString.slice(0, -4).replace(/\d/g, '*');
    //concatena
    const carMask = maskedDigits + lastFourDigits;

    return carMask;*/

  },

  isValid: function (inputNumero) {
    //remove espaços em branco e Transforma o número em string
    const numString = String(inputNumero).replace(/\s/g, '');
    //converte os números do cartao em um array
    const numAr     = numString.split('').map(Number);
    //inverte o array dos numeros para começar a partir do final
    const invertAr  = numAr.reverse();

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
};
export default validator;
