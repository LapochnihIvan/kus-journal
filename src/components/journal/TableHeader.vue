<script setup>
const props = defineProps({
    lessons: {
        type: Array,
        required: true
    },
})

const MakeDate = (str)=>{
  let date = new Date(str)
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`
}

</script>

<template>
    <thead>
    <tr>
        <th scope="col" style="width: 15%;">Имя</th>
        <th scope="col" style="" v-for="lesson in lessons">{{MakeDate(lesson.date)}}</th>
    </tr>
    </thead>
</template>