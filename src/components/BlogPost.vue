<template>
<div>
<section>
  <h3>{{blogPost.title}}</h3>
  
  <p v-for="(item, index) in bpWithParas" :key="index">{{item}}</p>
</section>
<button @click="editPost(blogPost._id)">EDIT</button>
<button class="inverted-btn" @click="openModal">DELETE</button>
<modal v-if="isModalOpen" 
:currentId="blogPost._id" 
@closeTheModal="closeModal"></modal>
</div>

</template>

<script>
import Modal from './Modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      isModalOpen: false
    }
  },
 
  created() {
    
    let id = this.$route.params.id
    
    this.$store.dispatch("fetchOneBlogPost", id)
    

  },
computed: {
  blogPost() {
    
    return this.$store.state.BlogModule.currentPost
  },
  bpWithParas() {
    return this.$store.getters.currentPostWithParas
  }
},
methods: {
  editPost(id) {
    this.$router.push(`${id}/edit`)
  },
  openModal() {
    this.isModalOpen = true;
    window.scrollTo(0,0)
    document.body.style.overflowY = "hidden"
  },
  closeModal() {
    document.body.style.overflowY = "visible"
    this.isModalOpen = false;
  }
},

}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 1rem;

}

p {
  line-height: 1.4;
  margin-bottom: 1rem;
}



.inverted-btn {
  background-color: #fff;
  border: 1px solid #A097c3;

  &:hover {
    color: #000;
    background-color: #A097c3;
  }
}
</style>