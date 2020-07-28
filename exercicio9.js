function calculaNota(nota){
let notaCorrigida = arredondar(nota)
if (notaCorrigida >= 40){
    console.log(`aprovado com nota ${notaCorrigida}`)
}else {
    console.log(`Reprovado com nota ${notaCorrigida}`)
}

function arredondar( nota) {
    if ( nota % 5 > 2) {
        return nota + ( 5 - (nota % 5))
    } else {
        return nota
    }
}

}

calculaNota(53)

//resposta verificada :/