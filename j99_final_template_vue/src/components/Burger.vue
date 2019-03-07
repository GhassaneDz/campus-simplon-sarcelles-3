<template>
    <!-- <i id="burger" class="fas fa-bars fa-lg" :class="{'is-active': isActive}" 
    @click="isActive = !isActive"></i> -->
    <i id="burger" class="fas fa-bars fa-lg" :class="{'is-active': isActive}" 
    @click="$store.commit('appEvents/toggleNavMobile')"></i>
</template>

<script>
export default {
    // data() {
    //     return {
    //         isActive: false
    //     }
    // },
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
