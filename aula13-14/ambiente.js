// while: Estrutura de repetição com teste lógico no início (enquanto)

var contador = 1
while (contador <= 6) { // Enquanto o contador for menor ou igual a 6 execute a função abaixo:
    console.log('Tudo bem?')
    contador++
}

// do while: Estrutura de repetição com teste lógico no final (faça... enquanto)

var contar = 1
do {
    console.log(`Passo ${contar} executado`)
    contar++
} while(contar <= 6)

// for: Estrutura de repetição com variável de controle (para... faça)

console.log('Vai começar...')
for (var c = 1; c <= 4; c++) { // for (início; teste; incremento)
    console.log(`Exemplo ${c} executado`)
}
console.log('Fim!')