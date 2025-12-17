<template>
  <section class="contact-page">
    <section class="champions-hero">
      <div class="hero-copy">
        <h1>MEET YOUR<br />CHAMPIONS!</h1>
        <p>
          Found across the main six realms, smashed together in an unimaginable distortion of the universe itself. You can find these warriors, leaders, and creatures akin, fighting to protect their home realm and rule the realm of Dwarzianti
        </p>
      </div>

      <div class="hero-card-wrapper">
        <div
          class="hero-card-image-wrapper flip-card"
          :class="{ flipped: heroFlipped }"
          @click="heroFlipped = !heroFlipped"
        >
          <div class="flip-card-inner">
            <img class="hero-card-image flip-card-front" :src="activeHeroCard.image" :alt="activeHeroCard.title" />
            <img class="hero-card-image flip-card-back" src="/images/backside.png" alt="backside" />
          </div>

          <div class="hero-card-overlay">
            <h3>{{ activeHeroCard.title }}</h3>
            <p>{{ activeHeroCard.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="card-rows">
      <div v-for="row in rows" :key="row.id" class="card-row">
        <h2 class="row-title">{{ row.label }}</h2>

        <div class="cards-container">
          <article
            v-for="card in cardsByGroup[row.id]"
            :key="card.id"
            class="card flip-card"
            :class="{ flipped: flippedCards[card.id] }"
            @click="toggleCard(card.id)"
          >
            <div class="flip-card-inner">
              <img class="flip-card-front" :src="card.image" :alt="card.title" />
              <img class="flip-card-back" src="/images/backside.png" alt="backside" />
            </div>

            <div class="card-overlay">
              <h3 v-html="flippedCards[card.id] ? card.title : getHoverTitle(card.title)"></h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const heroCardChoices = ref([
  { id: "location-1", title: "CALDERAS RIDGE", description: "", image: "/images/location1.png" },
  { id: "location-2", title: "UMBARIAN SPIRE", description: "", image: "/images/location2.png" },
  { id: "location-3", group: "location", title: "Terraktopia", image: "/images/location3.png" },
  { id: "location-4", group: "location", title: "Luminwood Village", image: "/images/location4.png" },
  { id: "location-5", group: "location", title: "Analogicos", image: "/images/location5.png" },
  { id: "location-6", group: "location", title: "Salty Basins", image: "/images/location6.png" },
  { id: "item-1", group: "item", title: "Abyssal Bident", image: "/images/item1.png" },
  { id: "item-2", group: "item", title: "Maeve of Bronze", image: "/images/item2.png" },
  { id: "item-3", group: "item", title: "Emberwing Bow", image: "/images/item3.png" },
  { id: "item-4", group: "item", title: "The Candling", image: "/images/item4.png" },
  { id: "item-5", group: "item", title: "Cursed Pot of Fumora", image: "/images/item5.png" },
  { id: "item-6", group: "item", title: "Voltaris of Shocking", image: "/images/item6.png" },
  { id: "item-7", group: "item", title: "Morvath The Shaded", image: "/images/item7.png" },
  { id: "item-8", group: "item", title: "Potion of Heartiness", image: "/images/item8.png" },
  { id: "item-9", group: "item", title: "Ruby Monkey Plague", image: "/images/item9.png" },
  { id: "item-10", group: "item", title: "Grimtur The Boars Head", image: "/images/item10.png" },
  { id: "item-11", group: "item", title: "Black Lotus Cauldron", image: "/images/item11.png" },
  { id: "item-12", group: "item", title: "Ironclad Jacks Harpoon", image: "/images/item12.png" },
  { id: "water-1", title: "rippleback", description: "Water", image: "/images/water1.png" },
  { id: "fire-1", title: "SIR PYRHHUS", description: "Fire", image: "/images/fire1.png" }
]);

const heroActiveIndex = ref(0);
const heroFlipped = ref(false);
const activeHeroCard = computed(() => heroCardChoices.value[heroActiveIndex.value]);

const nextHeroCard = () => {
  heroActiveIndex.value = (heroActiveIndex.value + 1) % heroCardChoices.value.length;
  heroFlipped.value = false;
};

onMounted(() => setInterval(nextHeroCard, 5000));

const rows = ref([
  { id: "location", label: "Locations" },
  { id: "item", label: "Items" },
  { id: "light", label: "Lumenfolk" },
  { id: "dark", label: "voidweavers" },
  { id: "metal", label: "Automotrians" },
  { id: "water", label: "Mariniads" },
  { id: "fire", label: "emberforgers" },
  { id: "earth", label: "Terrankin" }
]);

const allCards = ref([
  { id: "location-1", group: "location", title: "CALDERAS RIDGE", image: "/images/location1.png" },
  { id: "location-2", group: "location", title: "UMBARIAN SPIRE", image: "/images/location2.png" },
  { id: "location-3", group: "location", title: "Terraktopia", image: "/images/location3.png" },
  { id: "location-4", group: "location", title: "Luminwood Village", image: "/images/location4.png" },
  { id: "location-5", group: "location", title: "Analogicos", image: "/images/location5.png" },
  { id: "location-6", group: "location", title: "Salty Basins", image: "/images/location6.png" },

  { id: "item-1", group: "item", title: "Abyssal Bident", image: "/images/item1.png" },
  { id: "item-2", group: "item", title: "Maeve of Bronze", image: "/images/item2.png" },
  { id: "item-3", group: "item", title: "Emberwing Bow", image: "/images/item3.png" },
  { id: "item-4", group: "item", title: "The Candling", image: "/images/item4.png" },
  { id: "item-5", group: "item", title: "Cursed Pot of Fumora", image: "/images/item5.png" },
  { id: "item-6", group: "item", title: "Voltaris of Shocking", image: "/images/item6.png" },
  { id: "item-7", group: "item", title: "Morvath The Shaded", image: "/images/item7.png" },
  { id: "item-8", group: "item", title: "Potion of Heartiness", image: "/images/item8.png" },
  { id: "item-9", group: "item", title: "Ruby Monkey Plague", image: "/images/item9.png" },
  { id: "item-10", group: "item", title: "Grimtur The Boars Head", image: "/images/item10.png" },
  { id: "item-11", group: "item", title: "Black Lotus Cauldron", image: "/images/item11.png" },
  { id: "item-12", group: "item", title: "Ironclad Jacks Harpoon", image: "/images/item12.png" },

  { id: "fire-1", group: "fire", title: "Sir Pyrhhus", image: "/images/fire1.png" },
  { id: "fire-2", group: "fire", title: "Ignivoros", image: "/images/fire2.png" },
  { id: "fire-3", group: "fire", title: "Akaryu", image: "/images/fire3.png" },

  { id: "earth-1", group: "earth", title: "Brontes", image: "/images/earth1.png" },
  { id: "earth-2", group: "earth", title: "Cragmaw", image: "/images/earth2.png" },
  { id: "earth-3", group: "earth", title: "Zharashka", image: "/images/earth3.png" },
  { id: "earth-4", group: "earth", title: "Gelos", image: "/images/earth4.png" },

  { id: "light-1", group: "light", title: "Faylume", image: "/images/light1.png" },
  { id: "light-2", group: "light", title: "Glorindel", image: "/images/light2.png" },
  { id: "light-3", group: "light", title: "Cymoanti", image: "/images/light3.png" },
  { id: "light-4", group: "light", title: "Cymoanti", image: "/images/light5.png" },

  { id: "metal-1", group: "metal", title: "cogmaw", image: "/images/metal1.png" },
  { id: "metal-2", group: "metal", title: "gearkraken", image: "/images/metal2.png" },
  { id: "metal-3", group: "metal", title: "gorgona", image: "/images/metal3.png" },
  { id: "metal-4", group: "metal", title: "gearkraken", image: "/images/metal4.png" },

  { id: "water-1", group: "water", title: "rippleback", image: "/images/water1.png" },
  { id: "water-2", group: "water", title: "tanglemane", image: "/images/water2.png" },
  { id: "water-3", group: "water", title: "ironclad jack", image: "/images/water3.png" },
  { id: "water-4", group: "water", title: "griffyn", image: "/images/water4.png" },

  { id: "dark-1", group: "dark", title: "duke alaric", image: "/images/dark1.png" },
  { id: "dark-2", group: "dark", title: "minnotaur", image: "/images/dark2.png" },
  { id: "dark-3", group: "dark", title: "morrathis", image: "/images/dark3.png" },
  { id: "dark-4", group: "dark", title: "snags", image: "/images/dark4.png" }
]);

const cardsByGroup = computed(() => {
  const groups = {};
  rows.value.forEach((row) => {
    groups[row.id] = allCards.value.filter((card) => card.group === row.id);
  });
  return groups;
});

const flippedCards = ref({});
const toggleCard = (id) => {
  flippedCards.value[id] = !flippedCards.value[id];
};

/**
 * Function to reformat the card title to display one word per line on hover.
 * This is bound to the v-html directive on the card-overlay h3.
 * @param {string} title The original card title.
 * @returns {string} The title with spaces replaced by <br> tags.
 */
const getHoverTitle = (title) => {
  // Replace spaces with HTML line breaks and return
  return title.replace(/\s/g, '<br>');
};
</script>

<style scoped>
/* GLOBAL FIX */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* ------------------- ⭐️ FLOATING KEYFRAMES (Adjusted) ⭐️ ------------------- */
@keyframes floatAnimation {
  0% {
    transform: translateY(0px) rotateZ(0deg);
  }
  50% {
    /* Increased distance from -10px to -20px */
    transform: translateY(-20px) rotateZ(1deg);
  }
  100% {
    transform: translateY(0px) rotateZ(0deg);
  }
}
/* --------------------------------------------------------------------- */

.contact-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: masonic-lodge;
}

/* HERO SECTION */
.champions-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10rem 5vw;
  gap: 2rem;
  box-sizing: border-box;
  max-width: 100%;
}

