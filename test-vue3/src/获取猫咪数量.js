/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-07 20:07:18
 **/
import { onMounted, ref } from 'vue'
export default function 获取猫咪数量() {
  const 猫咪数量 = ref(0)
  const 获取所有猫咪 = async () => {
    猫咪数量.value = await api()
  }

  onMounted(获取所有猫咪)

  return {
    猫咪数量
  }
}
