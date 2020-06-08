"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //dekoartikel
    let hängetopf = { img: "Hängetopf.jpg", artikelname: "Hängetopf", spruch: "Hoch hinauf, lass die Pflanzen fliegen", preis: 9.99, kategorie: 0 };
    let hohetöpfe = { img: "hohetöpfe.jfif", artikelname: "Hohe Metalltöpfe", spruch: "Hoch höher- der Topf bringt neue Sichten", preis: 9.99, kategorie: 0 };
    let kerzenständer = { img: "Kerzenständer.jfif", artikelname: "Kerzenständer", spruch: "Feuer und Flamme- Lass die Wohnung leuchten", preis: 7.99, kategorie: 0 };
    let und = { img: "und.png", artikelname: "Deko &", spruch: "Und und- Lass es Leben", preis: 3.00, kategorie: 0 };
    let wanduhr = { img: "Wanduhr.jpg", artikelname: "Wanduhr", spruch: "TikTak- Gönn dir den Sound ", preis: 8.99, kategorie: 0 };
    let beistelltisch = { img: "beistelltisch.jfif", artikelname: "Beistelltisch", spruch: "Klein aber Fein- Es trägt auch deinen Wein", preis: 15.00, kategorie: 0 };
    let aufbewahrungstisch = { img: "Aufbewahrungstisch.webp", artikelname: "Tisch mit Aufbewahrungsfunktion", spruch: "Stauraum macht Sinn", preis: 25.00, kategorie: 1 };
    let sofa = { img: "sofafürWohnzimmer.jpg", artikelname: "Sofa", spruch: "gemütlich groß- entspann dich mal wieder so richtig", preis: 259.00, kategorie: 1 };
    let gelbersessel = { img: "gelbersessel.jfif", artikelname: "Gelber Sessel", spruch: "Setz dich- es ist vorzüglich", preis: 158.00, kategorie: 1 };
    let bookcase = { img: "bookcase.webp", artikelname: "Bookcase", spruch: "Nicht nur ein Schrank- es erzählt Geschichte", preis: 80.00, kategorie: 1 };
    let teppich = { img: "teppich.webp", artikelname: "Teppich kariert", spruch: "Fabren und Formen - lass es dir nicht nehmen es gemütlich zu haben", preis: 99.99, kategorie: 1 };
    let poster = { img: "postercoco.jpg", artikelname: "CoCo Poster", spruch: "Auch die Wand steht auf Marken", preis: 7.00, kategorie: 1 };
    let posterset1 = { img: "posterset1.jpg", artikelname: "Poster Set", spruch: "Lass die Wand strahlen", preis: 24.95, kategorie: 1 };
    let dekoartikel = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa, gelbersessel, bookcase, teppich, poster, posterset1];
    for (let i = 0; i < dekoartikel.length; i++) {
        //DIV
        if (dekoartikel[i].kategorie == 0) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("artikel0")?.appendChild(newDiv);
        }
        if (dekoartikel[i].kategorie == 1) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("artikel1")?.appendChild(newDiv);
        }
        //Fotos 
        let imgElement = document.createElement("img");
        imgElement.src = dekoartikel[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);
        //artikelname
        let artikelname = document.createElement("p");
        artikelname.innerHTML = dekoartikel[i].artikelname;
        document.getElementById("div" + i)?.appendChild(artikelname);
        //spruch
        let spruch = document.createElement("p");
        spruch.innerHTML = dekoartikel[i].spruch;
        document.getElementById("div1" + i)?.appendChild(spruch);
        //Preis
        let price = document.createElement("p");
        price.innerHTML = dekoartikel[i].preis + "€";
        document.getElementById("div1" + i)?.appendChild(price);
        //In den Warenkorb
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("div" + i)?.appendChild(kaufen);
        kaufen.addEventListener("click", handleWarenkorb);
        kaufen.setAttribute("preis", dekoartikel[i].preis.toString());
    }
    //Aufgabe 06
    let summe = 0;
    let zahl = 0;
    let produktzaehler = 0;
    let warenkorbblase = document.createElement("div");
    function handleWarenkorb(_event) {
        if (produktzaehler >= 0) {
            document.getElementById("warenkorbzähler")?.appendChild(warenkorbblase);
        }
        produktzaehler++;
        warenkorbblase.innerHTML = produktzaehler + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = zahl + parseInt(_event.currentTarget?.getAttribute("preis"));
            zahl = summe;
        }
        console.log(summe.toFixed(0) + "€");
    }
    //Aufgabe 06-2
    let alles = document.createElement("a");
    alles.id = "alleArtikel";
    alles.innerHTML = "Alle Dekoartikel";
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