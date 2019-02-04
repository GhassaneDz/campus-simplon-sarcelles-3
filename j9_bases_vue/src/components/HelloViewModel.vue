<template>
    <div>
        <p>(data says =>) {{ msg }}</p>
        <input type="text" v-model="msg">
        <input type="range" v-model="count">
        <input type="text" v-model="msg">
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "yo people !!!",
            count: 0
        }
    }
}
</script>

<style>

</style>
