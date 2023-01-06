<script setup>
import ListItem from "@/components/home/ListItem.vue";
import UserItem from "@/components/home/UserItem.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import MessageBlock from "@/components/messages/MessageBlock.vue";
import {reactive} from "vue";

const user = reactive(JSON.parse(localStorage.getItem("user")))
</script>

<template>
  <div class="row full-size" style="margin: 0">
    <div class="d-flex flex-column flex-shrink-0 bg-light col-1" style="width: 4.5rem">
      <ul class="nav flex-column mb-auto text-center ">
        <ListItem icon="bi-house-fill"/>

        <ListItem icon="bi-table" :href="{name: 'journal'}" v-if="user.role.includes('teacher')"/>
        <ListItem icon="bi-person-gear" :href="{name:'user_management'}" v-if="user.role.includes('add_user')"/>
        <ListItem icon="bi-calendar-event" :href="{name: 'plan_management'}" v-if="user.role.includes('add_plan')"/>
        <ListItem icon="bi-people" :href="{name: 'grade_management'}" v-if="user.role.includes('add_user')"/>
      </ul>
      <UserItem/>
    </div>
    <div class="col-11 mx-auto">
      <MessageBlock/>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="sass">
.full-size
  height: calc(100% - 50px)

</style>