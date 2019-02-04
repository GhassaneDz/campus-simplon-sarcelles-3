// console.log(this); // window

const app = (function app() {
  "use strict";
  console.log(this); // undefined (mode strict protège l'écrite sur window)

  const eventHandler = function eventHandler(evt) {
    console.log("this => @eventHandler", this);
    console.log(evt);
  };

  const ajouterHello = function ajouterHello() {
    console.log("this => @ajouterHello", this);
    const textIntro = document.getElementById("text_intro"); // je cible le tag parent
    const el = document.createElement("span"); // je créé un span
    el.textContent = "hello world "; // j'insère un textNode dans le span
    textIntro.appendChild(el); // j'insère le span dans la cible !!!
  };

  const manipDOM = function manipDOM(items) {
    const textIntro = document.getElementById("text_intro");
    const el = document.createElement("span");
    //el.classList.add("important");
    el.className = "important italic orange";
    el.id = "mon_span_important";
    el.textContent = "je suis le span et je contiens du contenu inline....";
    console.log("span créé ?", el);
    textIntro.appendChild(el);
  };

  const parcourirItems = function parcourirItems(items) {
    // boucles en JS => for / while / doWhile / forEach / for...in / for...of
    console.log("items de liste....", items);

    for (let i = 0; i < items.length; i += 1) {
      console.log(items[i]);
    }
    console.log("----- fin de boucle for ----");

    var count = 0;
    while (count < items.length) {
      console.log(items[count]);
      count += 1;
    }
    console.log("----- fin de boucle while ----");

    items.forEach(function(item, index) {
      console.log(item, index);
    });

    // items.forEach((item, index) => {
    //     console.log(item, index);
    // });

    console.log("----- fin de boucle forEach ----");
  };

  const revisionsDOM = function revisionsDOM() {
    const titleMain = document.getElementById("title_main"); // return null || obj
    const titleMainAlias = document.querySelector("#title_main"); // return null || obj
    const listItems = document.querySelectorAll("#liste1 li"); // nodeList [0 || n]
    const btn = document.getElementById("action_hello"); // nodeList [0 || n]
    // document.getElementsByClassName // fonctionne quasi comme selectorAll(class) => HTMLCollection (live)
    // document.getElementsByTagName // fonctionne quasi comme selectorAll(tag) => HTMLCollection (live)
    // console.log("égalité ?", titleMain === titleMainAlias);
    // console.log("titleMain =>", titleMain);
    // console.log("titleMainAlias => ", titleMainAlias);
    // console.log("c => ", listItems);
    console.log("btn => ", btn);
    parcourirItems(listItems);
    // btn.addEventListener("click", ajouterHello);
    btn.onclick = ajouterHello; // raccourçi pour la ligne 
    titleMain.addEventListener("mouseenter", eventHandler);
  };

  const start = function start(evt) {
    console.log("this @start => ", this);
    console.log("DOM is ready to rock JS !", evt);
    this.truc = "chose"; // le mode strict ne protège pas de tout ....
    revisionsDOM();
    manipDOM();
  };

  window.addEventListener("DOMContentLoaded", start);
})();
