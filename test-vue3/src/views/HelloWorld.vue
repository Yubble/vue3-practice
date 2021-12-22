<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-15 21:41:18
-->
<template>
  <button @click='add'>{{ count }}</button>
  <p>双倍的count：{{ twiceTheCounter }}</p>
</template>

<script>
import baseTest from '../components/baseTest'
export default {
  setup() {
    const baseTestCon = baseTest()
    console.log('baseTestCon is ', baseTestCon)
    return baseTestCon
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
