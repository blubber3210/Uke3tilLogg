function getView(selectedVar) {
    document.getElementById("contentDiv").innerHTML = `${selectedVar}`
}

function clearContent() {
    document.getElementById("contentDiv").innerHTML = ``;
}

function changeIntroStyle() {
    document.getElementById("introSection").classList.toggle("alternateIntro");
}

function toggleChangeIntro() {
    if (document.getElementById("introText").innerHTML == alternateIntro) {
        document.getElementById("introText").innerHTML = intro;
        document.getElementById("introButton").innerText = `overview`;
    } else {
        document.getElementById("introText").innerHTML = alternateIntro;
        document.getElementById("introButton").innerText = `intro`;
    }
}


//TRAFIKKLYS SECTION 3
function traffick() {
    setTimeout(() => {
        lightRed();
    }, 1000);
    setTimeout(() => {
        lightYellow();
    }, 2000);
    setTimeout(() => {
        lightGreen();
    }, 3000);
    setTimeout(() => {
        lightYellow();
    }, 4000)
    setTimeout(() => {
        lightRed();
    }, 5000)
}

const redTraffick = document.getElementById("redDiv");
const greenTraffick = document.getElementById("greenDiv");
const yellowTraffick = document.getElementById("yellowDiv");

function lightRed() {
    redTraffick.style.backgroundColor = 'red';
    greenTraffick.style.backgroundColor = 'darkkhaki';
    yellowTraffick.style.backgroundColor = 'darkkhaki';
}

function lightGreen() {
    greenTraffick.style.backgroundColor = 'green';
    redTraffick.style.backgroundColor = 'darkkhaki';
    yellowTraffick.style.backgroundColor = 'darkkhaki';
}

function lightYellow() {
    yellowTraffick.style.backgroundColor = 'yellow';
    greenTraffick.style.backgroundColor = 'darkkhaki';
}

//Section 4 formating strings
function getString() {
    s1 = document.getElementById("namebox").value;
    document.getElementById("stringOutput").innerHTML += /*HTML*/`
        <div>
            <div>Capitalized input: ${capitalizeString(s1)} <br>
            </div>
        </div>
        `
}

function capitalizeString(s1) {
    return s1.charAt(0).toUpperCase() + s1.slice(1);
}



//section 5 krokodillespill
function resetNums() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    mainView();
}

function submitInput() {
    inputSign = document.getElementById('valueInput').value;
    if (num1 == num2 && inputSign == '=') {
        poeng++;
    } else if (num1 >= num2 && inputSign == '>') {
        poeng++;
    } else if (num1 <= num2 && inputSign == '<') {
        poeng++;
    } else {
        poeng--;
    }
    resetNums();
}

// section 6 text-box

function pressButton(letterPressed) {
    letter += letterPressed.innerHTML;
    document.getElementById("textBox").innerHTML = letter;
}

//section 7 magic 8 ball

function getAdvice(){
            let adviceText = document.getElementById('adviceDiv');
            randomNum = Math.floor(Math.random() * 4);
            console.log(randomNum);
            let i = randomNum;
            adviceText.innerHTML = `${advice[i]}`
        }

function revealArray(){
    for(let i = 0; i < advice.length; i++) {
        adviceDiv.innerHTML += `<br>${i} ${advice[i]}`
    }
}