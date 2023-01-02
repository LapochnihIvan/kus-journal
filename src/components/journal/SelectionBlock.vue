<script setup>
import {computed, ref, watch} from "vue";

const props = defineProps(["journals", "grades", "groups"])
const emit = defineEmits(["setJournal"])

const subjects = computed(() => {
  let subjects = []
  for (let journal of props.journals) {
    if (!subjects.includes(journal.subject)) {
      subjects.push(journal.subject)
    }
  }
  return subjects
})
const selected_subject = ref('')

const s_grades = computed(() => {
  let grades = []
  for (let journal of props.journals) {
    if (!grades.includes(journal.group_id) && journal.subject === selected_subject.value) {
      if (journal.is_group){
        grades.push(props.groups.filter((g)=>{return g.id === journal.group_id })[0])
      }else{
        grades.push(props.grades.filter((g)=>{return g.id === journal.group_id })[0])
      }
    }
  }
  return grades
})
const selected_grade = ref('')

watch(selected_grade, (new_grade) => {
  const selected = props.journals.filter((journal) => {
    return journal.group_id === selected_grade.value && journal.subject === selected_subject.value
  })[0]
  console.log(selected)
  if (selected) {
    emit("setJournal", selected);
  }
})
</script>

<template>
  <div class="row my-3">
    <div class="col-2">
      <select class="form-select " v-model="selected_subject">
        <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select " aria-label="Default select example"
              :disabled="selected_subject===''"
              v-model="selected_grade">
        <option v-for="grade in s_grades" :value="grade.id">{{ grade.name }}</option>
      </select>
    </div>
  </div>
</template>