<template>
  <div class="home">
    <ul>
      <li v-for="post in blogList" :key="post._id">
        <h3>{{post.title}}</h3>
        <div>
          <p>{{post.content}}</p>
          <button @click="fetchOnePost(post._id)">Read more</button>
        </div>
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
      
      
      this.$router.push("post/" + id)

    }
  }
  
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;

  li {
    margin: 1.5rem 0;
    background-color: #FFF6E5;
    padding: 1rem;
  }
}
</style>
