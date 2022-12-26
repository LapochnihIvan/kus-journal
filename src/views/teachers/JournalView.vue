<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import TableHeader from "@/components/journal/TableHeader.vue";
import TableBody from "@/components/journal/TableBody.vue";
import SelectionBlock from "@/components/journal/SelectionBlock.vue";

const data = reactive({
  "students": [{"name": "Error: Can't get names", "surname": "", id: 0}],
  "lessons": [{id: 0, name: "", date: ""}],
  "marks": [{id: 0, student: 0, lesson: 0, value: "value"}]
})

console.log(localStorage.getItem("marks"))

if (localStorage.getItem("marks") === null) {
  let marks = [
    {
      id: 1,
      student: 1,
      lesson: 1,
      value: 4
    },
    {
      id: 2,
      student: 2,
      lesson: 3,
      value: 3
    },
    {
      id: 3,
      student: 4,
      lesson: 1,
      value: 2
    }
  ]
  localStorage.setItem("marks", JSON.stringify(marks))
}

data.marks = JSON.parse(localStorage.getItem("marks"))


const test = ref(0);

function ChangeValue(n) {
  console.log("some")
  test.value = n;
}

axios.get("http://194.87.206.68/grade/1")
    .then(response => {
      console.log(response.data)
      data.students = [
        {
          id: 1,
          name: "Alex",
          surname: "Забашта"
        },
        {
          id: 2,
          name: "Alex",
          surname: "Станкевич"
        },
        {
          id: 4,
          name: "Александр",
          surname: "Федоров"
        },
        {
          id: 3,
          name: "Федор",
          surname: "Кутергин"
        },

      ]
      data.students.sort((a, b) => {
        if (a.surname > b.surname) return 1;
        if (a.surname < b.surname) return -1;
        if (a.surname === b.surname) return 0
      })
    })
axios.get("http://194.87.206.68/plan/1")
    .then(response => {
      console.log(response.data["lessons"])
      data.lessons = response.data["lessons"]
    })
// axios.get("http://194.87.206.68/mark/1")
//     .then(response => {
//       console.log(response.data["marks"])
//       data.marks = response.data["marks"]
//     })
function get_mark(student, lesson) {
  for (const mark of data.marks) {
    if (mark.student === student && mark.lesson === lesson) {
      return mark.value;
    }
  }
  return "";
}

function set_mark(student, lesson, value) {
  for (const mark of data.marks) {
    if (mark.student === student && mark.lesson === lesson) {
      mark.value = value;
      localStorage.setItem("marks", JSON.stringify(data.marks))
      return;
    }
  }
  data.marks.push({
    id: data.marks[data.marks.length - 1].id + 1,
    student: student,
    lesson: lesson,
    value: value,
  })
  localStorage.setItem("marks", JSON.stringify(data.marks))
}
</script>


<template>
  <div class="container-fluid text-center pt-4 row">
    <div class="col-9">
      <SelectionBlock :set-subject="ChangeValue"/>
      <table class="table table-striped table-bordered mt-4">
        <TableHeader :lessons="data.lessons"/>
        <tbody>
        <tr v-for="student in data.students">
          <th scope="row">{{ student.surname }} {{ student.name[0] }}.</th>
          <th scope="col" style="" v-for="lesson in data.lessons">
            <input type="text" class="form-control border-0 bg-transparent text-center"
                   :value="get_mark(student.id, lesson.id)"
                   @input="set_mark(student.id, lesson.id, $event.target.value)">
          </th>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-3">
      <table class="table table-striped table-bordered mt-4">
        <tbody>
          <tr v-for="lesson in data.lessons">
            <th style="width: 80%">{{lesson.name}}</th>
            <th style="width: 20%">{{lesson.date.split('-')[0]}}.{{lesson.date.split('-')[1]}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>