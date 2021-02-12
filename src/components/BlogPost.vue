<template>
<div>
<section>
  <h3>{{blogPost.title}}</h3>
  <p>{{blogPost.content}}</p>
</section>
<button @click="editPost(blogPost._id)">EDIT</button>
<button @click="deletePost(blogPost._id)">DELETE</button>

</div>
</template>

<script>
export default {
  beforeCreate() {
    let id = this.$route.params.id
    this.$store.dispatch("fetchOneBlogPost", id)

  },
computed: {
  blogPost() {
    
    return this.$store.state.BlogModule.currentPost
  }
},
methods: {
  editPost(id) {
    this.$router.push(`${id}/edit`)
  },
  deletePost(id) {
    
    this.$store.dispatch("deleteOnePost", id)
    this.$router.push("/")
  }
}
}
</script>

<style scoped>
</style>