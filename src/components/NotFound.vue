<template>
<section>
  <h2>Page Not Found</h2>
  <router-link to="/">Home</router-link>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
    display: inline-block;
    margin: 1rem 0;
    text-decoration: none;
    background-color: #A097c3;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:visited {
      color: black;
    }

    &:hover {
      background-color: #777094;
      color: #fff;
    }
}
</style>