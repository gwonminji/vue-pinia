import { defineStore } from 'pinia'

export const useMsgStore = defineStore('msg', {
    state: () => ({
        msg: 'Hello World',
        msg2: 'Hello2'
    }),
    actions: {
        reverseActionMsg(){
            this.msg = this.msg.split('').reverse().join('')
        },
        changeHello2(){
            this.msg2 = 'change Hello2'
        }
    },
    getters: {
        reverseMsg(state){
            return state.msg.split('').reverse().join('')
        },
        hello2(state){
            return state.msg2;
        },
    }
})