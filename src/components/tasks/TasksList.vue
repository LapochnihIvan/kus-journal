<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();

</script>

<template>
  <ul class="list-group">
    <li class="list-group-item border-0" v-for="task in store.state.tasks.task_list">
      <router-link style="text-decoration: none"
                   class="text-dark"

                   :to="{'name': 'task_page', params:{'id': task.id}}">
        {{ task.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active{
  color: #0d6efd!important;
}
</style>