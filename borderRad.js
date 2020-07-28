
let caixa = document.getElementById("caixa")
let topLeft = document.getElementById("topLeft")
let topLeftIn = document.getElementById("topLeftIn")
let topRight = document.getElementById("topRight")
let topRightIn = document.getElementById("topRightIn")
let bottomRight = document.getElementById("bottomRight")
let bottomRightIn = document.getElementById("bottomRightIn")
let bottomLeft = document.getElementById("bottomLeft")
let bottomLeftIn = document.getElementById("bottomLeftIn")
let copiar = document.getElementById('copiar')

topLeft.addEventListener('click',(e)=>{
    e.preventDefault()
    caixa.style.borderRadius= `5px 5px 5px 5px`
})

topRight.addEventListener('click',(e)=>{
    e.preventDefault()
    caixa.style.borderRadius= `${topLeftIn.value}px ${topRightIn.value}px ${bottomRightIn.value}px ${bottomLeftIn.value}px`  
})

bottomRight.addEventListener('click',(e)=>{
    e.preventDefault()
    caixa.style.borderRadius=`${topLeftIn.value}px ${topRightIn.value}px ${bottomRightIn.value}px ${bottomLeftIn.value}px`      
})

bottomLeft.addEventListener('click',(e)=>{
    e.preventDefault()
    caixa.style.borderRadius= `${topLeftIn.value}px ${topRightIn.value}px ${bottomRightIn.value}px ${bottomLeftIn.value}px`      
})

copiar.addEventListener('click', function(e){
    e.preventDefault()
       
    let estilo = document.getElementById('transferir')
    estilo.value = `${topLeftIn.value}px ${topRightIn.value}px ${bottomRightIn.value}px ${bottomLeftIn.value}px`
     estilo.innerHTML = `${topLeftIn.value}px ${topRightIn.value}px ${bottomRightIn.value}px ${bottomLeftIn.value}px`
    estilo.select()
    document.execCommand('copy')
    alert("O estilo " + estilo.value+ " foi copiado");
})