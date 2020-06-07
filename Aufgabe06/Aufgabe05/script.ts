namespace Aufgabe06 {

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
let und: Wohnzimmer = { img: "und.png", artikelname: "Deko &", spruch: "Und und- Lass es Leben", preis: 3.00 , kategorie: 0};
let wanduhr: Wohnzimmer = { img: "Wanduhr.jpg", artikelname: "Wanduhr", spruch: "TikTak- Gönn dir den Sound ", preis: 8.99 , kategorie: 0};
let beistelltisch: Wohnzimmer = { img: "beistelltisch.jfif", artikelname: "Beistelltisch", spruch: "Klein aber Fein- Es trägt auch deinen Wein", preis: 15.00, kategorie: 0}; 
let aufbewahrungstisch: Wohnzimmer = { img: "Aufbewahrungstisch.webp", artikelname: "Tisch mit Aufbewahrungsfunktion", spruch: "Stauraum macht Sinn", preis: 25.00, kategorie: 0};
let sofa: Wohnzimmer = {img: "sofafürWohnzimmer.jpg", artikelname: "Sofa", spruch: "gemütlich groß- entspann dich mal wieder so richtig", preis: 259.00, kategorie: 0};
let gelbersessel: Wohnzimmer = {img: "gelbersessel.jfif", artikelname: "Gelber Sessel", spruch: "Setz dich- es ist vorzüglich", preis: 158.00, kategorie: 0};
let bookcase: Wohnzimmer = {img: "bookcase.webp", artikelname: "Bookcase", spruch: "Nicht nur ein Schrank- es erzählt Geschichte", preis: 80.00, kategorie: 0};
let teppich: Wohnzimmer = {img: "teppich.webp", artikelname: "Teppich kariert", spruch: "Fabren und Formen - lass es dir nicht nehmen es gemütlich zu haben", preis: 99.99, kategorie: 0};
let poster: Wohnzimmer = {img: "postercoco.jpg", artikelname: "CoCo Poster", spruch: "Auch die Wand steht auf Marken", preis: 7.00, kategorie: 0};
let posterset1: Wohnzimmer = {img: "posterset1.jpg", artikelname: "Poster Set", spruch: "Lass die Wand strahlen", preis: 24.95, kategorie: 0};

let wohnzimmerartikel: Wohnzimmer[] = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa, gelbersessel, bookcase, teppich, poster, posterset1];


interface Schreibtisch {
    img: string;
    artikelname: string;
    spruch: string;
    preis: number;
    kategorie: number;
}
//schreibtischartikel
let tischbeine: Schreibtisch = {img: "Tischbeine.webp", artikelname: "Tischbeine weiß", spruch: "Praktisch gut- Beine machen den Tisch komplett", preis: 9.99, kategorie: 1};
let holzhocker: Schreibtisch = {img: "holzhocker.webp", artikelname: "Holzhocker im Landhausstil", spruch: "bequem und schick- gebe deinem Büro einen besonderen Hingucker", preis: 35, kategorie: 1};
let stuhl: Schreibtisch = {img: "stuhl.jpg", artikelname: "Bürostuhl", spruch: "gemütlich gesund- der Stuhl, der dich auf dem weg zum Erfolg begleitet", preis: 70, kategorie: 1};
let tischplatte: Schreibtisch = {img: "tischplatte.webp", artikelname: "Tischplatte Holz", spruch: "Holzig schön- Die Platte für die Beine", preis: 40 , kategorie: 1};
let regal: Schreibtisch = {img: "regalweiß.webp", artikelname: "weißes Regal", spruch: "immer schön- ein weißes Regal braucht doch wirklich jeder", preis: 9.99, kategorie: 1};
let kommode: Schreibtisch = {img: "kommode.webp", artikelname: "Hochglanz Kommode", spruch: "gib der Wohnung einen Kick- glänzt und funkelt", preis: 70, kategorie: 1};
let posterset: Schreibtisch = {img: "posterset.png", artikelname: "Poster- set", spruch: "belebend schön- gebe der Wand ihren Charakter", preis: 35, kategorie: 1};
let lampe: Schreibtisch = {img: "Lampeneu.jfif", artikelname: "Tischlampe in Holzoptik", spruch: "leuchte hell- genau das tut Sie für dich", preis: 15 , kategorie: 1};
let blumentopf: Schreibtisch = {img: "blumentopf.jpg", artikelname: "Blumentopf set", spruch: "Schlicht weiß- Bring die Weisheit ins Büro", preis: 10, kategorie: 1};
let topfset: Schreibtisch = {img: "topfset.jfif", artikelname: "Topf-set", spruch: "schlicht und doch besonders- gib der Pflanze ihr Zuhause", preis: 30 , kategorie: 1};

