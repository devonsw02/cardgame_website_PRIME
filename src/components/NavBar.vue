<script setup>
import { ref } from "vue";
// ⭐️ 1. IMPORT THE SVG COMPONENT ⭐️
import Money from "/assets/svg/money.vue";

const mobileOpen = ref(false);

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};
</script>

<template>
  <header class="nav-container">
    <router-link :to="{ name: 'home' }" class="logo" aria-label="Go to Home" />

    <button class="hamburger" @click="toggleMobile" aria-expanded="true" aria-controls="mobile-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav :class="['links', { open: mobileOpen }]" id="mobile-menu">
      <router-link :to="{ name: 'shop-here' }" @click="mobileOpen = false">Shop</router-link>
      <router-link :to="{ name: 'about-me' }" @click="mobileOpen = false">How To Play</router-link>
      <router-link :to="{ name: 'contact-me' }" @click="mobileOpen = false">Cards</router-link>

      <router-link :to="{ name: 'news' }" class="cart-link" @click="mobileOpen = false">
        <Money class="money-icon" />
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
/* NOTE: Global styles removed for brevity, assuming they are in a global file. */

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, #2e2d78, transparent);
  z-index: 1000;
  box-sizing: border-box;
}

.logo {
  width: clamp(120px, 12vw, 300px);
  aspect-ratio: 2/1;
  background-image: url('../images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

/* Desktop Links */
.links {
  display: flex;
  gap: clamp(1rem, 3vw, 3rem);
}

.links a {
  color: white;
  text-decoration: none;
  font-size: clamp(14px, 1.8vw, 18px);
  font-family: masonic-lodge, sans-serif;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.links a:hover {
  color: orange;
}

/* ⭐️ NEW STYLES FOR THE CART/MONEY ICON LINK ⭐️ */
.cart-link {
  /* Ensures the icon link aligns properly with the text links */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* Override default padding if necessary */
  width: clamp(25px, 2vw, 35px); /* Give the link a fixed size */
  height: 100%;
}

.money-icon {
  /* Assuming Money.vue emits an SVG or similar block element */
  fill: white;
  width: 100%;
  height: 100%;
  transition: fill 0.3s ease;
}

.cart-link:hover .money-icon {
  /* Change the SVG color on hover */
  fill: orange;
}
/* END NEW STYLES */

/* Hamburger Icon (Desktop: Hidden) */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 2px;
}

/* MOBILE STYLES (Applies below 700px) */
@media (max-width: 700px) {
  .hamburger {
    display: flex;
  }

  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.65);
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
    pointer-events: none;
    transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .links.open {
    opacity: 1;
    transform: scale(1) translateY(0);
    pointer-events: auto;
  }

  .links a {
    font-size: clamp(18px, 4vw, 28px);
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    transition: transform 0.4s ease, color 0.3s ease;
  }

  .links a:hover {
    transform: scale(1.1) rotate(-2deg);
    color: #f7941d;
  }

  /* ⭐️ MOBILE ADJUSTMENT FOR ICON LINK ⭐️ */
  .cart-link {
    /* Revert padding for mobile links */
    padding: 1rem 0;
    width: 100%;
  }

  .money-icon {
    /* Ensure the icon is appropriately sized for the mobile menu */
    width: clamp(25px, 6vw, 40px);
    height: auto;
    margin: 0 auto; /* Center the icon */
  }
}
</style>
