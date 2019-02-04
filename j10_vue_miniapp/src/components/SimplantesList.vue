<template>
  <table id="simplantes">
      <thead>
          <tr>
              <th v-for="(prop, p) in simplantesProps" :key="p"> {{prop}} </th>
          </tr>
      </thead>
    <tbody>
        <tr v-for="(simplante, n) in simplantes" :key="n">
            <td v-for="(prop, p) in simplante" :key="p"> {{ prop }} </td>
        </tr>
    </tbody> 
  </table>
</template>
<script>
import axios from "axios";
const URL = "https://simplante.cfapps.io/simplante";
export default {
  mounted() {
    this.getSimplantes();
  },
  data() {
    return { simplantes: [] };
  },
  computed: {
      simplantesProps() {
        return this.simplantes[0] ? Object.keys(this.simplantes[0]): [];
      }
  },
  methods: {
      getSimplantes() {
          return axios.get(URL).then(response => {
              this.simplantes = response.data;
          }).catch(error => {
              console.error(error);
          })
      }
  }

};
</script>

<style lang="scss" scoped>
#simplantes {
    border-collapse: collapse;
    td, th {
        border: 1px solid;
        padding: 10px;
    }
}
</style>
