<!--
 * @Name: 
 * @Description: 仓库示例
 * @Author: 刘燕保
 * @Date: 2021-12-19 19:53:44
-->
<template>
  <div> 这是示例_仓库 </div>
</template>

<script>
import useUserRepositories from '../components/useUserRepositories'
import useRepositoryNameSearch from '../components/useRepositoryNameSearch'
import { toRefs } from 'vue'
export default {
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { user } = toRefs(props)

    // 拆出仓库列表与根据用户信息获取到的仓库信息
    const { repositories, getUserRepositories } = useUserRepositories(user)

    // 根据仓库列表，拆解出搜索条件与匹配条件仓库的方法
    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery
    }
  },
  data() {
    return {
      filters: {},
      // searchQuery: ''
    }
  },
  computed: {
    // 使用filters对象对仓库进行筛选
    // filteredRepositories () {},
    // 使用searchQuery来进行仓库搜索
    // repositoriesMatchingSearchQuery () {}
  },
  watch: {
    user: 'getUserRepositories'
  },
  methods: {
    updateFilters () {}
  }
}
</script>