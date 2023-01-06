<script setup>
import {reactive, watch} from "vue";
import axios from "axios";
import router from "@/router";
import {URL} from "@/utils/config";

const props = defineProps(["grade"])
const emit = defineEmits(["reGet"])

const current_grade = reactive({
  id: '',
  name: '',
  students: [''],
  head: {}
})
watch(props, () => {
  current_grade.id = props.grade.id
  current_grade.name = props.grade.name
  current_grade.students = props.grade.students
  current_grade.head = props.grade.head
})

const SendGrade = () => {

}


</script>

<template>
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