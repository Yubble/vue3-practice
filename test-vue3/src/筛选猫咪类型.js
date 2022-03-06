/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-07 20:18:15
 **/
import { computed } from 'vue'
export default function 筛选猫咪类型(猫咪数量) {
  const 幼猫列表 = computed(() => {
    猫咪数量.filter()
  })
  const 成年猫列表 = computed(() => {
    猫咪数量.filter()
  })

  return {
    幼猫列表,
    成年猫列表
  }
}