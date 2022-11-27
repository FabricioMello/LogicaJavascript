
function IsPalindromo(A) {
    let tiraEspacos = A.split(' ').join('')
    let arrayA = tiraEspacos.split('')
    let quantidadeVerificacao = arrayA.length % 2 ? (arrayA.length / 2) - 1 : arrayA.length / 2
    for(let i = 0; i<quantidadeVerificacao; i++){
        if(arrayA[i].toUpperCase() != arrayA[arrayA.length-1-i].toUpperCase())
            return 'false'
    }
    return 'true'
}

//console.log(IsPalindromo('Anotaram a data da maratona')) // Palindromo válido