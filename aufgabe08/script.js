"use strict";
var A8;
(function (A8) {
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
        getResponse(await addToURL());
    }
    //Holt sich Antwort vom Server
    async function getResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        console.log(resp2);
    }
})(A8 || (A8 = {}));
//# sourceMappingURL=script.js.map