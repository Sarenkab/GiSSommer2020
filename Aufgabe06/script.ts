namespace Aufgabe06 {

    interface Wohnzimmer {
        img: string;
        artikelname: string;
        spruch: string;
        preis: number;
        kategorie: number;
    }
    
    //wohnzimmer
    let hängetopf: Wohnzimmer = {img: "Hängetopf.jpg", artikelname: "Hängetopf", spruch: "Hoch hinauf, lass die Pflanzen fliegen", preis: 9.99, kategorie: 0 };
    let hohetöpfe: Wohnzimmer = {img: "hohetöpfe.jfif", artikelname: "Hohe Metalltöpfe", spruch: "Hoch höher- der Topf bringt neue Sichten", preis: 9.99, kategorie: 0};
    let kerzenständer: Wohnzimmer = {img: "Kerzenständer.jfif", artikelname: "Kerzenständer", spruch: "Feuer und Flamme- Lass die Wohnung leuchten", preis: 7.99, kategorie: 0};
    let und: Wohnzimmer = { img: "und.png", artikelname: "Deko &", spruch: "Und und- Lass es Leben", preis: 3.00 , kategorie: 0};
    let wanduhr: Wohnzimmer = { img: "Wanduhr.jpg", artikelname: "Wanduhr", spruch: "TikTak- Gönn dir den Sound ", preis: 8.99 , kategorie: 0};
    let beistelltisch: Wohnzimmer = { img: "beistelltisch.jfif", artikelname: "Beistelltisch", spruch: "Klein aber Fein- Es trägt auch deinen Wein", preis: 15.00, kategorie: 0}; 
    let aufbewahrungstisch: Wohnzimmer = { img: "Aufbewahrungstisch.webp", artikelname: "Tisch mit Aufbewahrungsfunktion", spruch: "Stauraum macht Sinn", preis: 25.00, kategorie: 1};
    let sofa: Wohnzimmer = {img: "sofafürWohnzimmer.jpg", artikelname: "Sofa", spruch: "gemütlich groß- entspann dich mal wieder so richtig", preis: 259.00, kategorie: 1};
    let gelbersessel: Wohnzimmer = {img: "gelbersessel.jfif", artikelname: "Gelber Sessel", spruch: "Setz dich- es ist vorzüglich", preis: 158.00, kategorie: 1};
    let bookcase: Wohnzimmer = {img: "bookcase.webp", artikelname: "Bookcase", spruch: "Nicht nur ein Schrank- es erzählt Geschichte", preis: 80.00, kategorie: 1};
    let teppich: Wohnzimmer = {img: "teppich.webp", artikelname: "Teppich kariert", spruch: "Fabren und Formen - lass es dir nicht nehmen es gemütlich zu haben", preis: 99.99, kategorie: 1};
    let poster: Wohnzimmer = {img: "postercoco.jpg", artikelname: "CoCo Poster", spruch: "Auch die Wand steht auf Marken", preis: 7.00, kategorie: 1};
    let posterset1: Wohnzimmer = {img: "posterset1.jpg", artikelname: "Poster Set", spruch: "Lass die Wand strahlen", preis: 24.95, kategorie: 1};
    
    let wohnzimmer: Wohnzimmer[] = [hängetopf, hohetöpfe, kerzenständer, und, wanduhr, beistelltisch, aufbewahrungstisch, sofa, gelbersessel, bookcase, teppich, poster, posterset1];
    
    for (let i: number = 0; i < wohnzimmer.length; i++) {
        //DIV
        if (wohnzimmer[i].kategorie == 0) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("artikel0")?.appendChild(newDiv);
        }
        if (wohnzimmer[i].kategorie == 1) {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("artikel1")?.appendChild(newDiv);
            }
        //Fotos 
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = wohnzimmer[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);
    
        //artikelname
        let artikelname: HTMLParagraphElement = document.createElement("p");
        artikelname.innerHTML = wohnzimmer[i]. artikelname;
        document.getElementById("div" + i)?.appendChild(artikelname);
    
        //spruch
        let spruch: HTMLParagraphElement = document.createElement("p");
        spruch.innerHTML = wohnzimmer[i].spruch;
        document.getElementById("div" + i)?.appendChild(spruch);
    
        //Preis
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = wohnzimmer[i].preis + "€";
        document.getElementById("div" + i)?.appendChild(price);
    
        //In den Warenkorb
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("div" + i)?.appendChild(kaufen);
        kaufen.addEventListener("click", handleWarenkorb);
        kaufen.setAttribute("preis", wohnzimmer[i].preis.toString());
    

    }
    //Aufgabe 06
    let summe: number = 0;
    let zahl: number = 0;
    let produktzaehler: number = 0;
    let warenkorbblase: HTMLDivElement = document.createElement("div");
    
    function handleWarenkorb(_event: Event): void {
     if (produktzaehler >= 0) {
         document.getElementById("warenkorbzaehler")?.appendChild(warenkorbblase);
    } 
     produktzaehler++;
     warenkorbblase.innerHTML = produktzaehler + "";
    
     if ((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
        summe = zahl + parseInt((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
        zahl = summe;
    }
     console.log(summe.toFixed(0));
    }
    //Aufgabe 06-2
    let alles: HTMLAnchorElement = document.createElement("a");
    alles.id = "alleArtikel";
    alles.innerHTML = "Alle wohnzimmer";
    alles.addEventListener("click", handleKategorie);
    document.getElementById("allesbutton")?.appendChild(alles);

    let dekosachen: HTMLAnchorElement = document.createElement("a");
    dekosachen.id = "wohnartikel";
    dekosachen.innerHTML = "Wohnartikel";
    dekosachen.addEventListener("click", handleKategorie);
    document.getElementById("Wohnzimmerbutton")?.appendChild(dekosachen);
    
    let schreibtischsachen: HTMLAnchorElement = document.createElement("a");
    schreibtischsachen.id = "büroartikel";
    schreibtischsachen.innerHTML = "Büroartikel";
    schreibtischsachen.addEventListener("click", handleKategorie);
    document.getElementById("schreibtischbutton")?.appendChild(schreibtischsachen);
    
    function handleKategorie(_event: Event): void {
       
     //Alles  
        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "alleArtikel") {
            (<HTMLDivElement>document.getElementById("artikel0")).style.display = "block";
            (<HTMLDivElement>document.getElementById("artikel1")).style.display = "block";
        
     //Wohnzimmer   
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "wohnartikel") {
            (<HTMLDivElement>document.getElementById("artikel1")).style.display = "none";
            (<HTMLDivElement>document.getElementById("artikel0")).style.display = "block";
        
     //Schreibtisch   
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "büroartikel") {
            (<HTMLDivElement>document.getElementById("artikel0")).style.display = "none";
            (<HTMLDivElement>document.getElementById("artikel1")).style.display = "block";
        }
    }
    }
    