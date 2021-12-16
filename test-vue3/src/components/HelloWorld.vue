<template>
  <button @click='add'>{{ count }}</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      add,
      count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
