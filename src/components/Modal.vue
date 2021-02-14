<template>
<section>
  <article>
    <p>Do you want to delete this blog post?</p>
    <div>
    <button @click="deletePost">DELETE</button>
    <button class="inverted-btn" @click="cancelModal">CANCEL</button>
    </div>
  </article>
</section>
</template>

<script>
export default {
  props: {
    currentId: {
      type: String
    }
  },
  methods: {
    deletePost() {
      let id = this.$route.params.id;
      this.$store.dispatch("deleteOnePost", id)
      document.body.style.overflowY = "visible"
    this.$router.push("/")
    },
    cancelModal() {
      
      this.$emit("closeTheModal")
    }
  }

}
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.7);
  z-index: 1;
  display: grid;
  place-content: center;

  article {
    width: 23rem;
    background-color: #fff;
    padding: 2rem;
    text-align: center;
    
    p {
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
    
  }
}
</style>