<script setup>
import {ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import GroupModal from "@/components/management/groups/GroupModal.vue";

const props = defineProps(['grade'])

const groups = ref([])


axios.get(URL + "/all_groups", {
  headers: {
    token: JSON.parse(localStorage.getItem("user")).token
  }
}).then((response) => {
  console.log(response.data)
  groups.value = response.data.groups.filter((group) => {
    return group.grade === props.grade.id
  })
  for (let group of groups.value) {
    group.grade = props.grade

  }
})


const current_group = ref({})
const setGroup = (group) => {
  current_group.value = group
}
</script>


<template>
  <GroupModal :students="grade.students" back-i-d="#group_manage" :group="current_group"/>

  <button type="button" class="btn btn-primary me-3 mt-3" data-bs-target="#group_create" data-bs-toggle="modal"
          @click="setGroup({grade: grade})">
    Создать новую группу
  </button>

  <router-link :to="{name:'grade_management'}" class="btn btn-outline-primary mt-3">
    Назад
  </router-link>


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
        <button class="btn btn-primary btn-sm" @click="setGroup(group)" data-bs-target="#group_create"
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