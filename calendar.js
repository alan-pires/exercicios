
let nameEv = document.getElementById("nameEv");
let dateEv = document.getElementById("dateEv");
let startButton = document.getElementById("start");
let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let mostrar = document.getElementById("mostrar")
let startTimer = '';
let data = new Date()


//quando mudar o value do input atribuir na variavel dateEvVal
dateEv.addEventListener('change', function () {
    if(nameEv.value== ''){
        alert("Escreva um evento acima!")
        return;
    }
    dateEvVal = String(dateEv.value);
    let newVal = dateEvVal.split("-");
    let ano = newVal[0];
    let mes = newVal[1];
    let dia = newVal[2];

    let dataSelec = new Date(`${ano}, ${mes}, ${dia}`).getTime();
    clearInterval(startTimer)
    startTimer = setInterval(function () { updateTime(dataSelec) }, 1000)
    mostrar.innerHTML = `Contagem regressiva para: ${nameEv.value}`
})


function updateTime(date) {

    let agora = new Date().getTime();
    let distancia = date - agora;

    let diasD = Math.floor(distancia / (1000 * 60 * 60 * 24))
    let horasD = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutosD = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))
    let segundosD = Math.floor((distancia % (1000 * 60)) / 1000)

    dias.innerHTML = `${diasD} dias`;
    horas.innerHTML = `${horasD} :`;
    minutos.innerHTML = `${minutosD} :`;
    segundos.innerHTML = segundosD;

    if (agora > date) {
        clearInterval(startTimer);
        dias.innerHTML = 'D';
        horas.innerHTML = 'O';
        minutos.innerHTML = 'N';
        segundos.innerHTML = 'E';
    }
}




