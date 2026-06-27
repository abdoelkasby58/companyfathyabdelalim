<script setup>
import { Icon } from "@iconify/vue";
import BaseButton from "../BaseButton.vue";
import useTheme from "@/composables/useTheme";
import icondiaa from "@/assets/imgs/fathyabdelalim.png"
const { theme, toggleTheme } = useTheme();
defineProps({
  navbarStats: Array,
  toggleStats: Array,
  closeStats: Array,
  scrolltosec: Array,
  navelevated: Array,
  mobilemenu: Array,
});
</script>
<template>
  <nav class="navbar" :class="{ scrolled: navelevated }">
    <div class="nav-inner">
      <a href="#home" class="nav-logo" @click.prevent="scrolltosec('#home')">
        <div class="logo-icon"><img :src="icondiaa" alt=""></div>
        <div class="logo-text">
          <div class="main">فتحي عبدالعليم</div>
          <div class="sub">حدايد · بوهيا · أدوات صحية</div>
        </div>
      </a>

      <ul class="nav-links" :class="{ open: mobilemenu }">
        <li v-for="link in navbarStats" :key="link.href">
          <a href="#" @click.prevent="scrolltosec(link.href)">
            {{ link.label }}
          </a>
        </li>
        <li class="nav-menu-actions mobile-only">
          <BaseButton
            variant="primary"
            type="button"
            @click="scrolltosec('#contact')"
            class="nav-cta"
          >
            اطلب الآن
          </BaseButton>
          <button class="theme-toggle" type="button" @click="toggleTheme" aria-label="Toggle theme">
            <Icon :icon="theme === 'dark' ? 'mdi:weather-night' : 'mdi:white-balance-sunny'" />
          </button>
        </li>
      </ul>
      <div class="btn-responsive-dark-and-order">
      <BaseButton
        variant="primary"
        type="button"
        @click="scrolltosec('#contact')"
        class="nav-cta"
      >
        اطلب الآن
      </BaseButton>

      <button class="theme-toggle" type="button" @click="toggleTheme" aria-label="Toggle theme">
        <Icon :icon="theme === 'dark' ? 'mdi:weather-night' : 'mdi:white-balance-sunny'" />
      </button>
      </div>
      <button class="nav-hamburger" type="button" @click="toggleStats">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  </nav>
</template>
