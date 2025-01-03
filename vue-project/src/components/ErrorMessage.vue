<template>
  <p v-if="props.error" style="color: red">{{ props.error }}</p>
</template>

<script setup>
const props = defineProps({
  error: String,
})
</script>
