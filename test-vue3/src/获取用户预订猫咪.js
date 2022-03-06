/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-06 20:27:08
 **/

import { watch, ref } from 'vue'
export default function 根据用户信息查找预定猫咪(userId) {
  const 预定猫咪 = ref(null)
  const 找到客户预定猫咪 = async () => {
    预定猫咪.value = await api(userId.value)
  }

  watch(userId, 找到客户预定猫咪)

  return {
    预定猫咪
  }
}
