<template>
<div>
<section>
  <h3>{{blogPost.title}}</h3>
  <p>{{blogPost.content}}</p>
</section>
<button @click="editPost(blogPost._id)">EDIT</button>

</div>
</template>

<script>
export default {
computed: {
  blogPost() {
    return this.$store.state.BlogModule.currentPost
  }
},
methods: {
  editPost(id) {
    this.$router.push(`${id}/edit`)
  }
}
}
</script>

<style scoped>
</style>