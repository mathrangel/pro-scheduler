<template>
  <div>
    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">{{ error.message }}</div>
    {{ data }}
  </div>
</template>

<script setup>
import { getTest } from '../../service/index.js'
import { useQuery } from '@tanstack/vue-query'

const { isPending, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: getTest
})
</script>

<style scoped>
.bg-black {
  background-color: #000;
}
</style>
