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
    if (l.indexOf(Number(n)) != -1) { // Analisar melhor essa experessão...
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(txtNumero.value) && !inList(txtNumero.value, valores)) {
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}







/*
function adicionar() {
    if (txtnumero.value.length == 0) {
        window.alert('Por favor, digite um número para iniciar!')
    } else if (txtnumero.value < 1 || txtnumero.value > 100) {
        window.alert('Por favor, digite um número válido!')
    } else {
        var numero = Number(txtnumero.value)
        quadro.innerHTML = ''
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        item.value = numero
        quadro.appendChild(item)
    }
}
*/
