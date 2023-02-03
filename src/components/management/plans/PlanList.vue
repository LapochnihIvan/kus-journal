<script setup>

import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import router from "@/router";

const props = defineProps(["filter_by"])
const emit = defineEmits(["setPlan"])

const plans = ref([])

axios.get(URL + "/get/all/plan").then((response) => {
  plans.value = response.data.plans.sort((el1, el2)=>{
    if (el1.name>el2.name){
      return 1
    }else{
      return -1
    }
  })
  plans.value.forEach((plan)=>{
    plan.to_delete = false
  })
})

const FilteredPlan = computed(() => {
  return plans.value.filter((plan) => {
    return plan.name.toLowerCase().includes(props.filter_by.toLowerCase()) || plan.subject.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})

const Delete = ()=>{
  let id = []
  plans.value.forEach(element=>{element.to_delete?id.push(element.id):''})
  axios({
    method: "POST",
    url: URL+'/drop_plans',
    data:{
      plans: id
    }
  }).then((response)=>{
    router.go()
  })
}


</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Предмет</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%"><button class="btn btn-danger btn-sm" @click="Delete">Удалить</button></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="plan in FilteredPlan">
      <td>{{ plan.name }}</td>
      <td>{{ plan.subject }}</td>

      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('setPlan', plan)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td>
        <input type="checkbox" class="form-check-input" v-model="plan.to_delete">
      </td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>