function tabuada() {
    var num = document.getElementById('txt_num')
    var tabuada = document.querySelector('select#sel_tabuada')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número para iniciar!')
    } else {
        var numero = Number(num.value)
        tabuada.innerHTML = ''
        for (var c = 1; c <=10; c++) {
            var item = document.createElement('option') // criação do item como option, cada item é uma linha dentro do select
            item.text = `${numero} x ${c} = ${numero*c}` // adicionando o texto dentro do item
            item.value = `tab${c}` // adicionando valor ao item (cada linha do select)
            tabuada.appendChild(item) // adicionando o item dentro do select
        }
    }
}