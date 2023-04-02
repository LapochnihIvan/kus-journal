<script setup>
import {useRoute} from "vue-router";
import {computed, onBeforeMount, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {URL} from "@/utils/config"
import {CreateMessage} from "../../components/messages/utils";

const router = useRoute()
const store = useStore()

const question = ref('')

const getState = () => {
  question.value = store.state.tasks.questions_list.find((el) => {
    return el.id === Number(router.params.id)
  })
}
const updateQuestion = () => {
  if (store.state.tasks.questions_list.length === 0) {
    axios.get(URL + "/get_question/contest=" + JSON.parse(localStorage.getItem("user")).school_id + "/user_id=" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
      for(let question of response.data.questions){
        question.sent = question.user_answer !== undefined;
      }
      store.commit("set_questions_list", response.data.questions)
      getState();
    })

  } else {
    getState();
  }
}
onBeforeMount(updateQuestion);
watch(router, () => {
  updateQuestion()
})
const question_label = computed(() => {
  switch (question.value.type) {
    case 0:
      return "Введите правильный ответ";
    case 1:
      return "Выберите один правильный ответ";
    case 2:
      return "Выберите все правильные ответы"
    default:
      return "Загрузка...."
  }
})


const Submit = () => {
  axios({
    url: URL + "/post/user_answer",
    method: "POST",
    data:{
      "user_id": JSON.parse(localStorage.getItem("user")).id,
      "question_id": Number(router.params.id),
      "user_answer": question.value.user_answer,
      "time": new Date().toISOString()
    }
  }).then(()=>{
    question.value.sent = true
  })
}

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});
</script>

<template>
  <div class="ps-5">
    <h3 class="my-3">{{ question.title }}</h3>
    <div v-html="question.legend" class="border-top pt-3"></div>
    <div class="my-3 border-top py-3">
      <form action="" onsubmit="return false">
        <label class="form-label">{{ question_label }}</label>
        <div class="row">
          <div class="col-4">
            <input class="form-control" maxlength="10" v-model="question.user_answer" required>
          </div>
          <div class="col-4">
            <button class="btn btn-primary" type="submit" @click="Submit">{{ question.sent ? "Изменить ответ" : "Отправить"}}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

</style>