<script setup>
import {computed, reactive, ref, watch} from "vue";
import axios from "axios";
import router from "@/router";
import {URL} from "@/utils/config";
import StudentsSearch from "@/components/management/grades/StudentsSearch.vue";

const props = defineProps(["grade"])
const emit = defineEmits(["reGet"])

const staff = ref([])
const students = ref([])


axios.get(URL + '/all_users').then((response) => {
  staff.value = response.data.users.filter((user) => {
    return !user.role.includes("student")
  });
  students.value = response.data.users.filter((user) => {
    return user.role.includes("student")
  });
})

const current_grade = reactive({
  id: '',
  name: '',
  students: [''],
  head: {}
})

const selected_teacher = ref('')

watch(props, () => {
  current_grade.id = props.grade.id
  current_grade.name = props.grade.name
  current_grade.students = props.grade.students
  current_grade.head = props.grade.head
})

const SendGrade = () => {

}

const GetId = computed(() => {
  let id = []
  if (props.grade.students) {
    for (let student of props.grade.students) {
      id.push(student.id)
    }
  }
  return id
})

const newStudent = (Istudents)=>{
  console.log(Istudents)
  current_grade.students = Istudents
  console.log(current_grade)
}

</script>

<template>
  <StudentsSearch :back-i-d="'#grade'" :students="students" :selected="GetId"
                  @make-list="newStudent"/>
  <div class="modal fade" id="grade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="grade" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Работа с классом</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="current_grade.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Классный руководитель</label>
            <select class="form-control" v-model="current_grade.head">
              <option v-for="user in staff" :value="user">{{ user.name }} {{ user.surname }}</option>
            </select>
          </div>

          <div class="mb-3">
            <button class="btn btn-primary" data-bs-target="#student_search" data-bs-toggle="modal">Выбрать
              обучающихся
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" @click="SendGrade" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>