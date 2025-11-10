<script setup>
</script>

<template>
  <div class="container">

  <div class="links">
    <router-link :to="{ name: 'shop-here' }">Shop</router-link>/

    <router-link :to="{ name: 'about-me' }">How To Play</router-link>/

    <router-link :to="{ name: 'contact-me' }">Cards</router-link>/

    <router-link :to="{ name: 'home' }">News</router-link>/
  </div>
  </div>
</template>

<style scoped>

div.container {
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
  background-color: #4C539C;


  div.links {
    display: flex;
    flex-direction: column;
    gap: 10px;


  a {
    color: white;
    text-decoration: none;
    font-size: 30px;
    font-family: Impact, sans-serif;
    padding: 20px;

    &:hover {
      color: orange;
      transition-duration: 0.5s;

    }
  }



    @media (width > 600px) {
    flex-direction: row;
  }

  }
}



</style>
