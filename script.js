let screen = document.getElementById("value");
let display = "";
let inputA = "";
let inputB = "";
let inputC = 0;
let state = 0;
let nums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    
]
let maths = [
    "   ",
    " + ",
    " - ",
    " * ",
    " / "
]

function reset() {
    display = "";
    inputA = "";
    inputB = "";
    inputC = 0;
    state = 0;
    displayInputs();
}
function input(x) {
    if (x == 15) {
        reset();
    } else {
        if (state == 0) {
            updateInputA(x);
        } else if (state == 1) {   
            updateInputC(x);
        } else if (state == 2) {
            updateInputB(x);
        }
    }
}
function updateInputA(x) {
    if (x < 11) {
        inputA += nums[x];
        displayInputs();
        randomGif()
    } else if (x == 16) {
        state = 1;
        randomGif();
    }
}
function updateInputB(x) {
    if (x < 11) {
        inputB += nums[x];
        displayInputs();
        randomGif()
    } else if (x == 16) {
        calculate();
    }
}
function updateInputC(x) {
    if (x > 10 && x < 15) {
        switch(x) {
            case 11: inputC = 1; break;
            case 12: inputC = 2; break;
            case 13: inputC = 3; break;
            case 14: inputC = 4; break;
        }
        displayInputs();
        randomGif()
        state = 2;
    } else if (x == 16) {
        state = 2;
        randomGif();
    }
}
function displayInputs() {
    display = inputA + maths[inputC] + inputB;
    screen.innerHTML = display;
}
function calculate() {
    display = "Inputs Set"
    screen.innerHTML = display;
    setTimeout(function() {
        display = "Now Calculating"
        screen.innerHTML = display;
        setTimeout(function() {
            let i = 0;
            eyecandy.style.backgroundImage = "url(" + gifs[9] + ")"
            let beeps = setInterval(function() {
                let scan = "";
                for (let n = 0; n < 16; n++) {
                    scan += nums[Math.floor(Math.random() * 9)];
                }
                screen.innerHTML = scan;
                i++
                if (i > 100) {
                    math();
                    window.clearInterval(beeps);
                }
            }, 50);
        }, 2000);
    }, 2000);
}
function math() {
    let num1 = Number(inputA);
    let num2 = Number(inputB);
    let num3 = 0;
    switch(inputC) {
        case 1: num3 = num1 + num2; break;
        case 2: num3 = num1 - num2; break;
        case 3: num3 = num1 * num2; break;
        case 4: num3 = num1 / num2; break;
    }
    reset();
    if (num3 > 9000) {
        eyecandy.style.backgroundImage = "url(" + gifs[10] + ")"
    } else if (isNaN(num3)) {
        eyecandy.style.backgroundImage = "url(" + gifs[11] + ")"
    } else {
        eyecandy.style.backgroundImage = "url(" + gifs[12] + ")"
    }
    screen.innerHTML = num3;
}
let eyecandy = document.getElementById("gif");
let gifs = [
    "https://media1.tenor.com/m/YsqeTAex5aoAAAAd/gamblecore-stickman.gif",
    "https://media1.tenor.com/m/gN8c7o0TlnQAAAAd/reddit-reddit-gold.gif",
    "https://media1.tenor.com/m/2shmiu_6kUYAAAAd/flathamster-hamster.gif",
    "https://media1.tenor.com/m/NmtI99JHKj0AAAAd/save-me-subway-surfer.gif",
    "https://media1.tenor.com/m/3FD0hQrZV1IAAAAd/free-wifi-anywhere-you-go-application.gif",
    "https://media1.tenor.com/m/pt1_iE9paDgAAAAd/that-friday-feeling-mario.gif",
    "https://media1.tenor.com/m/SKtBP0oR6EAAAAAC/smurf.gif",
    "https://media1.tenor.com/m/TolCVIpV58oAAAAC/yamcha.gif",
    "https://media1.tenor.com/m/e5dBKSdEk4AAAAAC/car-uh-car.gif",
    "https://media1.tenor.com/m/C2ZnZj6Gl-gAAAAC/anime-dragon-ball.gif",
    "https://media1.tenor.com/m/x_GNnWa8SIoAAAAC/vegeta-its-over9000.gif",
    "https://media1.tenor.com/m/7rVPRRZcjzwAAAAC/mario-sad.gif",
    "https://media1.tenor.com/m/22bxVPqu6NEAAAAC/dragon-ball-krillin.gif"
]
function randomGif() {
    eyecandy.style.backgroundImage = "url(" + gifs[Math.floor(Math.random() * 9)] + ")"
}