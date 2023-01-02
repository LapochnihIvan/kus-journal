<script setup>
import axios from "axios";
import {ref} from "vue";
import {URL} from "@/utils/config";
import SelectionBlock from "@/components/journal/SelectionBlock.vue";

const journals = ref([])
const selected = ref();
let user = JSON.parse(localStorage.getItem("user"))

axios.get(URL+"/journal/"+user.id, {
  headers: {
    token: user.token
  }
}).then((response)=>{
  journals.value = response.data["journals"]
})
</script>


<template>

  <SelectionBlock :journals="journals" @set-journal="(journal)=>{selected = journal}"/>
  {{ selected }}
</template>

<style scoped>

</style>