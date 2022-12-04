// mais de um valor
const x = 10
const y = "Ellie"
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
for (let i = 0; i < 3; i++) {
    console.count(`O valor de x é: ${x}, contagem`)
}

// variável entre string
console.log("O nome é %s", y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000)