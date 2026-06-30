<template>
  <section class="gallery-section section-pad" id="gallery">
    <div class="container">
      <div class="gallery-header" v-reveal>
        <span
          class="section-eyebrow"
          style="color: var(--gold); border-right-color: var(--gold)"
          >معرضنا</span
        >
        <h2 class="section-title" style="color: white">
          من داخل <span style="color: var(--gold)">المحل</span>
        </h2>
        <p class="section-desc" style="color: rgba(255, 255, 255, 0.5)">
          استعرض مخزوننا الضخم وتشكيلتنا المتنوعة
        </p>
      </div>

      <div class="gallery-grid">
        <div
          class="gallery-item"
          v-for="(item, i) in galleryItems"
          :key="item.label"
          :class="item.gridClass"
          v-reveal="{ scale: 0.9, y: 20, delay: (i % 4) * 0.08 }"
        >
          <img
            :src="item.image"
            :alt="item.label"
            class="gallery-img"
            loading="lazy"
            decoding="async"
          />

          <div class="gallery-fade"></div>

          <span class="gallery-item-label">{{ item.label }}</span>

          <div class="gallery-overlay">
            <span class="gallery-overlay-text">{{ item.overlay }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  galleryItems: Array,
});
</script>
