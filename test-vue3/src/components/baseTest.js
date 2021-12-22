/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-20 12:34:34
 **/
import { ref, watch, computed, reactive } from 'vue'

export default function baseFun() {
  // 对外输出的count双向绑定变量
  const count = ref(0)
  console.log('count is ', count)
  // 测试reactive
  const state = reactive({ state1: '111', state2: 222 })
  console.log('state1 is ', state.state1)
  // 对外输出的add增加方法
  const add = () => {
    count.value++
  }
  // 对某个双向变量的监听
  watch(count, (newValue, oldValue) => {
    console.log('监听到了 count 的变化，oldValue is ', oldValue, ' newValue is ', newValue)
  })
  // 进行对count的2倍双向绑定计算属性
  const twiceTheCounter = computed(() => count.value * 2)
  return {
    add,
    count,
    twiceTheCounter
  }
}
