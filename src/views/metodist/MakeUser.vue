<script setup>
import UserModal from "@/components/management/users/UserModal.vue";
import {reactive, ref} from "vue";
import ButtonBlock from "@/components/management/users/ButtonBlock.vue";

const current_user = ref({})

const SetUser = (user)=>{
   current_user.value = user
}
</script>

<template>
  <ButtonBlock @set-user="SetUser"/>
  <UserModal :user="current_user"/>
</template>

<style scoped>

</style>