<script setup>
import axios from "axios";
import {computed, ref} from "vue";
import {URL} from "@/utils/config";
import SelectionBlock from "@/components/journal/SelectionBlock.vue";

const journals = ref([])
const selected = ref();
let user = JSON.parse(localStorage.getItem("user"))

axios.get(URL+"/journal/"+user.id, {
  headers: {
    token: user.token
  }
}).then((response)=>{
  journals.value = response.data["journals"]
})

const grades = computed(()=>{
  let grades = []
  for(let journal of journals.value){
    if (!journal.is_group){
      axios.get(URL+"/grade/"+journal.group_id, {
        headers: {
          token: user.token
        }
      }).then((response)=>{
        grades.push(response.data)
      })
    }
  }
  return grades
})
const groups = computed(()=>{
  let group = []
  for(let journal of journals.value){
    if (journal.is_group){
      axios.get(URL+"/group/"+journal.group_id, {
        headers: {
          token: user.token
        }
      }).then((response)=>{
        group.push(response.data)
      })
    }
  }
  return group
})
</script>


<template>

  <SelectionBlock :journals="journals"
                  :grades="grades"
                  :group="groups"
                  @set-journal="(journal)=>{selected = journal}"/>
  {{ selected }}
</template>

<style scoped>

</style>