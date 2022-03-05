const Piedra = "rock";
const Papel = "paper";
const Tijera = "scissors";

const Empate = 0;
const Gano = 1;
const Perdio = 2;

let isPlaying = false;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
    play(Piedra);
});
papelBtn.addEventListener("click", () => {
    play(Papel);
});
tijeraBtn.addEventListener("click", () => {
    play(Tijera);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = `Assets/img/${userOption}.png`;

    resultText.innerHTML = "Escogiendo";

    const interval = setInterval(function() {
        const machineOption = calcMachineOption();
        machineImg.src = `Assets/img/${machineOption}.png`;
    }, 200);

    setTimeout(function() {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = `Assets/img/${machineOption}.png`;

        switch (result) {
            case Empate:
                resultText.innerHTML = "Empate!";
                break;
            case Gano:
                resultText.innerHTML = "Gano!";
                break;
            case Perdio:
                resultText.innerHTML = "Perdio!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * vecesjuego);
    switch (number) {
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijera;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return Empate;

    } else if (userOption === Piedra) {

        if (machineOption === Papel) return Perdio;
        if (machineOption === Tijera) return Gano;

    } else if (userOption === Papel) {

        if (machineOption === Tijera) return Perdio;
        if (machineOption === Piedra) return Gano;

    } else if (userOption === Tijera) {

        if (machineOption === Piedra) return Perdio;
        if (machineOption === Papel) return Gano;

    }
}