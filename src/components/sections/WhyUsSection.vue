<template>
  <section class="whyus-section section-pad" id="why">
    <div class="container">
      <div class="whyus-grid">
        <div v-reveal="{ x: -40, y: 0 }">
          <span class="section-eyebrow">مزايانا</span>
          <h2 class="section-title">لماذا يثق بنا<br /><span class="accent">مئات العملاء</span></h2>
          <p class="section-desc" style="margin-bottom:2rem">قرن من الخبرة في تجميل وبناء مصر نضع جودة المنتج وراحة العميل فوق كل اعتبار.</p>
          <div class="whyus-cards">
            <article
              class="whyus-card"
              v-for="(card, i) in whyUsCards"
              :key="card.title"
              v-reveal="{ y: 24, delay: i * 0.1 }"
            >
              <Icon :icon="card.icon" class="whyus-card-icon" />
              <div class="whyus-card-title">{{ card.title }}</div>
              <div class="whyus-card-desc">{{ card.description }}</div>
            </article>
          </div>
        </div>

        <div class="whyus-cta-block" v-reveal="{ x: 40, y: 0, delay: 0.15 }">
          <span class="section-eyebrow" style="color:var(--gold)">لماذا نحن</span>
          <h2 class="section-title" style="color:white; font-size:1.8rem">شريكك الموثوق<br />في كل مشروع</h2>
          <p class="section-desc" style="color:rgba(255,255,255,0.6); margin-bottom:2rem">من بناء المنازل الصغيرة إلى المشاريع الكبرى نوفر كل ما تحتاجه تحت سقف واحد بخدمة تتذكرها.</p>
          <div class="trust-items">
            <div class="trust-item" v-for="item in trustItems" :key="item">
              <div class="trust-check">✓</div>
              <span>{{ item }}</span>
            </div>
          </div>
          <BaseButton variant="primary" type="button" @click="scrollToSection('#contact')" class="cta-booking">
            احجز استشارة مجانية ←
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseButton from '../BaseButton.vue'

defineProps({
  whyUsCards: Array,
  trustItems: Array,
  scrollToSection: Function,
})
</script>
