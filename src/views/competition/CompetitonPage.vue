<script setup>
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config"

const competitions = ref()

axios.get(URL+"/get/if/user_competition[competition_id[id;name]]/user_id="+JSON.parse(localStorage.getItem("user")).id).then((response)=>{
  competitions.value = response.data;
})

</script>

<template>
<div class=" d-flex justify-content-center align-items-center" style="height: 100%">
  <div class="card m-2" v-for="competition in competitions.user_competitions" v-if="competitions">
    <div class="card-body m-5 text-center">
      <h5 class="card-title">{{ competition.competition.name }}</h5>
      <router-link class="btn btn-outline-primary" :to="{name: 'task_list', params:{'c_id': competition.id}}">Участвовать</router-link>
    </div>
  </div>
</div>
</template>


<style scoped>

</style>