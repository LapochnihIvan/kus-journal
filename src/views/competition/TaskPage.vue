<script setup>
import {useRoute} from "vue-router";

const router = useRoute()
</script>

<template>
{{router.params.id}}
</template>

<style scoped>

</style>