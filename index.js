const fs = require('fs').promises;
const arguments = process.argv.slice(2);

//* Esercizio svolto da Stefano

async function readFile(file) {
    const data = await fs.readFile(file)
    const dataToString = data.toString()
    console.log(dataToString)
}

async function writeFile(file, content) {
    await fs.writeFile(file, content, {flag: 'a+'})
}

const content = `\n prodotto: ${arguments[0]} quantity: ${arguments[1]}`;

async function writeAndRead() {
    await writeFile('spesa.txt', content)
    await readFile('spesa.txt')
}

writeAndRead()

//* Esercizio mio

// async function readFile(file) {              
//     const data = await fs.readFile(file)
//     console.log(data.toString())
// }

// console.log(readFile('spesa.txt'))

// async function writeFile(file, content) {
//     await fs.writeFile(file, content)
// }

// const content = `
//     prodotto: ${arguments[0]},
//     quantità: ${arguments[1]}
// `

// fs.readFile(content);
// fs.writeFile('spesa.txt', content, {flag: 'a+'});