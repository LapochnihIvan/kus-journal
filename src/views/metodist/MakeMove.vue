<script setup>
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config.js"

const journals = ref()
axios.get(URL + '/get/all/journal_table[name;id;schedule]').then((response)=>{
  journals.value = response.data.journal_tables
})

</script>

<template>
<p v-for="journal in journals">{{journal}}</p>
</template>


<style scoped>

</style>