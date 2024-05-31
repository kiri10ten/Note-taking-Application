<template>

    <div class="ma-5">
    {{ thenotes }}
</div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()
  const notesId = router.currentRoute.value.params.id || null
  const noted = JSON.parse(localStorage.getItem('notes') || [])
  const thenotes = ref(noted[notesId] || null)
  </script>