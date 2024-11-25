<template>
  <div>
    <p v-if="searchQuery">
      <span style="font-weight: bold">{{ postsCount }}</span> Posts were found!
    </p>

    <el-card v-for="post in filteredPosts" :key="post.id" class="result-card">
      <h3 v-html="highlightText(post.title)"></h3>
      <p v-html="highlightText(post.content)" class="content-text"></p>
    </el-card>

    <div v-if="!filteredPosts.length" class="no-results">No matching posts found.</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    searchQuery: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredPosts() {
      const queryLower = this.searchQuery ? this.searchQuery.toLowerCase() : ''

      return this.posts.filter((post) => {
        return (
          post.title?.toLowerCase().includes(queryLower) ||
          post.content?.toLowerCase().includes(queryLower)
        )
      })
    },
    postsCount() {
      return this.filteredPosts.length
    },
  },
  methods: {
    highlightText(text) {
      if (!this.searchQuery) return text
      const regex = new RegExp(`(${this.searchQuery})`, 'gi')
      return text.replace(regex, '<mark>$1</mark>')
    },
  },
}
</script>

<style>
.result-card {
  margin-bottom: 10px;
}

.no-results {
  text-align: center;
  font-size: 1.2em;
  color: #888;
}

mark {
  background-color: yellow;
  font-weight: bold;
}
.content-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
