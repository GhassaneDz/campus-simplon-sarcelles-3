<template>
    <div class="square" :class="{active: isActive}"
    @click="listenClicks" @mouseenter="listenMouseEnter">
        {{ _title }} by {{ _author }}<br>
        j'ai été clické {{ clickCount }} fois
    </div>
</template>
<script>
export default {
    computed: {
        _author() {
            return this.author || "Gui";
        },
        _title() {
            return this.title || "Default title";
        }
    },
    data() {
        return {
            isActive: false,
            clickCount: 0
        }
    },
    methods: {
        listenClicks() {
            this.isActive = !this.isActive;
            this.clickCount += 1;
            if (this.clickCount > 5) this.$emit("aLotOfClicks", this.clickCount);
        },
        listenMouseEnter() {
            console.log("mouse enter !!!");
        }
    },
    props: ["title", "author"]
}
</script>
<style lang="scss" scoped>
.square {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 120px;
    width: 120px;
    border: 2px solid;
    padding: 20px;
}
.square.active {
    background: dodgerblue;
}
</style>
