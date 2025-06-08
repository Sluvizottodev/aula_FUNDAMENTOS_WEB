function calcMediaPonderada(nota1, nota2, nota3){
 return (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
}

// Teste de mesa
const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 9.0;

const media = calcMediaPonderada(nota1, nota2, nota3);
console.log(`A média ponderada é: ${media.toFixed(2)}`);