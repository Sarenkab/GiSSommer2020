
interface Wohnzimmer {
    img: string;
    artikelname: string;
    spruch: string;
    preis: number;
    kategorie: number;
}

//Wohnzimmerartikel
let hängetopf: Wohnzimmer = {img: "Hängetopf.jpg", artikelname: "Hängetopf", spruch: "Hoch hinauf, lass die Pflanzen fliegen", preis: 9.99, kategorie: 0 };
let hohetöpfe: Wohnzimmer = {img: "hohetöpfe.jfif", artikelname: "Hohe Metalltöpfe", spruch: "Hoch höher- der Topf bringt neue Sichten", preis: 9.99, kategorie: 0};
let kerzenständer: Wohnzimmer = {img: "Kerzenständer.jfif", artikelname: "Kerzenständer", spruch: "Feuer und Flamme- Lass die Wohnung leuchten", preis: 7.99, kategorie: 0};
let und: Wohnzimmer = { img: "und.png", artikelname: "Deko &", spruch: "Und und- Lass es Leben", preis: 3.00, kategorie: 0};
let wanduhr: Wohnzimmer = { img: "Wanduhr.jpg", artikelname: "Wanduhr", spruch: "TikTak- Gönn dir den Sound ", preis: 8.99, kategorie: 0};
let beistelltisch: Wohnzimmer = { img: "beistelltisch.jfif", artikelname: "Beistelltisch", spruch: "Klein aber Fein- Es trägt auch deinen Wein", preis: 15.00, kategorie: 0}; 
let aufbewahrungstisch: Wohnzimmer = { img: "Aufbewahrungstisch.webp", artikelname: "Tisch mit Aufbewahrungsfunktion", spruch: "Stauraum macht Sinn", preis: 25.00, kategorie: 1};
let sofa: Wohnzimmer = {img: "sofafürWohnzimmer.jpg", artikelname: "Sofa", spruch: "gemütlich groß- entspann dich mal wieder so richtig", preis: 259.00, kategorie: 1};
let gelbersessel: Wohnzimmer = {img: "gelbersessel.jfif", artikelname: "Gelber Sessel", spruch: "Setz dich- es ist vorzüglich", preis: 158.00, kategorie: 1};
let bookcase: Wohnzimmer = {img: "bookcase.webp", artikelname: "Bookcase", spruch: "Nicht nur ein Schrank- es erzählt Geschichte", preis: 80.00, kategorie: 1};
let teppich: Wohnzimmer = {img: "teppich.webp", artikelname: "Teppich kariert", spruch: "Fabren und Formen - lass es dir nicht nehmen es gemütlich zu haben", preis: 99.99, kategorie: 1};
let poster: Wohnzimmer = {img: "postercoco.jpg", artikelname: "CoCo Poster", spruch: "Auch die Wand steht auf Marken", preis: 7.00, kategorie: 1};
let posterset1: Wohnzimmer = {img: "posterset1.jpg", artikelname: "Poster Set", spruch: "Lass die Wand strahlen", preis: 24.95, kategorie: 1};

let wohnzimmerartikel: Wohnzimmer[] = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa,gelbersessel, bookcase, teppich, poster, posterset1];


//wohnzimmerartikel
for (let i: number = 0; i < wohnzimmerartikel.length; i++) {

    if (wohnzimmerartikel[i].kategorie == 0) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div" + i;
    document.getElementById("wohnartikel")?.appendChild(newDiv); 
    }
    if (wohnzimmerartikel[i].kategorie == 1) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("büroartikel")?.appendChild(newDiv);
    }
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + i;
    document.getElementById("artikel1")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = wohnzimmerartikel[i].img;
    document.getElementById("div1" + i)?.appendChild(imgElement);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = wohnzimmerartikel[i]. artikelname;
    document.getElementById("div1" + i)?.appendChild(artikelname);

    //spruch
    let spruch: HTMLParagraphElement = document.createElement("p");
    spruch.innerHTML = wohnzimmerartikel[i].spruch;
    document.getElementById("div1" + i)?.appendChild(spruch);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = wohnzimmerartikel[i].preis + "€";
    document.getElementById("div1" + i)?.appendChild(price);

    //In den Warenkorb
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + i)?.appendChild(kaufen);
}


