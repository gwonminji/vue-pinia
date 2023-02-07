import { defineStore } from 'pinia'

import axios from "axios"

export const useListStore = defineStore('list', {
    state: () => ({
        list: [],
    }),
    actions: {
        async fetchList(){
            try{
                const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                this.list = data.data
            }catch(error){
                console.log(error);
            }
        }
    },
    getters: {
        getLists(state){
            return state.list
        }
    }
})