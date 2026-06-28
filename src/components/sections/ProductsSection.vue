<template>
  <section class="products-section section-pad" id="products">
    <div class="container">
      <div class="products-header">
        <span class="section-eyebrow">ما نقدمه</span>
        <h2 class="section-title">
          منتجاتنا <span class="accent">الرئيسية</span>
        </h2>
        <p class="section-desc">
          تشكيلة متكاملة من مستلزمات البناء والتشطيب عالية الجودة تلائم كل
          المشاريع صغيرها وكبيرها.
        </p>
      </div>
      <div class="products-grid">
        <article
          class="product-card"
          v-for="card in productCards"
          :key="card.title"
        >
          <div class="product-card-top">
            <img
              :src="card.image"
              :alt="card.title"
              class="product-card-top-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="product-card-body">
            <span class="product-card-tag">{{ card.tag }}</span>
            <div class="product-card-title">{{ card.title }}</div>
            <p class="product-card-desc">{{ card.description }}</p>
            <div class="product-card-items">
              <span class="item-tag" v-for="item in card.items" :key="item">{{
                item
              }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  productCards: Array,
});
</script>
