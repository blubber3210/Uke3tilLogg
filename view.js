mainView()
function mainView() {
    let html = /*HTML*/`
            <h1>Hallo uke 3!</h1>
            
            <section class="introductory" id ="introSection">
            <div id="introText">${intro}</div>
            <button onclick="changeIntroStyle()">change style</button>
            <button id="introButton" onclick="toggleChangeIntro()">ting jeg har lært oversikt</button>
            </section>

            <section>
            <div>
                <h3>Her er litt om meg:</h3>
                <p style="text-size: smaller">pluss litt sånn funskjoner på knapper</p>
                <button onclick="getView(places)">Hvor jeg har bodd</button>
                <button onclick="getView(mydog)">Min hund</button>
                <button onclick="getView(education)">Utdannelse</button>
                <button onclick="getView(picture)">en selfie</button>
                <button onclick="clearContent()" class="majorButton">clear</button>
                </div>
            <div id = "contentDiv"></div>
            </section>

            <section id="trafikklys">${trafikklys}</section>
            
            <section>${stringFormat}</section>

            <section>
            <div>krokodillespill</div>
            <div>points: ${poeng}</div>
            <div>${num1}</div> 
            <div><input id="valueInput"></div> 
            <div>${num2}</div>
            <button onclick="submitInput()">submit</button>
            <button onclick="resetNums()">reset</button>
            </section>


            <section>${textboxhtml}</section>

            <section>${magichtml}</section>
            `;

            document.getElementById("app").innerHTML = html;
}