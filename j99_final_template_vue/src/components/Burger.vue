<template>
    <i id="burger" class="fas fa-lg" 
    :class="{'is-active fa-times': isActive, 'fa-bars': !isActive}" 
    @click="$store.commit('appEvents/toggleNavMobile')"></i>
</template>

<script>
export default {
    computed: {
        isActive() {
            return this.$store.getters["appEvents/navMobileStatus"];
        }
    }
}
</script>

<style scoped lang="scss">
#burger {
    cursor: pointer;
    position: fixed;
    z-index: 12;
    right: 20px;
    top: 32.5px;
    padding: 0;
    color: white;
}
#burger.is-active {
    color: #42b983;
}
@media(min-width:520px) {
    #burger {
        display: none;
    }
}
</style>
