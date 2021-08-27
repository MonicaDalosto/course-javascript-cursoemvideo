var txtNumero = document.getElementById('txt_numero')
var listagem = document.querySelector('select#listagem')
var resultado = document.querySelector('div#resultado')
var valores = []

// Essa function vai validar se o valor digitado está entre 1 e 100:
// 'n' é o parâmetro que vai receber o valor da variável txtNumero (txtNumero.value)
function isNumber(n) { 
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

// Essa function vai validar se o valor digitado já está na lista:
// 'l' é o parâmetro que vai receber o(s) valor(es) do vetor valores
function inList(n, l) { 
    if (l.indexOf(Number(n)) != -1) { // Essa expressão vai validar se o txtNumero (que recebe o valor digitado) já existe em alguma posição do vetor valores através do comando indexOf. !n significa diferente e -1 significa não encontrado. Lê-se: Se *Number(n)* for *diferente* de *não encontrado*, ou seja, se ele foi encontrado em qualquer posição do vetor, então:
        return true
    } else { // senao:
        return false
    }
}

// Essa function deve adicionar o valor digitado ao vetor valores e ao select:
function adicionar() {
    if(!isNumber(txtNumero.value) || inList(txtNumero.value, valores)) { // Lê-se: Se *txtNumero* não for um número válido (function isNumber) ou *txtNumero* for encontrado no vetor valores (function inList), então:
        window.alert('Valor inválido ou já encontrado na lista.')
    } else { // senão
        var numero = Number(txtNumero.value) // Não precisa criar essa variável convertida em Number
        valores.push(numero)
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        item.value = numero
        listagem.appendChild(item)
        resultado.innerHTML = '' // Limpa os valores do resultado.
    }
    txtNumero.value = '' // Limpar a caixa de entrada ao final da execução da function adicionar()
    txtNumero.focus() // Colocar o cursor na caixa de entrada ao final da execução da function adicionar()
}


// Essa function deve iniciar a análise dos valores digitados pelo usuário e recebidos pelo vetor valores:
function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de analisar!')
    } else {
        var qtdeValor = valores.length
        var menorValor = valores[0]
        var maiorValor = valores[0]
        var somaTotal = 0
        // Usei uma repetição para identificar as três variáveis acima:
        // Poderia ter utilizado a forma simplificada: for (var contadorValor in valores)
        for (var contadorValor = 0; contadorValor < valores.length; contadorValor++) {
            somaTotal += valores[contadorValor]
            if (valores[contadorValor] < menorValor) {
                menorValor = valores[contadorValor]
            }
            if (valores[contadorValor] > maiorValor) {
                maiorValor = valores[contadorValor]  
            }
        }
        var mediaSimples = somaTotal / valores.length
        resultado.innerHTML = ''
        resultado.innerHTML = `<p><strong>Resultado da análise:</strong></p>
            <p>Ao todo, temos ${qtdeValor} números cadastrados.</p>
            <p>O menor valor informado foi ${menorValor}.</p>
            <p>O maior valor informado foi ${maiorValor}.</p>
            <p>A soma dos valores digitados é igual a ${somaTotal}.</p>
            <p>A média dos valores digitados é ${mediaSimples}</p>`
    }
    txtNumero.focus()
}


/*
    O resultado poderia ser escrito dessa forma também:
    resultado.innerHTML = 'Resultado da análise:<br>'
    resultado.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.<br>`
    resultado.innerHTML += `O menor valor informado foi ${menorValor}.<br>`
    resultado.innerHTML += `O maior valor informado foi ${maiorValor}.<br>`
    resultado.innerHTML += `A soma dos valores digitados é igual a ${somaTotal}.<br>`
    resultado.innerHTML += `A média dos valores digitados é ${mediaSimples}`

*/