<script setup>
const emit = defineEmits(["setUser"]);
</script>


<template>
  <div class="row my-3">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="$emit('setUser', {})" data-bs-toggle="modal"
              data-bs-target="#user">
        Создать новых юзеров
      </button>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary" disabled>
        Загрузить через файл
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>