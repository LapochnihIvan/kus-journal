<script setup>
import {computed, ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";

const props = defineProps(["filter_by"])
const emit = defineEmits(["openModal"])

const grades = ref([])
const users = ref([])

const GetPriority = (name)=>{
  if (!(name[1] === '1' || name[1] === '0')){
    name = '0'+name
  }
  return name
}



axios.get(URL + '/all_users').then((response) => {
  users.value = response.data.users;
})


axios.get(URL + '/all_grades').then((response) => {
  grades.value = response.data.grades
  grades.value.sort((f, s) => {
    if (GetPriority(f.name) > GetPriority(s.name)) {
      return 1
    }else{
      return -1
    }

  })
  for (let grade of grades.value){
    grade.head = users.value.filter((user)=>{return user.id === grade.head})[0]
  }
})


const FilteredGrades = computed(() => {


  return grades.value.filter((grade)=>{
    return grade.name.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})
</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Классный руководитель</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%">Удалить</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="grade in FilteredGrades">
      <td>{{ grade.name}}</td>
      <td>{{ grade.head.name }} {{grade.head.surname}}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('openModal', grade)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td></td>
    </tr>

    </tbody>
  </table>
</template>


<style scoped>

</style>