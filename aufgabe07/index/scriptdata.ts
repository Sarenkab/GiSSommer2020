namespace aufgabe07 {
    export interface Wohnzimmer {
            img: string;
            artikelname: string;
            spruch: string;
            preis: number;
            kategorie: number;
    }
    export let wohnzimmer: Wohnzimmer[];
    // loadWohnzimmer("http://127.0.0.1:5500/aufgabe07/daten.json");
    loadWohnzimmer("https://sarenkab.github.io/GiSSommer2020/aufgabe07/daten.json");

    async function loadWohnzimmer(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        wohnzimmer = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
}
