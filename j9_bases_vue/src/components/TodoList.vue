<template>
  <div>
    <h1 class="title">Mini TP TODOLIST</h1>
    <p>Ajouter un UL et un BUTTON.
      <br>Au click, afficher chaque contenu dans un LI, sauf si le contenu de l'input est vide.
      <br>Remettre la valeur de l'input à vide à chaque ajout de LI.
      <br>Bien choisir la structure de données à ajouter à data()...
      <br>Les LI pairs ont un background différent des LI impairs.
      <br>
    </p>
    <form @submit="addTodo">
      <input type="text" v-model="newTodo" :class="{warning: !newTodo.length}">
      <button>ok</button>
    </form>
    <h2 class="title">My toto list</h2>
    <p v-if="!todos.length">
      <b>You have nothing to do... yet !!!</b>
    </p>
    <ul v-else id="todos">
      <li v-for="(todo, n) in todos" :key="n" class="item" :class="{even: n % 2 === 0}">
        <span>{{ n + 1 }}</span>
        <span>{{todo}}</span>
        <button @click="removeTodo(n)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault(); // empêche rechargement page au submit du form
      if (!this.newTodo) return; // si input vide, rien à faire, return undefined
      this.todos.push(this.newTodo); // ajout du nouveau todo à la liste de todos
      this.newTodo = ""; // réinitialisation de la valeur de l'input
    },
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.warning {
  background: #ffc107;
}
.even {
  background: silver;
}
#todos {
  max-width: 540px;
  margin: 60px auto 120px;
}
.item {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
}
button {
    outline: none;
}
</style>
