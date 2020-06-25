namespace Aufgabe09 {
    let formData: FormData;
    
    let actionHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("html");
    actionHTML.addEventListener("click", handleHTML);

    let actionJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    actionJSON.addEventListener("click", handleJSON);

    async function handleHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let urlServer: string = "https://sarenkahasanewapp.herokuapp.com";
        urlServer += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlServer += "?" + query.toString();

        let response: Response = await fetch(urlServer);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    
    async function handleJSON(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let urlServer: string = "https://sarenkahasanewapp.herokuapp.com";
        urlServer += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlServer += "?" + query.toString();

        let response: Response = await fetch(urlServer);
        let responseText: string = await response.json();        
        console.log(responseText);
    }
}