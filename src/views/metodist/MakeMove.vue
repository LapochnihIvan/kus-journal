<script setup lang="ts">
import {Journal} from "../../../types"
import {ref} from "vue";
import axios from "axios";
import {URL} from "../../utils/config.js"


const journals = ref<Journal[]>()
axios.get(URL + '/all_journals_simple/' + JSON.parse(localStorage.getItem('user')).id).then((response)=>{
  journals.value = response.data.journals
})

</script>

<template>
<p v-for="journal in journals">{{journal}}</p>
</template>


<style scoped>

</style>