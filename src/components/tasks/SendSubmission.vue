<script setup>
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config"

const props = defineProps(["task_id"])
const lang = ref('.cpp')
const file = ref()

const send = () => {
  axios.post("http://kusmirror.ru:18080/api/submit", {
    problem_id: props.task_id,
    user_id: JSON.parse(localStorage.getItem("user")).id,
    fileName: lang.value,
    file: file
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }).then((response)=>{
    console.log(response)
  })
}
</script>

<template>

  <div class="modal" id="send_submission" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Послать решение</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Выберите язык</label>
              <select class="form-select" v-model="lang">
                <option selected value=".cpp">C++20</option>
                <option value=".py">Python 3.10</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Загрузите файл</label>
              <input class="form-control" type="file" @change="(event)=>{file = event.target.files}">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" @click="send" data-bs-dismiss="modal" >Отправить на проверку
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>