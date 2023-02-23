<script setup>
import {useRoute} from "vue-router";
import {onMounted, onUpdated, ref, watch} from "vue";
import {URL} from "@/utils/config"
import axios from "axios";

const router = useRoute()

const task = ref({})
axios.get(URL + "/problem/" + router.params.id + "/" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
  console.log("srnf")
  task.value = response.data.problem
})
watch(router, () => {
  axios.get(URL + "/problem/" + router.params.id + "/" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
    console.log("srnf")
    task.value = response.data.problem
  })
})


</script>

<template>
  <div class="ps-5">
    <div class="row">
      <div class="col-10">
        <h3 class="my-3">{{ task.name }}</h3>
        <p>{{ task.legend }}</p>
        <h5>Входные данные</h5>
        <p>{{ task.input_format }}</p>
        <h5>Выходные данные</h5>
        <p>{{ task.output_format }}</p>
        <div class="row gx-2 mt-1">
          <div class="col-6 text-secondary fw-light">
            STDIN
          </div>
          <div class="col-6 text-secondary fw-light" >
            STDOUT
          </div>
        </div>
        <div class="row gx-2 mt-1" v-for="example in task.examples">
          <div class="col-6">
            <div class="p-2 " style="background-color: #f8f8f8">{{ example.input }}</div>
          </div>
          <div class="col-6" >
            <div class="p-2 " style="background-color: #f8f8f8">{{ example.output }}</div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-3 d-grid gap-2 me-auto">
            <button type="button" class="btn btn-primary">Послать</button>
          </div>
          <div class="col-3 text-end">
            Лимит времени: {{task.time_limit}} c. <br>
            Лимит памяти: {{task.memory_limit}} MB
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>