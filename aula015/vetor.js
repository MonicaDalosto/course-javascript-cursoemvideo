let valores = [8, 1, 7, 4, 2, 9]



console.log(valores) // retornar o valor do array

console.log(valores[0]) // retornar o valor de cada posição do array de forma manual
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])



for (let pos = 0; pos < valores.length; pos++) { // retornar o valor de cada posição do array com repetição.
    console.log(`O valor da variável na chave ${pos} é ${valores[pos]}`)
}



for(let position in valores) { // repetição simplificado do JS
    console.log(`A posiçao ${position} possui o valor ${valores[position]}`)
}

