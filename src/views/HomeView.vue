<script setup>
import BaseButton from "@/components/BaseButton.vue";
import useHomePage from "../composables/useHomePage";
import { Icon } from "@iconify/vue";
import HeroSection from "../components/sections/HeroSection.vue";
import NavBar from "@/components/sections/NavBar.vue";
import { defineAsyncComponent } from "vue";

const AboutSection = defineAsyncComponent(
  () => import("../components/sections/AboutSection.vue"),
);

const ProductsSection = defineAsyncComponent(
  () => import("../components/sections/ProductsSection.vue"),
);

const GallerySection = defineAsyncComponent(
  () => import("../components/sections/GallerySection.vue"),
);

const WhyUsSection = defineAsyncComponent(
  () => import("../components/sections/WhyUsSection.vue"),
);

const ContactSection = defineAsyncComponent(
  () => import("../components/sections/ContactSection.vue"),
);

const FooterSection = defineAsyncComponent(
  () => import("../components/sections/FooterSection.vue"),
);
const {
  navLinks,
  heroStats,
  showcaseProducts,
  aboutIconItems,
  aboutFeatures,
  productCards,
  galleryItems,
  whyUsCards,
  trustItems,
  contactCards,
  socialMedia,
  footerLinks,
  mobileMenuOpen,
  toggleMenu,
  closeMenu,
  isNavElevated,
  showScrollTop,
  submitBtnText,
  isSubmitDisabled,
  submitForm,
  scrollToSection,
  whatsAppLink,
} = useHomePage();

const openWhatsApp = () => {
  if (!whatsAppLink.value || whatsAppLink.value === "#") return;
  window.open(whatsAppLink.value, "_blank");
};
</script>

<template>
  <div class="home-page">
    <NavBar
      :navbarStats="navLinks"
      :toggleStats="toggleMenu"
      :closeStats="closeMenu"
      :scrolltosec="scrollToSection"
      :navelevated="isNavElevated"
      :mobilemenu="mobileMenuOpen"
    />
    <HeroSection
      :heroStats="heroStats"
      :showcaseProducts="showcaseProducts"
      :scrollToSection="scrollToSection"
    />

    <div class="diagonal-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <polygon points="0,60 1440,0 1440,60" fill="var(--gold)" />
        <polygon points="0,60 1440,20 1440,60" fill="var(--gold)" />
      </svg>
    </div>

    <AboutSection
      :aboutIconItems="aboutIconItems"
      :aboutFeatures="aboutFeatures"
    />

    <ProductsSection :productCards="productCards" />

    <GallerySection :galleryItems="galleryItems" />

    <div class="diagonal-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <polygon points="0,0 1440,60 0,60" fill="var(--navy-dark)" />
      </svg>
    </div>

    <WhyUsSection
      :whyUsCards="whyUsCards"
      :trustItems="trustItems"
      :scrollToSection="scrollToSection"
    />

    <ContactSection
      :contactCards="contactCards"
      :socialMedia="socialMedia"
      :isSubmitDisabled="isSubmitDisabled"
      :submitBtnText="submitBtnText"
      :submitForm="submitForm"
      :whatsAppLink="whatsAppLink"
    />

    <FooterSection
      :footerLinks="footerLinks"
      :socialMedia="socialMedia"
      :scrollToSection="scrollToSection"
    />

    <button
      v-if="showScrollTop"
      class="scroll-top"
      type="button"
      @click="scrollToSection('#home')"
    >
      <Icon icon="mdi:arrow-top" />
    </button>

    <button class="whatsapp-icon" type="button" @click="openWhatsApp">
      <Icon icon="mdi:whatsapp" />
    </button>
  </div>
</template>
