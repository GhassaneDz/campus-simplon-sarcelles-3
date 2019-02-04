const app = (function() {
  "use strict";

  const dom = {};

  const byId = id => document.getElementById(id);

  const log = (...args) => {
    if (!args.length) return console.warn("attention, votre log est vide...");
    console.log(args.length > 1 ? args : args[0]);
  };

  const findParentLi = function(ref) {
    var parent = ref;

    while (!parent.classList.contains("item")) {
      parent = parent.parentElement;
    }

    return parent;
  };

  const addTodo = function() {
    const userInput = dom.input.value;

    if (!userInput) alert("saisie vide");
    else {
      const li = document.createElement("li");
      const box = document.createElement("input");
      const widgets = document.createElement("div");
      const move = document.createElement("div");
      const up = document.createElement("i");
      const down = document.createElement("i");

      up.className = "fas fa-caret-up";
      down.className = "fas fa-caret-down";

      box.type = "checkbox";
      box.className = "input";

      move.className = "move-icons";
      move.appendChild(up);
      move.appendChild(down);

      li.className = "item";
      li.textContent = userInput;

      widgets.className = "widgets";
      widgets.appendChild(box);
      widgets.appendChild(move);

      li.appendChild(widgets);

      dom.todos.appendChild(li);

      // ajout des listeners
      up.onclick = e => {
        moveTodo(findParentLi(e.target), "up");
      };
      down.onclick = e => {
        moveTodo(findParentLi(e.target), "down");
      };

      // reset du champs de saisie
      dom.input.value = "";
      dom.input.focus();
    }
  };

  const delTodo = function() {
    const boxes = document.querySelectorAll(".input[type=checkbox]:checked");

    boxes.forEach(box => {
      box.parentElement.remove();
    });
  };

  const moveTodo = function(element, direction) {

    const insertAfter = function(source) {
      var cible = source.nextElementSibling
        ? source.nextElementSibling.nextElementSibling
        : null;
      const parent = source.parentElement;
      if (!cible) {
        cible = null;
      }
      parent.insertBefore(source, cible);
    };

    if (direction === "up") {
      if (!element.previousElementSibling) return;
      const x = dom.todos.insertBefore(element, element.previousElementSibling);
    } else {
      insertAfter(element);
    }
  };

  const start = function() {
    log("ready to rock !!!");
    dom.input = byId("user_input");
    dom.todos = byId("todos");
    dom.addTodo = byId("add_todo");
    dom.delTodo = byId("del_todo");
    log(dom);

    dom.addTodo.onclick = addTodo;
    dom.delTodo.onclick = delTodo;
  };

  window.addEventListener("DOMContentLoaded", start);
})();
