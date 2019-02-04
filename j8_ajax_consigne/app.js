const app = (function () {
    "use strict";

    const parseList = function parseList(categories) {
        const table = document.getElementById("res");
        table.innerHTML = ""; // remise à vide de la liste
        categories.forEach(category => { // parcours de chaque categorie
            const tr = document.createElement("tr"); // création d'un tr par cat
            tr.setAttribute("data-cat-id", category.id);// attr custom HTML5
            for (let prop in category) {
                const td = document.createElement("td"); // création d'un td par propriété de cat
                td.textContent = category[prop]; // on insère le texte
                tr.appendChild(td); // ajout des td par tr
            }
            table.appendChild(tr); // paf, c'est dans la table !!!
        });
    };

    const getMySecondAJAX = function getMySecondAJAX() {
        return [
            {id: 1, libelle: "mode"},
            {id: 2, libelle: "info"},
            {id: 3, libelle: "culture"},
            {id: 4, libelle: "sport"}
        ]
        // axios.get("http://localhost:8080/fo/categories").then(response => {
        //     parseList(response.data)
        // }).catch(err => {
        //     console.error("baaad things happen =>", err);
        // })
    };

    const start = function () {
        const btn = document.getElementById("get_categories");
        btn.onclick = getMyFirstAJAX;
    };

    window.addEventListener("DOMContentLoaded", start);

}())