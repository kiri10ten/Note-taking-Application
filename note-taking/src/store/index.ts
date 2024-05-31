import { createStore } from 'vuex'
import { useStorage } from '@vueuse/core'

const noted = useStorage('notes',[])

export default createStore({
state: {
  notes:noted
  },
mutations: {
  updatenotes(state,note){
  state.notes.push(note)
 }

},
actions: {
addtonotes(context,payload){
  context.commit('updatenotes',payload)
}


},
getters: {

}
})
