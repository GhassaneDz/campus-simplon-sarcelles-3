<template>
    <div class="get-ajax">
        <h1 class="title">liste des cafés parisiens à un euro</h1>
        <ul class="list coffee">
            <li v-for="(cafe, n) in cafes" :key="n"> {{ cafe.fields.adresse }}</li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
    created() { // appelée automatiquement à la création du component GetAJAX.vue
       this.getCafesUnEuros();
    },
    data() {
        return { cafes: null }
    },
    methods: {
        getCafesUnEuros() {
            axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=1000&facet=arrondissement").then(res => {
                this.cafes = res.data.records;
                
            }).catch(err => console.error(err));
        }
    }
}
</script>

<style scoped>
.get-ajax {
    border-bottom: 2px solid;
    padding: 20px;
}
</style>
