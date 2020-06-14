"use strict";
var aufgabe07;
(function (aufgabe07) {
    let length = parseInt(localStorage.getItem("anzahlvonArt"));
    let preis = 0;
    let gesamtpreis = document.createElement("p");
    for (let index = 0; index <= length - 1; index++) {
        //Div 
        let newDiv = document.createElement("div");
        document.getElementById("warenkorbID").appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("wohnzimmer_bild" + index);
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        //Artikelname
        let artikelname = document.createElement("p");
        artikelname.innerHTML = localStorage.getItem("wohnzimmer_artikelname" + index);
        newDiv.appendChild(artikelname);
        console.log(artikelname);
        //spruch
        let spruch = document.createElement("p");
        spruch.innerHTML = localStorage.getItem("wohnzimmer_spruch" + index);
        newDiv.appendChild(spruch);
        console.log(spruch);
        //preis
        let price = document.createElement("p");
        price.innerHTML = localStorage.getItem("wohnzimmer_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);
        //button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Aus dem Warenkorb entfernen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleLöschen);
        //Gesamtpreis berechnen
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById("wertvonWa")?.appendChild(gesamtpreis);
    }
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", handleLöschAlles);
    function handleLöschen(_event) {
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
    function handleLöschAlles(_event) {
        for (let index = 0; index <= length; index++) {
            document.getElementById("div" + index).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map