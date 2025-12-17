<script setup>
import { ref } from 'vue'

/* ---------------- CARD DATA ---------------- */

const cards = ref([
  {
    title: 'item cards',
    image: '/images/itemcardgraph.png',
    subtext: 'Item cards offer tactical, one-time-use effects that can turn the tide of battle. They are typically discarded after use.',
    elements: []
  },
  {
    title: 'character cards',
    image: '/images/charactercardgraph.png',
    subtext: 'Character cards are the main combatants, featuring unique abilities, health values, and attack types. They remain in play until defeated.',
    elements: []
  },
  {
    title: 'location cards',
    image: '/images/locationcardgraph.png',
    subtext: 'Location cards define the battlefield, applying persistent, global effects to all cards in play, changing movement rules, or boosting specific factions.',
    elements: []
  }
])
</script>

<template>
  <main class="page">

    <section class="hero">
      <div class="hero-overlay">
        <h1>LEARN TO PLAY!</h1>
        <p class="hero-subtext">
          Learn the basics of the game, how decks are built,
          and how each card type works together to win.
        </p>
      </div>
    </section>

    <section class="deck">
      <h2>GREET YOUR DECK!</h2>

      <div class="cards-wrapper">
        <div
          v-for="(card, cIdx) in cards"
          :key="cIdx"
          class="card"
        >
          <img :src="card.image" />
          <h3>{{ card.title }}</h3>
          <p class="card-subtext">{{ card.subtext }}</p>
        </div>
      </div>
    </section>

    <section class="setup">
      <h2>DECK SET UP AND MOVES</h2>

      <div class="phase">
        <div class="phase-text">
          <h4>PHASE 1: PREPARE YOUR FORCES</h4>
          <ul class="phase-list">
            <li>Choose 1 location card to defend as your stronghold</li>
            <li>Select 5 character cards, pick 3 as your active defenders and 2 as backup</li>
            <li>Take 20 distortion cards to use as energy tokens</li>
            <li>Place your item deck to your left</li>
            <li>Grab a piece of paper to track health and energy</li>
          </ul>
        </div>
        <img src="/images/instruction1.png" />
      </div>

      <div class="phase">
        <div class="phase-text">
          <h4>PHASE 2: START THE BATTLE!</h4>
          <ul class="phase-list">
            <li>Flip a coin to decide which player goes first</li>
            <li>Pay your location cards energy cost to activate</li>
          </ul>
        </div>
        <img src="/images/instruction2.png" />
      </div>

      <div class="phase">
        <div class="phase-text">
          <h4>PHASE 3: TAKE YOUR TURN</h4>
          <ul class="phase-list">
            <li>Item Draw (Optional): Flip a coin. Heads? Draw an Item Card and optionally pay shards to activate it (usually lasts 1 round).</li>
            <li>Attack: Choose 1 Defender to attack using either their Physical or Ability attack (each costs shards). Target an opponent’s Defender and deal damage.</li>
            <li>Manage Energy: Subtract shard costs from your pool. If you hit 0 shards, skip your next turn and restart with 5 fewer shards.</li>
            <li>Replace Defeated Defenders: Swap in Backup characters when Defenders fall.</li>
          </ul>
        </div>
        <img src="/images/instruction3.png" />
      </div>
    </section>
  </main>
</template>

<style>
/* GLOBAL FIX: Apply border-box to prevent padding/border from causing overflow */
*, *:before, *:after {
  box-sizing: border-box;
}
/* Ensure body and html have no default margins */
body, html {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.page {
  color: white;
  font-family: masonic-lodge;
  /* Contain any horizontal overflow */
  max-width: 100vw;
  overflow-x: hidden;
}

/* HERO */
.hero {
  /* Increased top padding and reduced overall height */
  padding-top: 5rem;
  height: 50vh;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  padding: 3rem 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-overlay h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 0.5rem;
}

.hero-subtext {
  font-family: Helvetica, Arial, sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.25rem);
  line-height: 1.5;
  max-width: 800px;
}

.deck {
  padding: 4rem 8vw;
  text-align: center;
}

.cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
}

.card {
  position: relative;
  /* Responsive width */
  width: 100%;
  max-width: 800px;
}

.card h3 {
  margin-top: 1rem;
}

.card-subtext {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
}

.card img {
  width: 100%;
  border-radius: 12px;
}

.setup {
  padding: 4rem 8vw;
}

.phase {
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: center;
  justify-content: space-between;
}

.phase-text {
  flex: 1 1 82%;
  min-width: 250px;
}

.phase img {
  flex: 1 1 8%;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.phase-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
}

.phase-list li {
  position: relative;
  padding-left: 1em;
  margin-bottom: 1em;
  line-height: 1.4;
}

.phase-list li::before {
  content: "-";
  position: absolute;
  left: 0;
  color: white;
  font-weight: bold;
}

/* Responsive rule to handle mobile screens (stacking) */
@media (max-width: 800px) {
  .phase {
    flex-direction: column;
    gap: 2rem;
  }
  .phase-text,
  .phase img {
    /* Full width on smaller screens, text remains on top */
    flex: 1 1 100%;
    max-width: 100%;
    min-width: unset;
  }
}
</style>
