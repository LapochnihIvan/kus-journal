<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";

const props = defineProps(["string", "icon"])
</script>

<template>
  <li>
    <a class="nav-link py-3 border-bottom fs-5 fw-bold" style="border-radius: 0">
      <i class="bi" :class="icon"></i>
    </a>
  </li>
</template>

<style scoped>

</style>