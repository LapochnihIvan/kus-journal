<script setup>

import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";

const props = defineProps(["filter_by"])
const emit = defineEmits(["openModal"])

const users = ref([])

axios.get(URL + '/all_users').then((response) => {
  users.value = response.data.users.filter((user) => {
    return (!user.role.includes("admin") && !user.role.includes("director")) || (JSON.parse(localStorage.getItem("user")).role.includes("admin"))
  })
})
const GetRole = (raw)=>{
  const roles = {
    "student": "Обучающийся",
    "teacher": "Педагог",
    "grade_head": "Кл. руководитель",
    "add_user": "Упр. юзерами",
    "add_journal": "Упр. журналом",
    "add_plan": "Упр. планами"
  }
  let ans = ""
  for (let role of raw){
    ans+=roles[role]+" "
  }
  return ans
}

</script>

<template>
  <table class="table table-striped text-center">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Роль</th>
        <th>Логин</th>
        <th style="width: 10%">Изменить</th>
        <th style="width: 10%">Удалить</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="user in users">
      <td>{{user.surname}} {{user.name}}</td>
      <td>{{GetRole(user.role)}}</td>
      <td>{{user.login}}</td>
      <td><button class="btn btn-primary btn-sm" @click="$emit('openModal', user)"><i class="bi bi-pencil-fill"></i></button></td>
      <td></td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>