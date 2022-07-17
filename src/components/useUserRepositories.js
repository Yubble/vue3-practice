/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-21 11:37:03
 **/
import fetchUserRepositories from '../constant/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user) {
  // ref 声明双向绑定变量
  // 相当于data中声明了 repositories ，所以在data中就不用再次声明了
  const repositories = ref([])

  // 同理相当于在 methods 中声明了 getUserRepositories
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user)
  }

  // 加载时启动
  onMounted(getUserRepositories)

  // 改为watch响应式监听
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}