"use strict";
var aufgabe07;
(function (aufgabe07) {
    loadWohnzimmer("daten.json");
    async function loadWohnzimmer(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        aufgabe07.wohnzimmer = await JSON.parse(JSON.stringify(jsonArray));
        aufgabe07.createArtikel();
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=scriptdata.js.map