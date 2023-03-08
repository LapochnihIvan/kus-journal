<script setup>
import {useStore} from "vuex";
import TasksList from "@/components/tasks/TasksList.vue";
import {URL} from "@/utils/config"
import axios from "axios";
const store = useStore();

axios.get(URL + "/get/all/problem[id;name]").then((response) => {
  store.commit("set_problems_list", response.data.problems)
})

let questions = [
  {
    id: 1,
    title: "Very Interesting Question",
    text: "<h1>Very Important</h1> another",
    type: 0,
    body: {}
  },
  {
    id: 2,
    title: "Another Interesting Question",
    text: "<h3>Very Important</h3>",
    type: 1,
    body: ["One", "Two"]
  }
]
store.commit("set_questions_list", questions)



</script>

<template>
  <div class="py-3 h-100">
    <div class="row h-100">
      <div class="col-2 border-end border-dark-subtle h-100">
        <h4 class="mb-3 px-3 pb-3 border-bottom">Kus.Olimp</h4>
        <TasksList/>
      </div>
      <div class="col-10 h-100">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>