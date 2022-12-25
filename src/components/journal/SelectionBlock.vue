<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="row">
        <div class="col-2">
            <select class="form-select " aria-label="Default select example" :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)">
                <option selected disabled value="-1">Предмет</option>
                <option value="1">Тест</option>
            </select>
        </div>
        <div class="col-1">
            <select class="form-select " aria-label="Default select example" disabled>
                <option selected>Класс</option>
            </select>
        </div>
        <div class="col-2">
            <select class="form-select " aria-label="Default select example" disabled>
                <option selected>Учебный план</option>
            </select>
        </div>
    </div>
</template>