function contar() {
    var inicio = document.getElementById('txt_inicio')
    var fim = document.getElementById('txt_fim')
    var passo = document.getElementById('txt_passo')
    var resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0) {
        resultado.innerHTML = ('Impossivel contar!')
    } else {
        resultado.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)

        if (passo.value.length == 0 || Number(passo.value) == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            var p = 1
        } else if (Number(passo.value) < 0) {
            var p = Number(passo.value) * -1
            window.alert(`Passo inválido! Considerando PASSO ${p}`)
        } else {
            var p = Number(passo.value)
        }
        
        if (i < f) { // contagem crescente
            for (var c = i; c < f; c += p){
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else { // contagem decrescente
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }
}