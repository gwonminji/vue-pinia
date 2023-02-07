<template>
  <div>
    <h1>pinia 예제1) count 값 조작</h1>
    <p>Count is {{ store.count }}</p>
    <p>Double is {{ store.doubleCount }}</p>
    <p>DoublePlus is {{ store.doublePlusOne }}</p>
    <p>Cha is {{ store.cha }}</p>
    <button type="button" @click="store.increment()">click doubleCount</button>

    <h1>pinia 예제2) msg 조작</h1>
    <p>msg : {{ store2.msg }}</p>
    <p>reverse msg : {{ store2.reverseMsg }}</p>
    <p>change msg : {{ store2.hello2 }}</p>
    <button type="button" @click="store2.reverseActionMsg()">reverse</button>
    <button type="button" @click="store2.changeHello2()">changeHello2</button>

    <h1>pinia 예제3) 숫자 증감 시키기</h1>
    <div class="input-box">
      <label for="input">나이</label>
      <input type="text" id="input" :value="age.getAge">
      <button type="button" @click="age.minusAge()">-</button>
      <button type="button" @click="age.plusAge()">+</button>
    </div>

    <h1>pinia + axios 예제) json get data</h1>
    <div class="list-wrap">
      <ul class="box" v-for="v in list.getLists" :key="v.id">
        <li>userId : {{ v.userId }}</li>
        <li>id : {{ v.id }}</li>
        <li>title : {{ v.title }}</li>
        <li>body : {{ v.body }}</li>
      </ul>
    </div>
    <button type="button" @click="list.fetchList()">get data</button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/conter'
import { useMsgStore } from '@/stores/msg'
import { useAgeStore } from '@/stores/age'
import { useListStore } from '@/stores/list'

export default {
  setup() {
    const store = useCounterStore();
    const store2 = useMsgStore();
    const age = useAgeStore();
    const list = useListStore();

    onMounted(() => {
      list.fetchList()
    })

    return{
      store,
      store2,
      age,
      list
    }
  },
}
</script>
<style>
h1{
  font-size: 16px;
}
.input-box{
  display: flex;
}
ul{
  margin: 0;
  list-style: none;
}
.list-wrap{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.box{
  padding: 16px;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
}
/* .box:not(:first-child){
  margin: 16px 0 0 0;
} */
</style>