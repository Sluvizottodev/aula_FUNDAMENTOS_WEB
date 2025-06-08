const num1= 2;
const num2= 3;
const num3= 4;
const num4= 5;
const num5= 6;

const numeros = [num1, num2, num3, num4, num5];

function verificaEhPrimo(num){
    if(num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

/*verificaEhPrimo(num)
    ? console.log(`${num} é primo`)
    : console.log(`${num} não é primo`);
*/
    
for (const num of numeros) {
  const resultado = verificaEhPrimo(num) ? 'é primo' : 'não é primo';
  console.log(`${num} ${resultado}`);
}