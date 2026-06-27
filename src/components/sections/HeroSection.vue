<template>
  <section class="hero" id="home">
    <div class="hero-bg-beams">
      <div class="beam beam-1"></div>
      <div class="beam beam-2"></div>
      <div class="beam beam-3"></div>
      <div class="beam beam-4"></div>
    </div>
    <div class="hero-grid-overlay"></div>

    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">
          <span class="eyebrow-dot"></span>
          المورد الأول · المنصورة
        </div>
        <h1 class="hero-title">
          <span class="gold">خبرة وثقة</span> <br />
          في الحدايد والبويات<br />
          <span class="stroke">والأدوات الصحية</span>
        </h1>
        <p class="hero-subtitle">
          أبناء فتحي عبدالعليم — وجهتك الأولى لأفضل مواد البناء والأدوات الصحية
          والبوهيا. نخدم أصحاب المنازل والمقاولين بأسعار الشركه وخدمة لا تنافس.
        </p>
        <div class="hero-btns">
          <BaseButton
            variant="primary"
            type="button"
            @click="scrollToSection('#products')"
          >
            استكشف المنتجات
            <span>←</span>
          </BaseButton>
          <BaseButton
            variant="outline"
            tag="button"
            type="button"
            @click="scrollToSection('#contact')"
          >
            تواصل معنا
          </BaseButton>
        </div>

        <div class="hero-stats">
          <div class="stat-item" v-for="stat in heroStats" :key="stat.label">
            <div class="stat-num">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-card-stack">
          <div class="floating-badge">
            <span class="text">منذ سنة</span>

            <div class="years">
              <span class="num">2005</span>
            </div>
          </div>
          <div class="product-showcase">
            <div class="showcase-title">▌ منتجاتنا الرئيسية</div>
            <div class="product-list">
              <div
                class="product-item"
                v-for="product in showcaseProducts"
                :key="product.name"
              >
                <Icon :icon="product.icon" class="product-icon" />
                <div>
                  <div class="product-item-name">{{ product.name }}</div>
                  <div class="product-item-sub">{{ product.sub }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import BaseButton from "../BaseButton.vue";

defineProps({
  heroStats: Array,
  showcaseProducts: Array,
  scrollToSection: Function,
});
</script>
