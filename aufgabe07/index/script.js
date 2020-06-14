"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    function createWohnimmer() {
        for (let i = 0; i < wohnzimmer.length; i++) {
            //DIV
            if (wohnzimmer[i].kategorie == 0) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("artikel0")?.appendChild(newDiv);
            }
            if (wohnzimmer[i].kategorie == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("artikel1")?.appendChild(newDiv);
            }
            //Fotos 
            let imgElement = document.createElement("img");
            imgElement.src = wohnzimmer[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //artikelname
            let artikelname = document.createElement("p");
            artikelname.innerHTML = wohnzimmer[i].artikelname;
            document.getElementById("div" + i)?.appendChild(artikelname);
            //spruch
            let spruch = document.createElement("p");
            spruch.innerHTML = wohnzimmer[i].spruch;
            document.getElementById("div" + i)?.appendChild(spruch);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = wohnzimmer[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //In den Warenkorb
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleWarenkorb);
            kaufen.setAttribute("preis", wohnzimmer[i].preis.toString());
        }
    }
    Aufgabe06.createWohnimmer = createWohnimmer;
    //Aufgabe 06
    let summe = 0;
    let zahl = 0;
    let produktzaehler = 0;
    let warenkorbblase = document.createElement("div");
    let artikelDeko = [];
    function handleWarenkorb(_event) {
        if (produktzaehler >= 0) {
            document.getElementById("warenkorbzaehler")?.appendChild(warenkorbblase);
        }
        produktzaehler++;
        warenkorbblase.innerHTML = produktzaehler + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = zahl + parseInt(_event.currentTarget?.getAttribute("preis"));
            zahl = summe;
        }
        console.log(summe.toFixed(0));
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNummer = (indexButton);
        artikelDeko.push(wohnzimmer[indexNummer]);
        localStorage.setItem("wohnzimmer_bild" + (artikelDeko.length - 1), wohnzimmer[indexNummer].img);
        localStorage.setItem("wohnzimmer_artikelname" + (artikelDeko.length - 1), wohnzimmer[indexNummer].artikelname);
        localStorage.setItem("wohnzimmer_spruch" + (artikelDeko.length - 1), wohnzimmer[indexNummer].spruch);
        localStorage.setItem("wohnzimmer_preis" + (artikelDeko.length - 1), wohnzimmer[indexNummer].preis);
        localStorage.setItem("anzahlvonArt", artikelDeko.length.toString());
    }
    Aufgabe06.handleWarenkorb = handleWarenkorb;
    let alles = document.createElement("a");
    alles.id = "alleArtikel";
    alles.innerHTML = "Alle wohnzimmer";
    alles.addEventListener("click", handleKategorie);
    document.getElementById("allesbutton")?.appendChild(alles);
    let dekosachen = document.createElement("a");
    dekosachen.id = "wohnartikel";
    dekosachen.innerHTML = "Wohnartikel";
    dekosachen.addEventListener("click", handleKategorie);
    document.getElementById("Wohnzimmerbutton")?.appendChild(dekosachen);
    let schreibtischsachen = document.createElement("a");
    schreibtischsachen.id = "büroartikel";
    schreibtischsachen.innerHTML = "Büroartikel";
    schreibtischsachen.addEventListener("click", handleKategorie);
    document.getElementById("schreibtischbutton")?.appendChild(schreibtischsachen);
    function handleKategorie(_event) {
        //Alles  
        if (_event.currentTarget.getAttribute("id") == "alleArtikel") {
            document.getElementById("artikel0").style.display = "block";
            document.getElementById("artikel1").style.display = "block";
            //Wohnzimmer   
        }
        else if (_event.currentTarget.getAttribute("id") == "wohnartikel") {
            document.getElementById("artikel1").style.display = "none";
            document.getElementById("artikel0").style.display = "block";
            //Schreibtisch   
        }
        else if (_event.currentTarget.getAttribute("id") == "büroartikel") {
            document.getElementById("artikel0").style.display = "none";
            document.getElementById("artikel1").style.display = "block";
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map