.hero-copy h1 {
  font-size: clamp(2rem, 4vw, 4rem);
}

.hero-copy p {
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.5;
}

.hero-card-wrapper {
  display: flex;
  justify-content: center;
}

.hero-card-image-wrapper {
  width: clamp(250px, 40vw, 420px);
  aspect-ratio: 3 / 4;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  /* ⭐️ APPLIED FLOATING ANIMATION (Adjusted speed from 6s to 4s) ⭐️ */
  animation: floatAnimation 4s ease-in-out infinite;
}

/* CARD FLIP FIX — prevents dark gaps */
.flip-card {
  perspective: 1200px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;

  /* KEY FIX — removes gaps/black spaces */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.hero-card-overlay {
  text-align: center;
  padding-top: 1rem;
}

/* CARD ROWS */
.card-rows {
  padding: 2rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-sizing: border-box;
  max-width: 100%;
}

.row-title {
  text-transform: uppercase;
  font-size: clamp(1.2rem, 2vw, 2rem);
  padding-left: 0.5rem;
}

.cards-container {
  display: grid;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;

  /* MODIFIED: Hard limit of 4 equal columns (1fr each) */
  grid-template-columns: repeat(4, 1fr);
}

.card {
  position: relative;
  aspect-ratio: 3 / 4;
  width: 100%;
  /* Max-width limits card growth on very wide screens, maintaining larger size */
  max-width: 280px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  /* FIX FOR FLIP GAP */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease;
}

.card:hover .card-overlay {
  opacity: 1;
}

/* STYLE FOR HOVER TEXT (one word per row) */
.card-overlay h3 {
  text-align: center;
  margin: 0;
}

/* RESPONSIVE RULES */
@media (max-width: 900px) {
  .champions-hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  /* Reduce to 3 columns on smaller tablets/laptops */
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 700px) {
  /* For small tablets, default to 2 columns */
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  /* For very small screens/phones, use 1 column */
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>
