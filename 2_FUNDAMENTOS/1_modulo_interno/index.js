const meuModulo = require('./meu_modulo')

// Encapsulando a função importada 'soma' em uma variável
// para poder invocá-la diretamente pelo nome da variável
// e simplificar a sintaxe
const soma = meuModulo.soma

soma(2, 3)
soma(5, 10)

// ou

meuModulo.soma(10, 10)