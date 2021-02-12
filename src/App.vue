<template>
  <div id="app">
    <header>
      <div class="head-container">
        <nav>
          <router-link to="/newPost">New post</router-link>
          <router-link v-if="notHomePath" to="/">HOME</router-link>
        </nav>
      <h1>Emma's blog</h1>
      </div>
    </header>
      
      
    <router-view class="body-container" />
  </div>
</template>

<script>
export default {
  computed: {
    notHomePath() {
      return this.$route.path != "/"
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

body {
  font-family: 'Roboto', sans-serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

  .body-container {
    max-width: 800px;
      margin: 3rem auto;
      padding: 0 1rem;
  }

  button {
    display: inline-block;
    margin: 1rem 0;
    text-decoration: none;
    background-color: #A097c3;
    
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #777094;
      color: #fff;
    }
}

  button + button {
     margin-left: 0.3rem;
}

  header {
    
    background-image: url("./assets/mountains.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    

    .head-container {
      max-width: 1440px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 60px 140px;
    }
    

    nav {
      place-self: start end;
      margin: 0.8rem;

      a {
        text-decoration: none;
        margin: .3rem;
        background-color: #fff;
        color: black;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          background-color: #c3bbe2;
          
        }

        &:visited {
          color: black;
        }
      }
    }

    h1 {
      place-self: start center;
      font-size: 3rem;
    }
  }
}


</style>
