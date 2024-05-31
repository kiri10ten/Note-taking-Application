<template>
  <main >
    <div  :key="id" v-for="(note, id) in notes">
      <v-card class="ma-7" variant="outlined">

    <a @click="gotoNotePage(id)"   href=""><p  class="ma-5"> {{ id+1 }} .{{ note.slice(0, 150)}}...</p></a>  
    </v-card>
    </div>
  
  </main>
</template>


<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'



const notes = ref(JSON.parse(localStorage.getItem('notes')) || [])
const router = useRouter()

const gotoNotePage =(id)=>{
  router.push({name:'NotePage',params:{id}})

}


watch(

  () => localStorage.getItem('notes'),
  (newValue) => {
    notes.value = JSON.parse(newValue) || []
  }
)
</script>

<style scoped>
a{
  text-decoration: none;
  color:black
}



</style>