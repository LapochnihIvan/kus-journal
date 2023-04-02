<script setup>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const store = useStore()
const props = defineProps(["submissions"])
</script>

<template>
  <h5>Решения:</h5>
  <table class="table" v-show="submissions.lenght !== 0">
    <thead>
    <tr>
      <th scope="col" style="width: 30%" class="border-end">Тест</th>
      <th scope="col">Ведрдикт</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="submission in submissions">
      <td class="border-end">{{submission.test === -1?' ':submission.test }}</td>
      <td>{{submission.verdict === "NUN"?'Проверка': submission.verdict}}</td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>

</style>