/*jslint browser: true*/
/*global alert, confirm, console, prompt*/

const $ = function $() {

}

const app = (function app() {
  // IIFE ; )
  "use strict";

  const dom = {};
  /* 
    un objet utilisé pour contenir la 
    référence vers tous nos éléments d'UI
  */

  const play = function play() {
    dom.btnPlay.classList.add("is-active");
    dom.btnPause.classList.remove("is-active");
    dom.video.play();
  };

  const pause = function pause() {
    dom.btnPause.classList.add("is-active");
    dom.btnPlay.classList.remove("is-active");
    dom.video.pause();
  };

  const start = function start() {
    dom.player = document.querySelector(".player-custom");
    dom.video = dom.player.querySelector(".video");
    dom.btnPlay = dom.player.querySelector(".start");
    dom.btnPause = dom.player.querySelector(".pause");
    console.log(dom);
    dom.btnPlay.addEventListener("click", play);
    /* event pour écouter les clicks sur le btn start */
    dom.btnPause.addEventListener("click", pause);
    /* event pour écouter les clicks sur le btn pause */
  };
  
  window.addEventListener("load", start);
  // window.onload = start;
  window.addEventListener("DOMContentLoaded", start);
  /* event pour attendre le chargement complet de l'arbre HTML */
  /* window.addEventListener("load", start); */
  /* un peu plus long et utilisable une SEULE ET UNIQUE fois */
}());
