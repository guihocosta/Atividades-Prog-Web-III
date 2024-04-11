// 2. Calcule as propriedades de um círculo, usando as seguintes definições:
//  Armazene o raio em uma variável.
//  Calcule o comprimento da circunferência com base no raio e imprima na tela "A circunferência tem N".
// Calcule a área com base no raio e imprima "A área é X".
//  Utilize a função Math.PI para retornar o valor de 3.14.

const raio = 2;
const pi = Math.PI;
const comprimentoCircun = (2 * raio * pi);
console.log(`A circunferência tem ${comprimentoCircun}.`)

const area = pi * (raio ** 2);
console.log(`A área é ${area}.`)

