<script setup>

import {computed, ref, watch} from "vue";
import {URL} from "@/utils/config";
import axios from "axios";

const emit = defineEmits(["openModal"])
const props = defineProps(["filter_by"])

const journals = ref([])
const grades = ref([])
const groups = ref([])
const users = ref([])


axios.get(URL + '/all_journals_simple/' + JSON.parse(localStorage.getItem('user')).id).then(response => {
  journals.value = response.data.journals
})


const Delete = () => {

}

const FilteredJournals = computed(() => {
  return journals.value.filter((journal) => {
    return journal.planName.toLowerCase().includes(props.filter_by.toLowerCase()) ||
        journal.group_id.name.toLowerCase().includes(props.filter_by.toLowerCase()) ||
        journal.teacher_id.name.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})
</script>


<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Учебный план</th>
      <th>Группа/Класс</th>
      <th>Учитель</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%">
        <button class="btn btn-danger btn-sm" @click="Delete">Удалить</button>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="journal in FilteredJournals">
      <td>{{ journal.planName }}</td>
      <td>{{ journal.group_id.name }}</td>
      <td>{{ journal.teacher_id.name }} {{ journal.teacher_id.surname }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('openModal', journal)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td><input type="checkbox" class="form-check-input" v-model="journal.to_delete"></td>
    </tr>

    </tbody>
  </table>
</template>


<style scoped>

</style>