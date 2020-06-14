namespace aufgabe07 {
    
        
export function createArtikel(): void {
for (let i: number = 0; i < wohnzimmer.length; i++) {
       //DIV
        if (wohnzimmer[i].kategorie == 0) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("artikel0")?.appendChild(newDiv);
        newDiv.setAttribute("index", i.toString());
        }
        if (wohnzimmer[i].kategorie == 1) {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("artikel1")?.appendChild(newDiv);
            newDiv.setAttribute("index", i.toString());
            }
        //Fotos 
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = wohnzimmer[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);
    
        //artikelname
        let artikelname: HTMLParagraphElement = document.createElement("p");
        artikelname.innerHTML = wohnzimmer[i].artikelname;
        document.getElementById("div" + i)?.appendChild(artikelname);
    
        //spruch
        let spruch: HTMLParagraphElement = document.createElement("p");
        spruch.innerHTML = wohnzimmer[i].spruch;
        document.getElementById("div" + i)?.appendChild(spruch);
    
        //Preis
        let price: HTMLElement = document.createElement("p");
        price.innerHTML = wohnzimmer[i].preis + "€";
        document.getElementById("div" + i)?.appendChild(price);
    
        //In den Warenkorb
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("div" + i)?.appendChild(kaufen);
        kaufen.addEventListener("click", handleWarenkorb);
        kaufen.setAttribute("preis", wohnzimmer[i].preis.toString());
    

    }
}

let summe: number = 0;
let zahl: number = 0;
let produktzaehler: number = 0;
let warenkorbblase: HTMLDivElement = document.createElement("div");
    
let artikelDeko: Wohnzimmer[] = [];
export function handleWarenkorb(_event: Event): void {
     
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

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNummer: number = parseInt(indexButton);

        artikelDeko.push(wohnzimmer[indexNummer]);
        localStorage.setItem("wohnzimmer_bild" + (artikelDeko.length - 1), wohnzimmer[indexNummer].img);
        localStorage.setItem("wohnzimmer_artikelname" + (artikelDeko.length - 1), wohnzimmer[indexNummer].artikelname);
        localStorage.setItem("wohnzimmer_spruch" + (artikelDeko.length - 1), wohnzimmer[indexNummer].spruch);
        localStorage.setItem("wohnzimmer_preis" + (artikelDeko.length - 1), wohnzimmer[indexNummer].preis.toString());
        localStorage.setItem("anzahlvonArt", artikelDeko.length.toString());
    }

let alles: HTMLAnchorElement = document.createElement("a");
alles.id = "alleArtikel";
alles.innerHTML = "Alle Wohnartikel";
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
    