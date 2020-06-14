namespace aufgabe07 {
    export interface Wohnzimmer {
            img: string;
            artikelname: string;
            spruch: string;
            preis: number;
            kategorie: number;
    }
    export let wohnzimmer: Wohnzimmer[];
    loadWohnzimmer("daten.json");

    async function loadWohnzimmer(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        wohnzimmer = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
}
