namespace aufgabe07 {
    let length: number = parseInt(localStorage.getItem("anzahlvonArt")!);
    let preis: number = 0;
    let gesamtpreis: HTMLParagraphElement = document.createElement("p");

    for (let index: number = 0; index <= length - 1; index++) {

            //Div 
            let newDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementById("warenkorbID")).appendChild(newDiv);
            newDiv.id = "div" + index;
            console.log("div" + index);
            

            //IMG
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("wohnzimmer_bild" + index)!;
            newDiv.appendChild(imgElement);
            console.log(imgElement);

            //Artikelname
            let artikelname: HTMLParagraphElement = document.createElement("p");
            artikelname.innerHTML = localStorage.getItem("wohnzimmer_artikelname" + index)!;
            newDiv.appendChild(artikelname);
            console.log(artikelname);

            //spruch
            let spruch: HTMLParagraphElement = document.createElement("p");
            spruch.innerHTML = localStorage.getItem("wohnzimmer_spruch" + index)!;
            newDiv.appendChild(spruch);
            console.log(spruch);

            //preis
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("wohnzimmer_preis" + index) + "€"!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            console.log(price);

            //button
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Aus dem Warenkorb entfernen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleLöschen);

            //Gesamtpreis berechnen
            preis = preis + parseFloat(price.innerHTML);
            gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
            document.getElementById("wertvonWa")?.appendChild(gesamtpreis);
    }
    let deleteButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("deleteButton"));
    deleteButton.addEventListener("click", handleLöschAlles);


    function handleLöschen(_event: Event): void {
    let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
    preis = preis - parseFloat(preisString);
    gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
    ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }

    function handleLöschAlles(_event: Event): void {
        for (let index: number = 0; index <= length; index++) {
            (<HTMLDivElement>document.getElementById("div" + index)).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }  
}