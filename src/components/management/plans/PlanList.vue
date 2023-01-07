<script setup>

import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";

const props = defineProps(["filter_by"])
const emit = defineEmits(["setPlan"])

const plans = ref([])

axios.get(URL + "/all_plans").then((response) => {
  plans.value = response.data.plans
})

const FilteredPlan = computed(() => {
  return plans.value.filter((plan) => {
    return plan.name.toLowerCase().includes(props.filter_by.toLowerCase()) || plan.subject.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})

</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Предмет</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%">Удалить</th>
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
      <td></td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>