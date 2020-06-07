"use strict";
//Wohnzimmerartikel
let hängetopf = { img: "Hängetopf.jpg", artikelname: "Hängetopf", spruch: "Hoch hinauf, lass die Pflanzen fliegen", preis: "9.99€" };
let hohetöpfe = { img: "hohetöpfe.jfif", artikelname: "Hohe Metalltöpfe", spruch: "Hoch höher- der Topf bringt neue Sichten", preis: "9.99€" };
let kerzenständer = { img: "Kerzenständer.jfif", artikelname: "Kerzenständer", spruch: "Feuer und Flamme- Lass die Wohnung leuchten", preis: "7.99€" };
let und = { img: "und.png", artikelname: "Deko &", spruch: "Und und- Lass es Leben", preis: "3.00€" };
let wanduhr = { img: "Wanduhr.jpg", artikelname: "Wanduhr", spruch: "TikTak- Gönn dir den Sound ", preis: "8.99€" };
let beistelltisch = { img: "beistelltisch.jfif", artikelname: "Beistelltisch", spruch: "Klein aber Fein- Es trägt auch deinen Wein", preis: "15.00€" };
let aufbewahrungstisch = { img: "Aufbewahrungstisch.webp", artikelname: "Tisch mit Aufbewahrungsfunktion", spruch: "Stauraum macht Sinn", preis: "25.00€" };
let sofa = { img: "sofafürWohnzimmer.jpg", artikelname: "Sofa", spruch: "gemütlich groß- entspann dich mal wieder so richtig", preis: "259.00€" };
let gelbersessel = { img: "gelbersessel.jfif", artikelname: "Gelber Sessel", spruch: "Setz dich- es ist vorzüglich", preis: "158.00€" };
let bookcase = { img: "bookcase.webp", artikelname: "Bookcase", spruch: "Nicht nur ein Schrank- es erzählt Geschichte", preis: "80.00€" };
let teppich = { img: "teppich.webp", artikelname: "Teppich kariert", spruch: "Fabren und Formen - lass es dir nicht nehmen es gemütlich zu haben", preis: "99.99€" };
let poster = { img: "postercoco.jpg", artikelname: "CoCo Poster", spruch: "Auch die Wand steht auf Marken", preis: "7.00€" };
let posterset1 = { img: "posterset1.jpg", artikelname: "Poster Set", spruch: "Lass die Wand strahlen", preis: "24.95€" };
let wohnzimmerartikel = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa, gelbersessel, bookcase, teppich, poster, posterset1];
//bürozeugsartikel
let tischbeine = { img: "Tischbeine.webp", artikelname: "Tischbeine weiß", spruch: "Praktisch gut- Beine machen den Tisch komplett", preis: "9.99€" };
let holzhocker = { img: "holzhocker.webp", artikelname: "Holzhocker im Landhausstil", spruch: "bequem und schick- gebe deinem Büro einen besonderen Hingucker", preis: "35€" };
let stuhl = { img: "stuhl.jpg", artikelname: "Bürostuhl", spruch: "gemütlich gesund- der Stuhl, der dich auf dem weg zum Erfolg begleitet", preis: "70€" };
let tischplatte = { img: "tischplatte.webp", artikelname: "Tischplatte Holz", spruch: "Holzig schön- Die Platte für die Beine", preis: "40€" };
let regal = { img: "regalweiß.webp", artikelname: "weißes Regal", spruch: "immer schön- ein weißes Regal braucht doch wirklich jeder", preis: "9.99€" };
let kommode = { img: "kommode.webp", artikelname: "Hochglanz Kommode", spruch: "gib der Wohnung einen Kick- glänzt und funkelt", preis: "70€" };
let posterset = { img: "posterset.png", artikelname: "Poster- set", spruch: "belebend schön- gebe der Wand ihren Charakter", preis: "35€" };
let lampe = { img: "Lampeneu.jfif", artikelname: "Tischlampe in Holzoptik", spruch: "leuchte hell- genau das tut Sie für dich", preis: "15€" };
let blumentopf = { img: "blumentopf.jpg", artikelname: "Blumentopf set", spruch: "Schlicht weiß- Bring die Weisheit ins Büro", preis: "10€" };
let topfset = { img: "topfset.jfif", artikelname: "Topf-set", spruch: "schlicht und doch besonders- gib der Pflanze ihr Zuhause", preis: "30€" };
let bürozeugsartikel = [tischbeine, holzhocker, stuhl, tischplatte, regal, kommode, posterset, lampe, blumentopf, topfset];
//wohnzimmerartikel
for (let index = 0; index < wohnzimmerartikel.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("artikel1")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = wohnzimmerartikel[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);
    //artikelname
    let artikelname = document.createElement("p");
    artikelname.innerHTML = wohnzimmerartikel[index].artikelname;
    document.getElementById("div1" + index)?.appendChild(artikelname);
    //spruch
    let spruch = document.createElement("p");
    spruch.innerHTML = wohnzimmerartikel[index].spruch;
    document.getElementById("div1" + index)?.appendChild(spruch);
    //PREIS
    let price = document.createElement("p");
    price.innerHTML = wohnzimmerartikel[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);
    //In den Warenkorb
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}
//bürozeugsartikel
for (let index = 0; index < bürozeugsartikel.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("artikel2")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = bürozeugsartikel[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);
    //artikelname
    let artikelname = document.createElement("p");
    artikelname.innerHTML = bürozeugsartikel[index].artikelname;
    document.getElementById("div2" + index)?.appendChild(artikelname);
    //spruch
    let spruch = document.createElement("p");
    spruch.innerHTML = bürozeugsartikel[index].spruch;
    document.getElementById("div2" + index)?.appendChild(spruch);
    //PREIS
    let price = document.createElement("p");
    price.innerHTML = bürozeugsartikel[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);
    //In den Warenkorb
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map