<template>
<section>
  <form @submit.prevent="editPost">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title" :placeholder="title">

    <label for="blog-post-content" >Content</label>
    <textarea name="blog-post-content"
    cols="30" rows="10"
    v-model="content"
    :placeholder="content"></textarea>
    <button >SAVE</button>
  </form>
</section>
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
computed: {
  blogPost() {
    return this.$store.state.BlogModule.currentPost
  }

},
created() {
  this.title = this.blogPost.title;
  this.content = this.blogPost.content
},
methods: {
  ...mapActions(['editBlogPost']),
editPost() {
  this.editBlogPost(
    {
    id: this.blogPost._id,
    title: this.title,
    content: this.content
    }
  )
  this.$router.push(`/post/${this.blogPost._id}`)
}
}
}
</script>

<style scoped>
</style>