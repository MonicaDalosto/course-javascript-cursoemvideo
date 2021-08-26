let resultado = parimpar(11) // 'parimpar' é a chamada. Variável criada para receber o valor da função!

function parimpar(n) { // 'n' é o parâmetro
    if (n % 2 == 0) { // o que está entre parênteses é a ação
        return 'Par!' // 'par' é um possível retorno
    } else {
        return 'Impar!' // 'impar' é um possível retorno
    }
}

console.log (resultado) // Mostrar o resultado na tela!

