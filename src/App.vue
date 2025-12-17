<template>
  <link rel="stylesheet" href="https://use.typekit.net/zaj7pkv.css">

  <section class="container">

    <header>
      <NavBar />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <DwarzianFooter />
    </footer>
  </section>
</template>

<script setup>
import { ref, computed, provide } from 'vue'; // ⭐️ Import necessary Composition API functions
import NavBar from '@/components/NavBar.vue'
import DwarzianFooter from '@/views/DwarzianFooter.vue'

// ----------------------------------------------------
// ⭐️ CENTRALIZED CART STATE LOGIC ⭐️
// This logic is now the single source of truth for the entire application.

const cart = ref([]);

// --- COMPUTED PROPERTIES ---

const totalCartCost = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const cartItemCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

// --- MUTATION METHODS ---

const addToCart = (product, quantity = 1) => {
  const existingItem = cart.value.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.value.push({
      ...product,
      quantity: quantity
    });
  }
};

const removeFromCart = (productId) => {
  cart.value = cart.value.filter(item => item.id !== productId);
};

// ⭐️ PROVIDE THE CART LOGIC ⭐️
// Makes all cart data and functions available to NavBar, router-view children (ShopPage, NewsHere), and DwarzianFooter.

provide('cart', {
  cart,
  totalCartCost,
  cartItemCount,
  addToCart,
  removeFromCart
});

// ----------------------------------------------------
</script>

<style scoped>
/* All original styles are preserved */
@font-face {
  font-family: "masonic-lodge";
  src: url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.eot");
  src: url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.eot?#iefix") format("embedded-opentype"),
  url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.woff2") format("woff2"),
  url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.woff") format("woff"),
  url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.ttf") format("truetype"),
  url("https://db.onlinewebfonts.com/t/e3ded38cd08aad84d0f4cb151f5c975e.svg#MasonicLodge") format("svg");
  font-weight: normal;
  font-style: normal
}

section.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;

  background-image: url('images/backspace.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

main {
  flex: 1;
}

footer {
  text-align: center;
}
</style>
