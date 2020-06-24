"use strict";
var A08;
(function (A08) {
    let formData;
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", buttonHandler);
    //Hängt Formulardaten an die URL
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://sarenkahasanewapp.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function buttonHandler() {
        getAntwort(await addToURL());
    }
    //Holt sich Antwort vom Server
    async function getAntwort(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=script.js.map