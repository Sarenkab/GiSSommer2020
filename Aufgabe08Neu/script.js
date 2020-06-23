"use strict";
var A08;
(function (A08) {
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
        getCommunicate(await addToURL());
    }
    //Serverantwort
    async function getCommunicate(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=script.js.map