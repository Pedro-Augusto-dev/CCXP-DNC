const  ingressos = []; 

function addRedBorder(id) {
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

function highLigthCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLigth");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var nome = event.key;
        var code = event.code;

        alert(`Tecla Pressionada ${nome} \r\n key code: ${code}` );
    }, false);
}

function addKeyboardEventListeners()
{
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("primeiro");
        var ingresso2 = document.getElementById("segundo2");
        var ingresso3 = document.getElementById("terceiro");
        var ingresso4 = document.getElementById("quarto");
    
        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.toggle("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }

        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.toggle("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }1

        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.toggle("card-highLigth");
        }
    })
}
addKeyboardEventListeners();

function selectCard(seletor) 
{
    var element = document.querySelector(seletor);
    element.classList.toggle("card-selected");
    if(ingressos.includes(seletor)) ingressos.pop(seletor);
    else ingressos.push(seletor)

}

function showSelectedCards()
{
     if(ingressos.length > 0) alert("ingressos Selecionados" + ingressos);
}