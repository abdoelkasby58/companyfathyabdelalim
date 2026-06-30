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
        <div class="hero-eyebrow" ref="eyebrowEl">
          <span class="eyebrow-dot"></span>
          المورد الأول · المنصورة
        </div>
        <h1 class="hero-title" ref="titleEl">
          <span class="gold">خبرة وثقة</span> <br />
          في الحدايد والبويات<br />
          <span class="stroke">والأدوات الصحية</span>
        </h1>
        <p class="hero-subtitle" ref="subtitleEl">
          أبناء فتحي عبدالعليم — وجهتك الأولى لأفضل مواد البناء والأدوات الصحية
          والبوهيا. نخدم أصحاب المنازل والمقاولين بأسعار الشركه وخدمة لا تنافس.
        </p>
        <div class="hero-btns" ref="btnsEl">
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

        <div class="hero-stats" ref="statsEl">
          <div class="stat-item">
            <div class="stat-num">{{ experinceyears }}+</div>
            <div class="stat-label">سنة خبرة</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">{{ clients }}+</div>
            <div class="stat-label">عميل راض</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">{{ qualityassurance }}%</div>
            <div class="stat-label">ضمان الجودة</div>
          </div>
        </div>
      </div>

      <div class="hero-visual" ref="visualEl">
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
import { onMounted, ref } from "vue";
import gsap from "gsap";

defineProps({
  showcaseProducts: Array,
  scrollToSection: Function,
});
const experinceyears = ref(0);
const clients = ref(0);
const qualityassurance = ref(0);

// Refs for the hero entrance animation
const eyebrowEl = ref(null);
const titleEl = ref(null);
const subtitleEl = ref(null);
const btnsEl = ref(null);
const statsEl = ref(null);
const visualEl = ref(null);

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(eyebrowEl.value, { opacity: 0, y: 20, duration: 0.6 })
      .from(
        titleEl.value,
        { opacity: 0, y: 30, duration: 0.8 },
        "-=0.35",
      )
      .from(
        subtitleEl.value,
        { opacity: 0, y: 20, duration: 0.7 },
        "-=0.45",
      )
      .from(
        btnsEl.value.children,
        { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 },
        "-=0.4",
      )
      .from(
        statsEl.value.children,
        { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 },
        "-=0.35",
      )
      .from(
        visualEl.value,
        { opacity: 0, x: 40, duration: 0.9 },
        "-=0.8",
      );
  }

  gsap.to(experinceyears, {
    value: 21,
    duration: 6,
    delay: 1,
    ease: "power3.out",
    roundProps: "value",
    onUpdate: () => {
      experinceyears.value = Math.floor(experinceyears.value);
    },
  });
  gsap.to(clients, {
    value: 1000,
    duration:6,
    delay: 1,
    ease: "power3.out",
    roundProps: "value",
    onUpdate: () => {
      clients.value = Math.floor(clients.value);
    },
  });
  gsap.to(qualityassurance, {
    value: 100,
    duration: 6,
    delay: 1,
    ease: "power3.out",
    roundProps: "value",
    onUpdate: () => {
      qualityassurance.value = Math.floor(qualityassurance.value);
    },
  });
});
</script>
