<template>
  <div id="home">
    <h1>Search Posts</h1>
    <el-container>
      <el-header>
        <SearchBox v-model="searchQuery" />
      </el-header>
      <el-main>
        <ResultsList :posts="posts" :searchQuery="searchQuery" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue'
import ResultsList from '../components/ResultsList.vue'
import { posts } from '../data/posts'

export default {
  components: {
    SearchBox,
    ResultsList,
  },
  data() {
    return {
      searchQuery: '',
      posts: posts,
    }
  },
}
</script>

<style scoped>
#home {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
