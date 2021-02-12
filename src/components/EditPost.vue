<template>
<section>
  <form @submit.prevent="editPost">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title">

    <label for="blog-post-content" >Content</label>
    <textarea name="blog-post-content"
    cols="30" rows="10"
    v-model="content"
    ></textarea>
    <div>
      <button >SAVE</button>
      
    <button class="inverted-btn" @click="cancelEdit">CANCEL</button>
    
    </div>
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
  let id = this.$route.params.id
  
  this.$store.dispatch("fetchOneBlogPost", id)
  
  // this.title = this.blogPost.title;
  // this.content = this.blogPost.content
  
},
mounted() {
  this.title = this.blogPost.title;
  this.content = this.blogPost.content
  
  
  //console.log(this.content);
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
},
cancelEdit() {
  this.$router.push(`/post/${this.blogPost._id}`)
}
},
watch: {
  blogPost(newValue) {
    this.title = newValue.title;
  this.content = newValue.content
  }
}
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  
  max-width: 700px;
  margin: 0 auto;


  input, textarea {
   
    padding: 0.5rem 0.2rem;
    font-family: inherit;
  }

  input {
     margin-bottom: 2rem;
  }
  

.inverted-btn {
  background-color: #fff;
  border: 1px solid #A097c3;

  &:hover {
    color: #000;
    background-color: #A097c3;
  }
}
}
</style>