"use strict";
var A08;
(function (A08) {
    let submitBut = document.getElementById("submitBut");
    submitBut.addEventListener("click", communicate);
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://sarenkahasanewapp.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=script.js.map