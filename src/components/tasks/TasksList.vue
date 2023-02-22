<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();

</script>

<template>
  <ul class="list-group">
    <li class="list-group-item border-0" v-for="task in store.state.tasks.task_list">
      <a style="text-decoration: none"
         href="#" :class="store.state.tasks.selected === task.id?'text-primary':'text-secondary'"
         @click="store.commit('set_selected', task.id)">
        {{ task.name }}
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>