<template>
    <form id="ressource" 
    @submit="$event.preventDefault();postRessource();">
        <label for="name" class="clickable label">ressource name</label>
        <input id="name" class="input" type="text" v-model="ressource.name">
        <label for="date" class="clickable label">date</label>
        <input id="date" class="input" type="date" v-model="ressource.date">
        <label for="content" class="clickable label">content</label>
        <textarea id="content" class="textarea" v-model="ressource.content"></textarea>
        <button class="btn">ok</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            ressource: {
                name: null,
                date: null,
                content: null
            }
        }
    },
    methods: {
        postRessource() {
            console.log("ressource à poster...", this.ressource);
        }
    }
}
</script>

<style scoped lang="scss">
#ressource {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;
  margin: 20px auto 0;
  padding: 10px;
  border: 1px solid;
  border-radius: 0.3rem;
  & .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .label {
    margin: 5px 0;
  }
  & .input {
    height: 32px;
    padding: 3px 0 3px 20px;
    border: 1px solid;
    width: 90%;
    border-radius: 0.3rem;
  }
  & .textarea {
    padding: 3px 0 3px 20px;
    border: 1px solid;
    width: 90%;
    border-radius: 0.3rem;
  }
  & .btn {
    height: 32px;
    max-width: 120px;
    width: 100%;
    outline: none;
    border: 1px solid;
    margin-top: 20px;
    align-self: center;
    border-radius: 0.3rem;
  }
}
</style>
