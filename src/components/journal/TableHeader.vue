<script setup>
const props = defineProps({
    lessons: {
        type: Array,
        required: true
    },
})

</script>

<template>
    <thead>
    <tr>
        <th scope="col" style="width: 15%;">Имя</th>
        <th scope="col" style="" v-for="lesson in lessons">{{lesson.date.split('-')[0]}}.{{lesson.date.split('-')[1]}}</th>
    </tr>
    </thead>
</template>