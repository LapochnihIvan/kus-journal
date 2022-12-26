<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "@/router";
import {ref} from "vue";
import axios from "axios";


const username = ref("");
const password = ref("");

function login() {
  console.log(username.value)
  axios.post("http://194.87.206.68/login",
      {
        "login": username.value,
        "password": password.value
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
  ).then((response) => {
    if (response.status === 200) {
      router.push("/journal")
    }
  })
}
</script>


<template>
  <div class="d-flex justify-content-center align-items-center py-5" style="height: 80vh">
    <div class="col-4 card ">
      <div class="card-body">

        <div class="form-group my-3">
          <label for="username" class="form-label">Имя пользователя</label>
          <input type="text" name="username" id="username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label for="username" class="form-label">Пароль</label>

          <div class="input-group my-3" id="show_hide_password">
            <input type="password" name="password" id="pass" class="form-control" v-model="password">
            <button class="btn btn-secondary" type="button" onclick="">
              <i id="icon" class="bi bi-eye-fill"></i>
            </button>
          </div>
        </div>
        <button class="btn btn-primary my-3" @click="login">Зайти</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
