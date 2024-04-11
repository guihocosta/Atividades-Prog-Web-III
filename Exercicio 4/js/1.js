// 1. Calcule a quantidade necessária para manter seu lanche favorito de forma vitálicia. Utilize os seguintes
// parâmetros para o cálculo:

//  Utilize uma variável para armazenar sua idade atual.
//  Utilize uma variável para armazenar sua idade máxima de vida.
//  Utilize uma variável para armazenar a quantidade de lanches por dia.
// Imprima na tela o resultado calculado: "Você precisará de N lanches para durar até a velhice de X
// anos".

const idade = 18;
const idadeMaxima = 100;
const qtdLanches = 2;

const resultado = (idadeMaxima - idade) * 365 * qtdLanches;
console.log(`Você precisará de ${resultado} lanches para durar até a velhice de ${idadeMaxima} anos.`)

