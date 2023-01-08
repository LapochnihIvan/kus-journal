<script setup>
import {reactive, ref, watch} from "vue";
import axios from "axios";
import {FOR_ASSETS, URL} from "@/utils/config";
import router from "@/router";

const props = defineProps(["plan"])
const emit = defineEmits(["reGet"])

const current_plan = reactive({
  id: '',
  name: '',
  subject: '',
  url: ''
})
watch(props, () => {
  current_plan.id = props.plan.id === undefined ? 0 : props.plan.id
  current_plan.name = props.plan.name
  current_plan.subject = props.plan.subject
  current_plan.url = props.plan.url === undefined ? '' : props.plan.url
})
const subjects = ref([])
axios.get(URL + "/subjects").then((response) => {
  subjects.value = response.data.subjects
})

const file = ref()

const FindId = (name)=>{
  return subjects.value.filter((subject)=>{return subject.name === name})[0].id
}

const Send = () => {
  let data = {}
  data.id = current_plan.id
  data.subject_id = FindId(current_plan.subject)
  data.name = current_plan.name

  if (file.value !== undefined){
    data.filename = file.value.name
    data.file = file.value
  }
  console.log(data)
  axios({
    url: URL + "/manage_plan",
    method: "POST",
    data:data,
    headers: {
      'Content-Type': 'multipart/form-data',
      'token': JSON.parse(localStorage.getItem("user")).token
    }

  }).then((response)=>{
    router.go()
  })
}
</script>

<template>
  <div class="modal fade" id="plan" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Работа с планами</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="current_plan.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Предмет</label>
            <select class="form-select" v-model="current_plan.subject">
              <option v-for="subject in subjects" :value="subject.name">{{ subject.name }}</option>
            </select>
            <div class="form-text">Это короткое имя которое будет видеть педагог</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Файл плана</label>
            <p><a v-if="current_plan.url !== ''" :href="FOR_ASSETS+'/'+current_plan.url" download>Скачать текущий
              план</a></p>
            <input type="file" class="form-control" @change="(event)=>{file = event.target.files[0]}">
            <div class="form-text">Планы автоматически обработаются в системе</div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Send">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>