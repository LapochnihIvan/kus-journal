<script setup>
import {useStore} from "vuex";

const store = useStore()
console.log(store.state.tasks.submissions)
</script>

<template>
  <h5>Решения:</h5>
  <table class="table" v-show="store.state.tasks.submissions.length !== 0">
    <thead>
    <tr>
      <th scope="col" style="width: 30%" class="border-end">Тест</th>
      <th scope="col">Ведрдикт</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="submission in store.state.tasks.submissions">
      <td class="border-end">{{submission.test === -1?' ':submission.test }}</td>
      <td>{{submission.verdict === "NUN"?'Проверка': submission.verdict}}</td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>

</style>