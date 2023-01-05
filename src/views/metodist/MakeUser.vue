<script setup>
import UserModal from "@/components/management/users/UserModal.vue";
import {reactive, ref} from "vue";
import ButtonBlock from "@/components/management/users/ButtonBlock.vue";
import UserList from "@/components/management/users/UserList.vue";
import {Modal} from "bootstrap";

const current_user = ref({})

const SetUser = (user)=>{
   current_user.value = user
}

const ChangeUser = (user)=>{
  SetUser(user)
  const modal = new Modal("#user")
  modal.toggle()
}
</script>

<template>
  <ButtonBlock @set-user="SetUser"/>
  <UserModal :user="current_user"/>
  <UserList @open-modal="ChangeUser"/>
</template>

<style scoped>

</style>