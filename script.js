function movimentoa(){
    pedro.style.background = "#FFD900"
}
function saida(){
    pedro.style.background = "rgba(81, 73, 136, 1)"
}

const dias = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const end = `1 dec 2023`

function countDowm(){
    const dataLanc = new Date(end)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/ 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) %24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML =  formatoDias(finalDias)
    horas.innerHTML = formatoHoras(finalHoras)
    minutos.innerHTML = formatoMinutos(finalMinutos)
    segundos.innerHTML = formatoSegundos(finalSegundos)
}
function formatoDias(tempo){
    return tempo > 0? `${tempo} D`: tempo;
}

function formatoHoras(Horas){
    return Horas > 0? `${Horas} H` : Horas;
}

function formatoMinutos(Minutos){
    return Minutos > 0? `${Minutos} M` : Minutos;
}

function formatoSegundos(Segundos){
    return Segundos > 0? `${Segundos} S` : Segundos;
}

countDowm();
setInterval(countDowm, 1000)


