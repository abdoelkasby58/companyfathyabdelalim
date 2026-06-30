<template>
  <section class="about-section section-pad" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual" v-reveal="{ x: -50, y: 0 }">
          <div class="about-img-frame">
            <div class="about-icon-grid">
              <div
                class="about-icon-item"
                v-for="(item, i) in aboutIconItems"
                :key="item.label"
                v-reveal="{ y: 20, delay: i * 0.08 }"
              >
                <Icon :icon="item.icon" class="about-item-icon" />
                <span class="lbl">{{ item.label }}</span>
              </div>
            </div>
            <div class="years-badge">
              <div class="num">21</div>
              <div class="txt">سنة خبرة</div>
            </div>
          </div>
        </div>
        <div class="about-text" v-reveal="{ x: 50, y: 0, delay: 0.1 }">
          <span class="section-eyebrow">من نحن</span>
          <h2 class="section-title">محل متجذر في<br /><span class="accent">ثقة العملاء</span></h2>
          <p class="section-desc">
             فتحي عبدالعليم مؤسسه عريقه متخصص في توفير أجود أصناف الحدايد والبوهيات والأدوات الصحية.
            نجمع بين خبرة الأجيال وحداثة الخدمة لنكون الخيار الأول لكل مقاول وصاحب منزل يبحث عن الجودة والسعر المناسب.
          </p>
          <div class="about-features">
            <div
              class="about-feature"
              v-for="(feature, i) in aboutFeatures"
              :key="feature.title"
              v-reveal="{ y: 20, delay: i * 0.1 }"
            >
              <Icon :icon="feature.icon" class="feature-icon" />
              <div>
                <div class="feature-title">{{ feature.title }}</div>
                <div class="feature-desc">{{ feature.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
 
    <div class="diagonal-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <polygon points="0,60 1440,0 1440,60" fill="var(--gold)" />
        <polygon points="0,60 1440,20 1440,60" fill="var(--gold)" />
      </svg>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  aboutIconItems: Array,
  aboutFeatures: Array,
})
</script>
