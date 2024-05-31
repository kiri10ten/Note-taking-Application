<template>
  <div class="ma-5" >
    <v-textarea auto-grow
 class="custom-input"  v-model="theinput"></v-textarea>
  </div>

  <v-btn variant="outlined" class="ma-3" @click="$store.dispatch('addtonotes',theinput)">Submit the notes</v-btn>
  <v-btn @click="overlay = !overlay"> click for an overlay</v-btn>


<v-overlay v-model="overlay" >
<div class="justify-center align-center">
 <div class="bg-red ma-5">
does anything go in here ????
</div> 
</div>
</v-overlay>
</template>

<style >
</style>


<script setup>
import { ref } from 'vue'

const overlay = ref(false)

</script>

