<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "@/router";
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {CreateMessage} from "@/components/messages/utils";


const username = ref("");
const password = ref("");

const error = ref(false)

function login() {
  axios({
    method:"POST",
    url: URL+"/login",
    data: {
      "login": username.value,
      "password": password.value
    }
  }).then((response)=>{
    if (response.status === 200){
      localStorage.setItem("user", JSON.stringify(response.data));
      CreateMessage("Вы вошли", "success")
      router.push({name: "homepage"});
    }else{
      error.value = true;
    }
  })

}
</script>


<template>
  <div class="d-flex justify-content-center align-items-center py-5" style="height: 80vh">
    <div class="col-4 card ">
      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="error">
          Неправильный логин или пароль
        </div>
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
