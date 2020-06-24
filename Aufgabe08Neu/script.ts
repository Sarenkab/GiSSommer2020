
namespace A08 {

    let formData: FormData;
    let myButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("button"));
    myButton.addEventListener("click", buttonHandler);
    
    //Hängt Formulardaten an die URL
    async function addToURL(): Promise<string> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://sarenkahasanewapp.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function buttonHandler(): Promise<void> {
        getResponse(await addToURL());
    }

    //Holt sich Antwort vom Server
    async function getResponse(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url, { method: "get" });
        let antwort2: string = await antwort.text();
        console.log(antwort2);
    }
}

