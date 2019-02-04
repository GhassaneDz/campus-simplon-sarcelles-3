const app = (function() {
    "use strict";

    const url = "http://localhost:9999";
    const dom = {};

    function sendDataToServer(evt) {
        evt.preventDefault();

        const fd = new FormData(document.getElementById("my_form"));
        const payload = {};
        fd.forEach((value, key) => {
          payload[key] = value;
        });

        const xhr = new XMLHttpRequest();

        xhr.open("POST", url + "/data");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function getServerResult(evt) {
            const res = this.response;
            console.log(res);
        };

        xhr.send(JSON.stringify(payload));
    }

    function start() {
        dom.btn = document.getElementById("my_submit");

        dom.btn.onclick = sendDataToServer
    }

    window.addEventListener("DOMContentLoaded", start);
}());