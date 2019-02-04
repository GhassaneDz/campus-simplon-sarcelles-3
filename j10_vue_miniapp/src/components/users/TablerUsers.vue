<template>
    <table class="tabler">
        <thead v-if="users.length">
            <tr>
                <th v-for="(value, key) in users[0]" :key="key">{{ key }}</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!users.length"><td>no user yet</td></tr>
            <tr v-else v-for="user in users" :key="user.id"> 
                <td v-for="(value, key) in user" :key="user.id+key">
                    {{ value }}
                </td>
                <td>
                    <router-link tag="button" :to="'update-user/' + user.id">e</router-link>
                </td>
                <td>
                    <button @click="$store.commit('deleteUser', user.id)">X</button>
                </td>
            </tr>
        </tbody>
      
    </table>
</template>
<script>
export default {
    computed: {
        users() {
            return this.$store.getters["users"];
        }
    }
}
</script>

<style>
.tabler, td, th {
    border: 1px solid;
    border-collapse: collapse;
}
td, th {
    padding: 10px;
    text-align: center;
}
</style>
