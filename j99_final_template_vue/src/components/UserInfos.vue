<template>
  <div id="profile_infos">
    <i class="avatar fa fa-user fa-4x"></i>
    <ul class="list">
        <li>{{user.name}}</li>
        <li>{{user.lastname}}</li>
        <li>{{user.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    beforeCreate() {
        // this.$store.dispatch("")
    },
    computed: {
        user() {
            return this.$store.getters["users/current"];
        }
    }
};
</script>

<style scoped lang="scss">
#profile_infos {
    display: flex;
    align-items: center;
}
.avatar {
    border: 3px solid;
    border-radius: 50%;
    padding: 20px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
}
.list {
    display: flex;
    flex-direction: column;
    list-style: none;;
}
</style>
