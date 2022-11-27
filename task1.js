
let ArrayNumeros = [1,2,3,1,5,6,7,8,9,10,11,12,13,14,15,16]

function ContaImpares(N) {
    return ArrayImpares = N.filter(function(numero) {
        return numero % 2 == true
    }).length
}

console.log(ContaImpares(ArrayNumeros))