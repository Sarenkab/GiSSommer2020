"use strict";
var A08Server;
(function (A08Server) {
    let formData;
    let versand = document.getElementById("button");
    versand.addEventListener("click", buttonHandle);
    //Hängt Formulardaten an die URL
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://sarenkahasanewapp.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function buttonHandle() {
        getResponse(await addToURL());
    }
    //Serverantwort
    async function getResponse(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map