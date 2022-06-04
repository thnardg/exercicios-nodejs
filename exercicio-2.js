const somar = (num1, num2) => {
    return num1 + num2;
}

const subtrair = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

const calculadora = (num1, num2, operacao) => {
    return operacao(num1, num2);
};

console.log(calculadora(2, 3, somar));