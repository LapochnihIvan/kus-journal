<script setup>
import {ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import GroupModal from "@/components/management/groups/GroupModal.vue";

const props = defineProps(['grade'])

const groups = ref([])

watch(props, () => {
  axios.get(URL + "/all_groups", {
    headers: {
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then((response) => {
    console.log(response.data)
    groups.value = response.data.groups.filter((group) => {
      return group.grade === props.grade.id
    })
  })
})
axios.get(URL + "/all_groups", {
  headers: {
    token: JSON.parse(localStorage.getItem("user")).token
  }
}).then((response) => {
  console.log(response.data)
  groups.value = response.data.groups.filter((group) => {
    return group.grade === props.grade.id
  })
})

const current_group = ref({})
const setGroup = (group)=>{
  current_group.value = group
}
</script>


<template>
  <GroupModal :students="grade.students" back-i-d="#group_manage" :group="current_group"/>
  <button type="button" class="btn btn-primary" data-bs-target="#group_create" data-bs-toggle="modal"
          @click="setGroup({grade: grade})">
    Создать новую группу
  </button>
  <button type="button" class="btn btn-primary"  disabled>
    Назад
  </button>
  <table class="table">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Изменить</th>
      <th>Удалить</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="group in groups">
      <td>{{ group.name }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="current_group = group" data-bs-target="#group_create"
                data-bs-toggle="modal"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td></td>
    </tr>
    </tbody>
  </table>


</template>

<style scoped>

</style>