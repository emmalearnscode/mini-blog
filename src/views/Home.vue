<template>
  <div class="home">
    <ul>
      <li v-for="post in blogListWithParas" :key="post._id">
        
        <h3>{{post.title}}</h3>
        <h4>21-21-2021</h4>
        <div >
          <div class="p-summary">
          <p v-for="(item, index) in post.editedContent" :key="index" >{{item}}</p>
          </div>
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
  
  computed: {
    
  blogList() {
    return this.$store.state.BlogModule.AllBlogPosts
  },
  blogListWithParas() {
    return this.$store.getters.AllPostsWithParas
  }
  
  },
  methods: {
    fetchOnePost(id) {
      
      
      this.$router.push("post/" + id)
      window.scrollTo(0,0)

    }
  }
  
}
</script>

<style lang="scss" scoped>

ul {
  list-style: none;

  li {
    margin: 1.5rem 0;
    border-bottom: 1px solid #c9c3e2;
    
    h4 {
  text-transform: uppercase;
  color: #A097C3;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
}

  p {
  line-height: 1.4;
  margin-bottom: 1rem;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .p-summary {
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  }
  }
}
</style>
