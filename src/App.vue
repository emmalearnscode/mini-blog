<template>
  <div id="app">
    <header>
      <h1>Emma's blog</h1>
<router-link to="/newPost">Skapa nytt inlägg</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

body {
  font-family: Arial, Helvetica, sans-serif;
}


</style>