let schreibtischartikel: Schreibtisch[] = [tischbeine, holzhocker, stuhl, tischplatte, regal, kommode, posterset, lampe, blumentopf, topfset];

//wohnzimmerartikel
for (let index: number = 0; index < wohnzimmerartikel.length; index++) {
    //DIV
    if (wohnzimmerartikel[index].kategorie == 0) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("artikel0")?.appendChild(newDiv);
    }
    if (wohnzimmerartikel[index].kategorie == 1) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div1" + index;
        document.getElementById("artikel1")?.appendChild(newDiv);
        }
    //Fotos 
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = wohnzimmerartikel[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = wohnzimmerartikel[index]. artikelname;
    document.getElementById("div1" + index)?.appendChild(artikelname);

    //spruch
    let spruch: HTMLParagraphElement = document.createElement("p");
    spruch.innerHTML = wohnzimmerartikel[index].spruch;
    document.getElementById("div1" + index)?.appendChild(spruch);

    //Preis
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = wohnzimmerartikel[index].preis + "€";
    document.getElementById("div1" + index)?.appendChild(price);

    //In den Warenkorb
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div" + index)?.appendChild(kaufen);
    kaufen.addEventListener("klick", handleWarenkorb);
    kaufen.setAttribute("preis", wohnzimmerartikel[index].preis.toString());
}
//Schreibtischartikel
for (let index: number = 0; index < schreibtischartikel.length; index++) {
    //DIV
    if (schreibtischartikel[index].kategorie == 0) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("artikel0")?.appendChild(newDiv);
    }
    if (schreibtischartikel[index].kategorie == 1) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div1" + index;
        document.getElementById("artikel1")?.appendChild(newDiv);
        }
    //Fotos 
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = schreibtischartikel[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = schreibtischartikel[index]. artikelname;
    document.getElementById("div1" + index)?.appendChild(artikelname);

    //spruch
    let spruch: HTMLParagraphElement = document.createElement("p");
    spruch.innerHTML = schreibtischartikel[index].spruch;
    document.getElementById("div1" + index)?.appendChild(spruch);

    //Preis
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = schreibtischartikel[index].preis + "€";
    document.getElementById("div1" + index)?.appendChild(price);

    //In den Warenkorb
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div" + index)?.appendChild(kaufen);
    kaufen.addEventListener("klick", handleWarenkorb);
    kaufen.setAttribute("preis", schreibtischartikel[index].preis.toString());
}
//Aufgabe 06
let summe: number = 0;
let zahl: number = 0;
let artikelzähler: number = 0;
let warenkorbblase: HTMLDivElement = document.createElement("div");

function handleWarenkorb(_event: Event): void {
 if ( artikelzähler >= 0) {
     document.getElementById("warenkorbzähler")?.appendChild(warenkorbblase);
} 
 artikelzähler++;
 warenkorbblase.innerHTML = artikelzähler + "";

 if ((<HTMLDivElement>_event.currentTarget)?.getAttribute("preis")) {
    summe = zahl + parseInt((<HTMLDivElement>_event.currentTarget)?.getAttribute("preis")!);
    zahl = summe;
}
 console.log(summe.toFixed(0));
}
//Aufgabe 06-1

let xWohnzimmerartikel: HTMLAnchorElement = document.createElement("a");
xWohnzimmerartikel.id = "Wohnzimmer";
xWohnzimmerartikel.innerHTML = "Wohnzimmerartikel";
xWohnzimmerartikel.addEventListener("klick", handleKategorie);
document.getElementById("wohnzimmerartikel")?.appendChild(xWohnzimmerartikel);

let xSchreibtischartikel: HTMLAnchorElement = document.createElement("a");
xSchreibtischartikel.id = "schreibtisch";
xSchreibtischartikel.innerHTML = "schreibtisch";
xSchreibtischartikel.addEventListener("klick", handleKategorie);
document.getElementById("schreibtisch")?.appendChild(xSchreibtischartikel);

function handleKategorie(_event: Event): void {

    if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "Wohnzimmer") {
        (<HTMLDivElement>document.getElementById("Wohnzimmerartikel")).style.display = "none";
        (<HTMLDivElement>document.getElementById("schreibtisch")).style.display = "block";
    } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "schreibtisch") {
        (<HTMLDivElement>document.getElementById("schreibtisch")).style.display = "none";
        (<HTMLDivElement>document.getElementById("Wohnzimmerartikel")).style.display = "block";
    }
}
}
