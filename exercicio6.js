//juros simples
 //  total da divida, montante =  c . i . t
 // juros =  c i t / 100

 //juros compostos
 // Montante = c(1+ i)^t

 function jurosSimples(cap, taxa, tempo){
    var taxaPorcentagem = taxa / 100
    var juros = cap * taxaPorcentagem * tempo
    var montante = cap + juros
    console.log("montante com juros simples: ",montante)
 }

 jurosSimples(200, 10, 3)

 function jurosCompostos(cap, taxa, tempo){
     var taxaPorcentagem = taxa / 100
     var Montante = cap * Math.pow( 1 + taxaPorcentagem, tempo).toFixed(2)
     console.log("Montante com juros compostos: ",Montante)
 }
jurosCompostos(200, 10, 3)

