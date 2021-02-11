<template>
  <div class="home">
    <ul>
      <li v-for="post in blogList" :key="post._id">
        <h3>{{post.title}}</h3>
        <p>{{post.content}}</p>
        <button @click="fetchOnePost(post._id)">Read more</button>
      </li>
    </ul>
  </div>
</template>

<script>
//import {mapState} from "vuex"

export default {
  name: 'Home',
  beforeCreate() {
    this.$store.dispatch("fetchAllBlogPosts")
  },
  computed: {
    
  blogList() {
    return this.$store.state.BlogModule.AllBlogPosts
  },
  
  },
  methods: {
    fetchOnePost(id) {
      this.$store.dispatch("fetchOneBlogPost", id)
      
      this.$router.push("post/" + id)

    }
  }
  
}
</script>
