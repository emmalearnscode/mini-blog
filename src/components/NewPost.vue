<template>
<section>
  <form @submit.prevent="addPost">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title">

    <label for="blog-post-content">Content</label>
    <textarea name="blog-post-content"
    cols="30" rows="10"
    v-model="content"></textarea>
    <div>
    <button >SAVE</button>
    <button class="inverted-btn" @click="returnHome">CANCEL</button>
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
methods: {
...mapActions(['addBlogPost']),
addPost() {
  this.addBlogPost(
    {
    title: this.title,
    content: this.content
    }
  ),
  this.$router.push("/")
},
returnHome() {
  this.$router.push("/")
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