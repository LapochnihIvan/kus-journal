<script setup>
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {useStore} from "vuex";

const router = useRoute()
const store = useStore()

const question = ref('')
const updateQuestion = () => {
  question.value = store.state.tasks.questions_list.find((el) => {
    return el.id === Number(router.params.id)
  })
}
updateQuestion()
watch(router, () => {
  updateQuestion()
})

let question_label = ''
switch (question.value.type) {
  case 0:
    question_label = "Введите правильный ответ";
    break
  case 1:
    question_label = "Выберите один правильный ответ";
    break
  case 2:
    question_label = "Выберите все правильные ответы"
    break
  default:
    question_label = "Саня, сделай нормаьлный тип"
}
const Submit = ()=>{
  console.log(question.value.answer)
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
            <input class="form-control" maxlength="10" v-model="question.answer" required>
          </div>
          <div class="col-4">
            <button class="btn btn-primary" type="submit" @click="Submit">Отправить</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>
<style scoped>

</style>