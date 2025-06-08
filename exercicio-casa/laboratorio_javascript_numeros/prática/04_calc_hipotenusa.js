function calcularHipotenusa(cateto1, cateto2){
    
    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    return hipotenusa;
}

// Teste de mesa
const cateto1 = 3;
const cateto2 = 4;

console.log(`A hipotenusa é: ${calcularHipotenusa(cateto1, cateto2)}`);