/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
// const prod = productDetails('Alcool gel', 'Máscara');
// const p1 = prod[0].details.productId;
// const p2 = prod[1].details.productId;
// let string1 = "";
// let string2 = "";

// for (let i = 1; i <= 3; i++) {
//   string1 += p1[p1.length - i];
//   string2 += p2[p2.length - i];
// }

// const reverse = (string) => {
//   return string.split('').reverse().join('');
// }

// console.log(reverse(string1));
// console.log(string2);

module.exports = productDetails;
