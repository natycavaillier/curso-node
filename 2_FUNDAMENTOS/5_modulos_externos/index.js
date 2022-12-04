// npm install minimist
// node index.js --nome=Natalia --profissao=Desenvolvedora

const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(`O meu nome é ${nome} e minha profissao é ${profissao}`)
