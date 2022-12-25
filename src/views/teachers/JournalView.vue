<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import TableHeader from "@/components/journal/TableHeader.vue";
import TableBody from "@/components/journal/TableBody.vue";
import SelectionBlock from "@/components/journal/SelectionBlock.vue";

const data = reactive({
    "students": [{"name": "Error: Can't get names", "surname": "", id: 0}],
    "lessons": [{id: 0, name: "", date: ""}],
    "marks": [{id: 0, student: 0, lesson: 0, value: "value"}]
})

const test = ref(0);

function ChangeValue(n){
    console.log("some")
    test.value = n;
}

axios.get("http://194.87.206.68/grade/1")
    .then(response => {
        data.students = response.data["students"]
    })
axios.get("http://194.87.206.68/plan/1")
    .then(response => {
        data.lessons = response.data["lessons"]
    })
axios.get("http://194.87.206.68/mark/1")
    .then(responce => {
        data.marks = responce.data["marks"]
    })
</script>


<template>
    <div class="container-fluid text-center pt-4">
        <SelectionBlock :set-subject="ChangeValue"/>
        <table class="table table-striped table-bordered mt-4">
            <TableHeader :lessons="data.lessons"/>
            <TableBody :lessons="data.lessons"
                       :students="data.students"
                       :marks="data.marks"/>
        </table>
    </div>
</template>

<style scoped>

</style>