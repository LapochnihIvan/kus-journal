<script setup>
import {reactive, watch} from "vue";

const props = defineProps(["user"])

const current_user = reactive({
  name: '',
  surname: '',
  login: '',
  password: '',
  role: ['']
})
watch(props, ()=>{
  current_user.name = props.user.name
  current_user.surname = props.user.surname
  current_user.login = props.user.login
  current_user.password = props.user.password
  current_user.role = props.user.role
})
</script>

<template>
  <div class="modal fade" id="user" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="user" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Работа с юзером</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="current_user.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Фамилия</label>
            <input type="text" class="form-control" v-model="current_user.surname">
          </div>
          <div class="mb-3">
            <label class="form-label">Логин</label>
            <input type="text" class="form-control" v-model="current_user.login">
            <div class="form-text">По этому логину будет осуществляться вход</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Пароль</label>
            <input type="text" class="form-control" v-model="current_user.password">
          </div>
          <div class="mb-3">
            <label class="form-label">Выбрать роль</label>
            <select class="form-control" v-model="current_user.role" multiple>
              <option value="student">Ученик</option>
              <option value="teacher">Учитель</option>
              <option value="grade_head">Классный руководитель</option>
              <option value="add_user">Разрешено управление юзерами</option>
              <option value="add_journal">Разрешено управление журналами</option>
              <option value="add_plan">Разрешено управление учебными планами</option>
            </select>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>