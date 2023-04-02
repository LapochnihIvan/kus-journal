<script setup>
import {computed, ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config"
import moment from "moment";

const competitions = ref()

axios.get(URL+"/get/if/user_competition[competition_id[id;name;start_time]]/user_id="+JSON.parse(localStorage.getItem("user")).id).then((response)=>{
  competitions.value = response.data;
  competitions.value.user_competitions.forEach((el)=>{
    let true_date = new Date()
    let date = el.competition.start_time.split(' ')[0]
    true_date.setFullYear(date.split('-')[0], date.split('-')[1], date.split('-')[2])
    let time = el.competition.start_time.split(' ')[1]
    true_date.setHours(time.split(':')[0])
    true_date.setMinutes(time.split(':')[1])
    true_date.setSeconds(time.split(':')[2])
    el.competition.start_time = true_date
  })
})

const now_time = computed(()=>{
  return new Date()
})
const compare_time = (time)=>{
  const c = new Date()
  return c.getHours()>=time.getHours() && c.getDate()>=time.getDate()
}
</script>

<template>
<div class=" d-flex justify-content-center align-items-center" style="height: 100%">
  <div class="card m-2" v-for="competition in competitions.user_competitions" v-if="competitions">
    <div class="card-body m-5 text-center">
      <h5 class="card-title">{{ competition.competition.name }}</h5>
      <router-link class="btn btn-outline-primary" :to="{name: 'task_list', params:{'c_id': competition.competition.id}}" v-if="compare_time(competition.competition.start_time)">Участвовать</router-link>
      <a class="btn btn-outline-secondary" v-else>Соревнование закрыто</a>
    </div>
  </div>
</div>
</template>


<style scoped>

</style>