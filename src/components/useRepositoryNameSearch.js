/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-21 11:46:19
 **/
import { ref, computed } from 'vue'

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('')

  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(
      repository => repository.name.includes(searchQuery.value)
    )
  })

  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}
