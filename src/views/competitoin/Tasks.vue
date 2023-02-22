<script setup>
import {useStore} from "vuex";
import TasksList from "@/components/tasks/TasksList.vue";

const statement =
    {
      id: 1,
      name: "name",
      legend: "legend",
      input_format: "format",
      output_format: "format",
      time_limit: "limit",
      output_limit: "limit",
      examples: [
        {
          input: "some",
          output: "some"
        }
      ],
      solutions: [
        {
          date: "date",
          result: "Решено",
        },
        {
          date: "date",
          result: "Ошибка выполнения",
        }
      ]
    }

const statements = [
  {
    name: "A. Иван и новый стандарт",
    id: 1
  },
  {
    name: "B. Федор делает бота",
    id: 2
  }
]
const store = useStore();
store.commit("set_task_list", statements)
store.commit("set_selected", statement)
</script>

<template>
  <div class="py-3 h-100">
    <div class="col-2 border-end border-dark-subtle h-100">
      <h4 class="mb-3 px-3 pb-3 border-bottom">Kus.Olimp</h4>
      <TasksList/>
    </div>
  </div>

</template>