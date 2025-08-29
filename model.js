let clear = ``;

//section 1
let intro = `Hei hallo! Siden alt jeg har jobbet med denne uka ligger i masse forskjellige filer,
            så tenkte jeg at jeg kunne lage en kopi av moodle-pause koden min som er delt
            opp i MVC format med ordentlig index-navngitt html som kan bli til en io link.
            Beholder al koden og sånt men endrer på teksten!`;
let alternateIntro = `<ul>Uke 3 har jeg lært:
            <li>å lage en introtekst som kan endres! + styles</li>
            <li>knapper som viser forskjellige typer info i tekstfelt</li>
            <li>trafikklys</li>
            <li>krokodillespill</li>
            <li>MVC! Digger MVC</li>
            <li>Har så vidt begynt med litt sånn arrays og for-loop, vanskelige saker</li>
            </ul>`;

// section2
let places = `Jeg har bodd mange steder i løpet av livet - Norge, Danmark, Spania og Qatar!`;
let mydog = `Hunden min heter Anton og er en krokodille`;
let education = `Jeg har faktisk en bachelor i litteraturhistorie, den tok livet av meg`;
let picture = `<img width=100px src="images/IMG_0056.JPG">`;


// section 3 - trafikklys
let trafikklys = /*HTML*/`
    <div class="colorDiv" id="redDiv"></div>
    <div class="colorDiv" id="yellowDiv"></div>
    <div class="colorDiv" id="greenDiv"></div>
    <button onclick="traffick()">TRAFFICK</button>
`;

// section 4 - formatting strings
let stringFormat = `
        <div>
        tast inn små bokstaver: <br>
        <input type="text" id="namebox">
        <button onclick="getString()">submit</button>
        <div id="stringOutput"></div>
        </div>
`;

//section 5 - krokodillespill
let poeng = 0;
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let inputSign = '';


// section 6 text-box
let textboxhtml = `
<div>Trykk på tastaturet</div>
<div id="textBox"></div>
    <section>
        <button onclick="pressButton(this)">A</button>
        <button onclick="pressButton(this)">B</button>
        <button onclick="pressButton(this)">C</button>
        <button onclick="pressButton(this)">D</button>
        <button onclick="pressButton(this)">E</button>
        <button onclick="pressButton(this)">F</button>
        <button onclick="pressButton(this)">G</button>
        <button onclick="pressButton(this)">H</button>
        <button onclick="pressButton(this)">I</button>
        <button onclick="pressButton(this)">J</button>
        <button onclick="pressButton(this)">K</button>
        <button onclick="pressButton(this)">L</button>
        <button onclick="pressButton(this)">M</button>
        <button onclick="pressButton(this)">N</button>
        <button onclick="pressButton(this)">O</button>
        <button onclick="pressButton(this)">P</button>
        <button style=height:20px; onclick="pressButton(this)"> </button>
    </section>
`;
var letter = '';

// section 7 magic8ball

let magichtml = /*HTML*/`
            <h3>Magic 8 ball</h3>
            <button onclick="getAdvice()">Press for advice</button>
            <button onclick="revealArray()">here's the array of possible advice</button>
            <div>Advice:</div> 
            <div id="adviceDiv"></div>
            `;
const advice = ['Aldri gjør det', 'prøv deg frem!', 'man vet aldri', 'go all in'];
let randomNum = 0;
let randomAdvice = '';