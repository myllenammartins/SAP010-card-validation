const validator = {
  maskify: function () {
    
  },

  isValid: function isValid(numero) {
    const numString = String(numero).replace(/\s/g, '');
    const numAr = numString.split('').map(Number);
    const invertAr = numAr.reverse();
    let soma = 0;
    for (let i = 0; i < invertAr.length; i++) {
      if (i % 2 === 1) {
        let double = invertAr[i] * 2;
        if (double >= 10) {
          double = double.toString().split('').map(Number).reduce((a, b) => a + b);
        }
        soma += double; // adiciona o valor à soma se o índice for par
      } else {
        soma += invertAr[i];
      }
    }
    return soma % 10 === 0;
  }
  

}

export default validator;

//colocar aqui a logica do projeto