<script setup>

import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <section class="container">
  <header>
    <nav-bar/>
  </header>

    <section class="heroimage">
    </section>

  <section class="content">
    <router-view/>
  </section>

  <footer>My footer here!</footer>
  </section>

</template>

<style scoped>
section.container {
  display: flex;
  flex-direction: column;
  gap: 10px;


  >* {
  }

  .heroimage {
    width: 100vw;
    height: 800px;
    background-color: #F7941D;
  }

  .content {
    background-color: white;
    color: #4C539C;
    padding: 10px;
    border-radius: 10px;

    p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-top: 0;
      }
    }
  }

  footer {
    text-align: center;
    padding: 10px;
  }

}
</style>
