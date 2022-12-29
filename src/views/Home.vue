<script setup>
import ListItem from "@/components/home/ListItem.vue";
import UserItem from "@/components/home/UserItem.vue";
import "bootstrap-icons/font/bootstrap-icons.css";

</script>

<template>
  <div class="row full-size" style="margin: 0">
    <div class="d-flex flex-column flex-shrink-0 bg-light col-1" style="width: 4.5rem">
      <ul class="nav flex-column mb-auto text-center ">
        <ListItem icon="bi-house-fill"/>
        <ListItem icon="bi-table"/>
      </ul>
      <UserItem/>
    </div>
    <div class="col-11"><router-view></router-view></div>
  </div>
</template>

<style lang="sass">
.full-size
  height: calc(100% - 50px)

</style>