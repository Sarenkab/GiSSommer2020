"use strict";
var aufgabe07;
(function (aufgabe07) {
    // loadWohnzimmer("http://127.0.0.1:5500/aufgabe07/daten.json");
    loadWohnzimmer("https://sarenkab.github.io/GiSSommer2020/aufgabe07/daten.json");
    async function loadWohnzimmer(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        aufgabe07.wohnzimmer = await JSON.parse(JSON.stringify(jsonArray));
        aufgabe07.createArtikel();
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=scriptdata.js.map