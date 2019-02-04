<template>
  <div>
    <h1 class="title">"Give me 10%"" Game</h1>
    <button @click="isRuleVisible = !isRuleVisible">view the rules</button>
    <div class="rules" v-if="isRuleVisible">
      <p>Dans ce jeu, une liste d'utilisateurs est proposée.
        <br>Chaque user (accessible via un component User.vue) est un objet possèdant les data suivantes:
      </p>
      <b>
        {
        name: (string),
        lastname: (string),
        money: {
        total: (number),
        transfered: (number)
        }
        }
      </b>
      <hr>
      <h2 class="title">Etape A</h2>
      <p>Afficher les users dans un component UsersList.vue.
        <br>Chaque User est sélectionnable au click (sélection visible en CSS).
        <br>

        Le component UserList conserve la trace des Users sélectionnés.
        <br>Chaque template d'User possède un bouton "donate".
        <br>Au click sur ce bouton, l'User donne 10% de son total à l'User sélectionné.
        <br>Attention, un don ne peut concerner qu'un seul User à la fois !!!.
        <br>Sa propriété transfered est alors mise à jour et incrémentée du montant versé.
      </p>
      <hr>
      <h2 class="title">Etape B</h2>
      <p>Coder un component Company.vue <br>Company n'est pas enfant d'UsersList, mais frère ou cousin :)
        <br>
        La company peut augmenter les $$$ des comptes d'un ou plusieurs User sélectionnés.
      </p>
      <hr>
      <h3 class="title">Conseils</h3>
      <ul>
        <li>A) Utiliser les props + les events custom pour la communication parent&lt;=&gt; enfant &lt;=&gt;parent</li>
        <li>B) Utiliser la technique de "l'event-bus"</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isRuleVisible: false
        }
    }
};
</script>

<style>
.code {
}
</style>
