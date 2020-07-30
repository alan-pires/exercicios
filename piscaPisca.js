let azul = document.getElementById("azul");
let verde = document.getElementById("verde");
let amarelo = document.getElementById("amarelo");
let laranja = document.getElementById("laranja");
let vermelho = document.getElementById("vermelho");
let rosa = document.getElementById("rosa");
let roxo = document.getElementById("roxo");
let ligar = document.getElementById("start");
let texto = document.getElementById("texto");

function ligarPiscaPisca(tempo){
    
    setInterval(function(){
        azul.classList.toggle('bright')
        verde.classList.toggle('bright')
        amarelo.classList.toggle('bright')
        laranja.classList.toggle('bright')
        vermelho.classList.toggle('bright')
        rosa.classList.toggle('bright')
        roxo.classList.toggle('bright')
    }, tempo)
}

ligar.addEventListener('click', ()=>{
    ligarPiscaPisca(texto.value);
})
