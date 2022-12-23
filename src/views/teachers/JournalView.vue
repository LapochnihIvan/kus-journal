<script setup>
import {reactive} from "vue";
import axios from "axios";

const data = reactive({
  "students": [{"name": "Error: Can't get names", "surname": "", id: 0}],
  "lessons": [{id: 0, name: "", date: ""}],
  "marks": [{id: 0, student: 0, lesson: 0, value: "value"}]
})

function get_mark(student, lesson) {
  for (const mark of data.marks) {
    if (mark.student === student && mark.lesson === lesson) {
      return mark.value;
    }
  }
  return "";
}

axios.get("http://194.87.206.68/grade/1")
    .then(response => {
      data.students = response.data["students"]
    })
axios.get("http://194.87.206.68/plan/1")
    .then(response => {
      data.lessons = response.data["lessons"]
    })
axios.get("http://194.87.206.68/mark/1")
    .then(responce => {
      data.marks = responce.data["marks"]
    })
</script>


<template>
  <div class="container-fluid text-center pt-4">
    <div class="row">
      <div class="col-2">
        <select class="form-select " aria-label="Default select example" disabled>
          <option selected>Предмет</option>
        </select>
      </div>
      <div class="col-1">
        <select class="form-select " aria-label="Default select example" disabled>
          <option selected>Класс</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-select " aria-label="Default select example" disabled>
          <option selected>Учебный план</option>
        </select>
      </div>
    </div>
    <table class="table table-striped table-bordered mt-4">
      <thead>
      <tr>
        <th scope="col" style="width: 15%;">Имя</th>
        <th scope="col" style="" v-for="lesson in data.lessons">{{ lesson.date }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in data.students">
        <th scope="row">{{ student.surname }} {{ student.name[0] }}.</th>
        <th scope="col" style="" v-for="lesson in data.lessons">
          <input type="text" class="form-control border-0 bg-transparent text-center" :value="get_mark(student.id, lesson.id)">
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
