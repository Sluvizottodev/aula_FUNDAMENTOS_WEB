function reajusteSalario(currentSalary, percentAdjustment){
    return currentSalary + (currentSalary * (percentAdjustment / 100));
}

const currentSalary = 1520.00;
const percentAdjustment = 15;
console.log(`Após o reajuste de ${percentAdjustment}%, o salário será: R$ ${reajusteSalario(currentSalary, percentAdjustment).toFixed(2)}`);