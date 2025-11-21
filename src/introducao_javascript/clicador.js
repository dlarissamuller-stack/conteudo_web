
let qtdCliques = 0
let segundos = 0

function handleClick(){
    qtdCliques += 1;
    let elementoQtdCliques = document.getElementById("quantidade-cliques");
    elementoQtdCliques.innerText = qtdCliques;
}

window.onload = ()=>{
    cronometro();
}

function cronometro(){
    setTimeout(()=>{

        segundos += 1;

        let elementoCronometro = document.getElementById("cronometro")
        elementoCronometro.innerText = segundos
        cauculaCliquesPorMinuto()
        cronometro();
    },1000)
}

function cauculaCliquesPorMinuto(){
    CliquesPorMinuto = (qtdCliques / (segundos / 60)).toFixed();

    let elememtoCliquesPorMinuto = document.getElementById("cpm")
    elememtoCliquesPorMinuto.innerText = CliquesPorMinuto;
}