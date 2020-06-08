"use strict";
//Wohnzimmerartikel
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
let wohnzimmerartikel = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa, gelbersessel, bookcase, teppich, poster, posterset1];
//wohnzimmerartikel
for (let i = 0; i < wohnzimmerartikel.length; i++) {
    if (wohnzimmerartikel[i].kategorie == 0) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("wohnartikel")?.appendChild(newDiv);
    }
    if (wohnzimmerartikel[i].kategorie == 1) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("büroartikel")?.appendChild(newDiv);
    }
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + i;
    document.getElementById("artikel1")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = wohnzimmerartikel[i].img;
    document.getElementById("div1" + i)?.appendChild(imgElement);
    //artikelname
    let artikelname = document.createElement("p");
    artikelname.innerHTML = wohnzimmerartikel[i].artikelname;
    document.getElementById("div1" + i)?.appendChild(artikelname);
    //spruch
    let spruch = document.createElement("p");
    spruch.innerHTML = wohnzimmerartikel[i].spruch;
    document.getElementById("div1" + i)?.appendChild(spruch);
    //PREIS
    let price = document.createElement("p");
    price.innerHTML = wohnzimmerartikel[i].preis + "€";
    document.getElementById("div1" + i)?.appendChild(price);
    //In den Warenkorb
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + i)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map