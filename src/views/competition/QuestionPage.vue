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

const question_ans = ref()
const updateQuestion = () => {

    // if (store.state.tasks.questions_list.length === 0) {
    //   axios.get(URL + "/get_question/contest=" + JSON.parse(localStorage.getItem("user")).school_id + "/user_id=" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
    //     for(let question of response.data.questions){
    //       question.sent = question.user_answer !== undefined;
    //     }
    //     store.commit("set_questions_list", response.data.questions)
    //     getState();
    //   })
    //
    // } else {
    //   getState();
    // }
    // console.log(router.params.id)
    // let store_question = store.state.tasks.questions_list.find((el)=>{console.log(el.id, router.params.id); return el.id === router.params.id})
    // console.log(store_question)
    // if (store_question.legend === undefined){
        axios.get(URL + "/get_question/" + router.params.id + "/" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
            question.value = response.data.question
            question.value.answer = question.value.answer.slice(0, question.value.answer.length-1)
            console.log(question.value)
            question_ans.value = question.value.answer
        })
    // }

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
            return "Выберите правильный ответ";
        case 2:
            return "Выберите все правильные ответы"
        default:
            return "Загрузка...."
    }
})


const Submit = () => {
    console.log({
        "user_id": JSON.parse(localStorage.getItem("user")).id,
        "question_id": Number(router.params.id),
        "value": question_ans.value,
    })
    axios({
        url: URL + "/post/answer",
        method: "POST",
        data: {
            "user_id": JSON.parse(localStorage.getItem("user")).id,
            "question_id": Number(router.params.id),
            "value": question_ans.value,
        }
    }).then((response) => {
        question.value.sent = true
        updateQuestion()
    })
}


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});
</script>

<template>
    <div class="ps-5">
        <h3 class="my-3">{{ question.name }}</h3>
        <div v-html="question.legend" class="border-top pt-3"></div>
        <div class="my-3 border-top py-3">
            <form action="" onsubmit="return false">
                <label class="form-label">{{ question_label }}</label>
                <div class="row">
                    <div class="col-4">
                        <input class="form-control" maxlength="10" v-model="question_ans" required>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary" type="submit" @click="Submit">
                            {{ question.verdict ? "Изменить ответ" : "Отправить" }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>

</style>