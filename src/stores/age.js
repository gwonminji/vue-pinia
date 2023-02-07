import { defineStore } from 'pinia'

export const useAgeStore = defineStore('age', {
    state: () => ({
        age: 0
    }),
    actions: {
        plusAge(){
            return this.age++
        },
        minusAge(){
            return this.age--
        }
    },
    getters: {
        getAge(state){
            return state.age;
        }
    }
})