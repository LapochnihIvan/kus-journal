<script setup>
import {useStore} from "vuex";
import TasksList from "@/components/tasks/TasksList.vue";
import {URL} from "@/utils/config"
import axios from "axios";
const store = useStore();

axios.get(URL + "/get/all/problem[id;name]").then((response) => {
  store.commit("set_problems_list", response.data.problems)
})

let questions = [
  {
    id: 1,
    title: "Задача В. «Волшебство» (2 балла)",
    legend: "<p>Вася придумал двузначное число (не содержащее нулей с своей записи), а потом применил к нему волшебную операцию увеличения количества знаков. Волшебная операция состоит в том, что к числу добавляется ещё одна цифра, а остальные цифры изменяются так, чтобы сумма цифр числа осталась прежней (при этом использование нулей в записи числа разрушает волшебство, поэтому не допускается).</p>" +
        "<p>Васе понравилось волшебное преобразование, и он стал повторять его уже применительно к результату предыдущего преобразования. После пяти преобразований он с печалью убедился, что дальше применить волшебство не удается.</p>" +
        "<p>Назовите максимальное начальное число, с которым у Васи могла получиться такая история.</p>",
    type: 0,
    body: {},

  },
  {
    id: 2,
    title: "Another Interesting Question",
    legend: "Very Important",
    type: 1,
    body: ["One", "Two"]
  }
]
store.commit("set_questions_list", questions)



</script>

<template>
  <div class="py-3 h-100">
    <div class="row h-100">
      <div class="col-2 border-end border-dark-subtle h-100">
        <h4 class="mb-3 px-3 pb-3 border-bottom">Kus.Olimp</h4>
        <TasksList/>
      </div>
      <div class="col-10 h-100">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>