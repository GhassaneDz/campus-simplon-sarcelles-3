(function app() { // IIFE
  "use strict";

  const url =
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=1000&facet=arrondissement";


  const getMyFirstAJAX = function getMyFirstAJAX() {

    const getData = function getData(evt) {
      console.log(typeof evt.target.response); // affiche string
      const res = JSON.parse(evt.target.response); // conversion de la réponse en Objet
      console.log(typeof res, res); // affiche object
      parseList(res.records); // on envoit la liste à func d'affichage
    };

    const xhr = new XMLHttpRequest(); // création object XmlHTTPRequest
    xhr.open("GET", url); // ouvre un canal de communication GET vers URL
    xhr.onload = getData; // EVENT LISTENER on attend le chargement de l'appel AJAX
    xhr.send(); // on envoit l'appel vers le serveur distant
  };

  const start = function() {
    const btn = document.getElementById("get_data_1");
    btn.onclick = getMyFirstAJAX;
  };

  window.addEventListener("DOMContentLoaded", start);
}());
