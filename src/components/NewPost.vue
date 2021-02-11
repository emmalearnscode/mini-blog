<template>
  <form @submit.prevent="addPost">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title">

    <label for="blog-post-content">Content</label>
    <textarea name="blog-post-content"
    cols="30" rows="10"
    v-model="content"></textarea>
    <button >SAVE</button>
  </form>
</template>

<script>
import {mapActions} from "vuex"
export default {
data() {
  return {
    title: "",
    content: ""
  }
},
methods: {
...mapActions(['addBlogPost']),
addPost() {
  this.addBlogPost(
    {
    title: this.title,
    content: this.content
    }
  )
}
}
}
</script>

<style scoped>
</style>