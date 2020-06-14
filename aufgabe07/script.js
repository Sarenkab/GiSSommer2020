"use strict";
var aufgabe07;
(function (aufgabe07) {
    function createArtikel() {
        for (let i = 0; i < aufgabe07.wohnzimmer.length; i++) {
            //DIV
            if (aufgabe07.wohnzimmer[i].kategorie == 0) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("artikel0")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (aufgabe07.wohnzimmer[i].kategorie == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("artikel1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //Fotos 
            let imgElement = document.createElement("img");
            imgElement.src = aufgabe07.wohnzimmer[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //artikelname
            let artikelname = document.createElement("p");
            artikelname.innerHTML = aufgabe07.wohnzimmer[i].artikelname;
            document.getElementById("div" + i)?.appendChild(artikelname);
            //spruch
            let spruch = document.createElement("p");
            spruch.innerHTML = aufgabe07.wohnzimmer[i].spruch;
            document.getElementById("div" + i)?.appendChild(spruch);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = aufgabe07.wohnzimmer[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //In den Warenkorb
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleWarenkorb);
            kaufen.setAttribute("preis", aufgabe07.wohnzimmer[i].preis.toString());
        }
    }
    aufgabe07.createArtikel = createArtikel;
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
        let indexNummer = parseInt(indexButton);
        artikelDeko.push(aufgabe07.wohnzimmer[indexNummer]);
        localStorage.setItem("wohnzimmer_bild" + (artikelDeko.length - 1), aufgabe07.wohnzimmer[indexNummer].img);
        localStorage.setItem("wohnzimmer_artikelname" + (artikelDeko.length - 1), aufgabe07.wohnzimmer[indexNummer].artikelname);
        localStorage.setItem("wohnzimmer_spruch" + (artikelDeko.length - 1), aufgabe07.wohnzimmer[indexNummer].spruch);
        localStorage.setItem("wohnzimmer_preis" + (artikelDeko.length - 1), aufgabe07.wohnzimmer[indexNummer].preis.toString());
        localStorage.setItem("anzahlvonArt", artikelDeko.length.toString());
    }
    aufgabe07.handleWarenkorb = handleWarenkorb;
    let alles = document.createElement("a");
    alles.id = "alleArtikel";
    alles.innerHTML = "Alle Wohnartikel";
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
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=script.js.map