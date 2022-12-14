<script setup>
import {reactive} from "vue";
import axios from "axios";

const grade = reactive({"students": [{"name": "Error: Can't get names"}]})


axios.get("http://194.87.206.68/grade/1")
    .then(response => {
      console.log(response.data["students"])
      grade.students = response.data["students"]
    })


</script>


<template>
  <div class="border-end">
    some
  </div>
</template>


<style scoped>

</style>