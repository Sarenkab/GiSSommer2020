"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let actionHTML = document.getElementById("html");
    actionHTML.addEventListener("click", handleHTML);
    let actionJSON = document.getElementById("json");
    actionJSON.addEventListener("click", handleJSON);
    async function handleHTML() {
        formData = new FormData(document.forms[0]);
        let urlServer = "https://sarenkahasanewapp.herokuapp.com";
        urlServer += "/html";
        let query = new URLSearchParams(formData);
        urlServer += "?" + query.toString();
        let response = await fetch(urlServer);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function handleJSON() {
        formData = new FormData(document.forms[0]);
        let urlServer = "https://sarenkahasanewapp.herokuapp.com";
        urlServer += "/json";
        let query = new URLSearchParams(formData);
        urlServer += "?" + query.toString();
        let response = await fetch(urlServer);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map