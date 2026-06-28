<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="icon-footer"><img :src="iconfathy" alt="iconfathy" loading="lazy" decoding="async"></div>
        <div class="footer-brand-title">
        <div class="footer-text"> فتحي عبدالعليم</div>
        <div class="footer-sub">حدايد · بوهيا · أدوات صحية</div>
        </div>
        </div>
        <p>
          محل عريق متخصص في توفير أجود مواد البناء والتشطيب بأسعار تنافسية وخدمة
          لا تنسى. نخدمك في كل خطوة من مشروعك.
        </p>
          <div class="social-section">
            <div class="social-label">تابعنا على</div>
            <div class="social-links">
              <a
                v-for="item in socialMedia"
                :key="item.icon"
                class="social-btn"
                :href="item.href"
                ><Icon :icon="item.icon" class="social-btn-icon"
              /></a>
            </div>
          </div>
      </div>

      <div
        class="footer-column"
        v-for="group in footerLinks"
        :key="group.title"
      >
        <div class="footer-col-title">{{ group.title }}</div>
        <ul class="footer-links">
          <li v-for="item in group.items" :key="item.label">
            <a href="#" @click.prevent="scrollToSection(item.href)">{{
              item.label
            }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-copy">
        © 2005  فتحي عبدالعليم · جميع الحقوق محفوظة
      </div>
 
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import iconfathy from "@/assets/imgs/fathyabdelalim.png"
defineProps({
  footerLinks: Array,
  socialMedia: Array,
  scrollToSection: Function,
});
</script>
