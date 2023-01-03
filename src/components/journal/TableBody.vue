<script setup>
import axios from "axios";
import {URL} from "@/utils/config";

const props = defineProps({
    lessons: {
        type: Array,
        required: true
    },
    marks: {
        type: Array,
        required: true
    },
    students: {
        type: Array,
        required: true
    }
})

function get_mark(student, lesson) {
    for (const mark of props.marks) {
        if (mark.student === student && mark.lesson === lesson) {
            return mark;
        }
    }
    return {value:"", id:-1};
}

function SetMark(event, student, lesson, mark){
  axios({
    url: URL+"/mark",
    method: "POST",
    data:{
      student: student.id,
      lesson: lesson.id,
      id: mark.id,
      value: event.target.value
    },
    headers:{
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then((response)=>{
    // console.log(response)
  })
}

</script>

<template>
    <tbody>
    <tr v-for="student in students">
        <th scope="row">{{ student.surname }} {{ student.name[0] }}.</th>
        <td style="" v-for="lesson in lessons">
            <input type="text" class="form-control border-0 bg-transparent text-center"
                   :value="get_mark(student.id, lesson.id).value"
                   @input="SetMark($event, student, lesson, get_mark(student.id, lesson.id))">
        </td>
    </tr>
    </tbody>
</template>