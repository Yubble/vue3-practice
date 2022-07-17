/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-20 12:34:34
 **/
import { ref, watch, computed, reactive, isReactive, toRaw, watchEffect } from 'vue'

export default function baseFun() {
  // 对外输出的count双向绑定变量
  const count = ref(0)
  console.log('count is ', count)
  console.log('isReactive 判断 ref ', isReactive(count))
  // 测试reactive
  const state = reactive({ state1: '111', state2: 222, child: { s1: '11' } })
  console.log('state1 is ', state.state1)
  console.log('isReactive 判断 ', isReactive(state))
  console.log('isReactive 判断 state.state1', isReactive(state.state1))
  console.log('isReactive 判断子组件的响应能力 ', isReactive(state.child))
  const raw = toRaw(state)
  raw.state1 = 531
  console.log('raw is ', raw)
  const addRaw = () => {
    raw.state1++
  }
  // 对外输出的add增加方法
  const add = () => {
    count.value++
  }
  // 对某个双向变量的监听
  watch(count, (newValue, oldValue) => {
    console.log('监听到了 count 的变化，oldValue is ', oldValue, ' newValue is ', newValue)
  })
  // 首先运行一次传入的函数，同时监听响应式变量，发生变化后则运行对应函数
  watchEffect(() => { console.log('watchEffect运行，监听到 count.value 的变化 count is ', count.value) })
  // 进行对count的2倍双向绑定计算属性
  const twiceTheCounter = computed(() => count.value * 2)
  return {
    add,
    count,
    twiceTheCounter,
    raw,
    addRaw
  }
}
