<script setup>
const props = defineProps({
    lessons: {
        type: Array,
        required: true
    },
    marks: {
        type: Array,
        required: true
    },
    students: {
        type: Array,
        required: true
    }
})

function get_mark(student, lesson) {
    for (const mark of props.marks) {
        if (mark.student === student && mark.lesson === lesson) {
            return mark.value;
        }
    }
    return "";
}

</script>

<template>
    <tbody>
    <tr v-for="student in students">
        <th scope="row">{{ student.surname }} {{ student.name[0] }}.</th>
        <th scope="col" style="" v-for="lesson in lessons">
            <input type="text" class="form-control border-0 bg-transparent text-center"
                   :value="get_mark(student.id, lesson.id)">
        </th>
    </tr>
    </tbody>
</template>