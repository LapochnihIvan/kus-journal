<script setup>
const props = defineProps(['lessons'])
const MakeDate = (str)=>{
  let date = new Date(str)
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`
}
</script>

<template>
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Тема</th>
      <th style="width: 15%">Дата</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lesson in lessons">
      <th scope="col">{{lesson.theme}}</th>
      <td>{{MakeDate(lesson.date)}}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>