const fs = require("fs")

console.log("Início")

fs.writeFile("arquivo.txt", "oi", ((err) => {
    setTimeout(() => {
        console.log('Arquivo criado!')
    }, 1000)
}))

console.log('Fim')