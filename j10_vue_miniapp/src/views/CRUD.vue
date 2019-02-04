<template>
    <div class="page crud">
        <h1 class="title">
            <span>C.R.U.D</span>
            <button class="btn" @click="isIntroVisible = !isIntroVisible">
                {{ isIntroVisible ? 'hide' : 'view' }} intro
            </button>
        </h1>
        <p v-if="isIntroVisible" class="intro">
            Une application simple de type CRUD comprend à minima, pour une entité de BDD, un widget pour créer/updater une instance (de l'entité). Un tableur pour lister chaque instance. Et enfin d'un widget d'action pour supprimer une (ou plusieurs) instance(s).
            <br>
            Avec VueJS, nous allons factoriser le widget CREATE/UPDATE. Utiliser des routes imbriquées pour Update. Récupérer toutes nos données depuis un "store" central.
        </p>
        <nav id="nav_crud" class="nav">
            <ul class="list">
                <router-link class="item clickable" :to="{name: 'viewUsers'}" tag="li">view users</router-link>
                <router-link class="item clickable" :to="{name: 'createUser'}" tag="li">create a new user</router-link>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isIntroVisible: true
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & .btn {
        margin-left: 10px;
    } 
}
</style>
