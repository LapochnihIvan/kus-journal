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
            return mark;
        }
    }
    return {value:"", id:-1};
}

</script>

<template>
    <tbody>
    <tr v-for="student in students">
        <th scope="row">{{ student.surname }} {{ student.name[0] }}.</th>
        <td style="" v-for="lesson in lessons">
            {{get_mark(student.id, lesson.id).value}}
        </td>
    </tr>
    </tbody>
</template>