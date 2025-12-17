<script setup>
import { ref, inject } from 'vue' // ⭐️ Import inject
import productsData from '@/data/products.json'

// ⭐️ Inject the addToCart function ⭐️
const { addToCart } = inject('cart');

/* Track quantity for each product */
const quantities = ref({})

const increase = (id) => {
  quantities.value[id] = (quantities.value[id] || 1) + 1
}

const decrease = (id) => {
  const current = quantities.value[id] || 1
  if (current > 1) quantities.value[id] = current - 1
}

const addItem = (product) => {
  const qty = quantities.value[product.id] || 1

  // ⭐️ Call the injected function ⭐️
  addToCart(product, qty);

  // Reset quantity to 1 after adding to cart
  quantities.value[product.id] = 1;

  console.log(`Added ${qty} of ${product.name} to the shared cart.`);
}
</script>

<template>
  <section class="shop-grid">
    <article
      v-for="(item, index) in productsData.products"
      :key="item.id"
      class="product-card"
    >
      <div class="product-inner">

        <h3 class="product-title">{{ item.name }}</h3>

        <div class="product-image-frame">
          <img
            :src="item.image"
            :alt="item.name"
            class="product-image"
            :style="{ animationDelay: `${index * 0.2}s` }"
          />
        </div>

        <p class="product-tagline">{{ item.tagline }}</p>

        <div class="product-footer">
          <div class="quantity-row">
            <button class="qty-btn" @click="decrease(item.id)">-</button>
            <span class="qty-value">{{ quantities[item.id] || 1 }}</span>
            <button class="qty-btn" @click="increase(item.id)">+</button>
          </div>

          <button class="product-button" @click="addItem(item)">
            {{ item.buttonLabel }} — ${{ item.price.toFixed(2) }}
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
/* Grid layout: 2 per row, each row roughly viewport height */
.shop-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 2rem;
  /* Top Space Adjustment */
  padding: 5rem 2rem 2rem 2rem;
  background: url('/images/hero.png') no-repeat center center;
  background-size: cover;
  align-items: start;
}

/* Product card */
.product-card {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Inner content scales to row height */
.product-inner {
  width: 100%;
  max-width: 420px;
  height: auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: transparent;
  padding: 1rem;
  border-radius: 24px;
}

/* Product title */
.product-title {
  font-family: masonic-lodge;
  font-size: 2rem;
  font-style: italic;
  color: white;
  margin-top: 0;
  /* FIX: Ensure consistent height for 2 lines of text */
  line-height: 1.2;
  height: 2.4em;
  overflow: hidden;
}

/* Image frame */
.product-image-frame {
  width: 100%;
  flex-shrink: 0;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}

/* Product image with floating animation */
.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

/* Tagline */
.product-tagline {
  font-family: Helvetica, sans-serif;
  font-size: 1.25rem;
  color: white;
  margin-bottom: 1rem;
}

/* Footer */
.product-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0;
}

/* Quantity controls container (New Addition) */
.quantity-row {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Creates horizontal space */
}

/* Quantity buttons and other footer styles remain the same... */
.qty-btn {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: #f7941d;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.qty-btn:hover {
  background-color: white;
  color: #f7941d;
}

.qty-value {
  font-weight: bold;
  font-size: 1.1rem;
  font-family: helvetica;

}

/* Add-to-cart button */
.product-button {
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background-color: #f7941d;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.product-button:hover {
  background-color: white;
  color: #f7941d;
}
.product-button:active {
  transform: scale(0.95);
}

/* Responsive for mobile */
@media (max-width: 900px) {
  .shop-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
  }

  .product-inner {
    height: auto;
    min-height: 50vh;
  }

  .product-image-frame {
    height: auto;
    max-height: 50vh;
  }
}
</style>
