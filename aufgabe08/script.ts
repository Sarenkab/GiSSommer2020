namespace A08Server {

    let formData: FormData;
    let versand: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("button"));
    versand.addEventListener("click", buttonHandle);
    
    //Hängt Formulardaten an die URL
    async function addToURL(): Promise<string> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://sarenkahasanewapp.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function buttonHandle(): Promise<void> {
        getCommunicate(await addToURL());
    }

    //Serverantwort
    async function getCommunicate(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url, { method: "get" });
        let antwort2: string = await antwort.text();
        console.log(antwort2);
    }
}