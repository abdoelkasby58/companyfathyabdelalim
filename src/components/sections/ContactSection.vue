<template>
  <section class="contact-section section-pad" id="contact">
    <div class="container">
      <div
        class="contact-header"
        style="text-align: center; margin-bottom: 3rem"
      >
        <span class="section-eyebrow">تواصل معنا</span>
        <h2 class="section-title">
          نحن هنا <span class="accent">لخدمتك</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto">
          سجل بياناتك الآن، وسنتواصل معك عبر الواتساب في أقرب وقت
        </p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <div
            class="contact-card"
            v-for="card in contactCards"
            :key="card.label"
          >
            <div class="contact-card-icon"><Icon :icon="card.icon" /></div>
            <div>
              <div class="contact-card-label">{{ card.label }}</div>
              <div class="contact-card-value" :dir="card.dir || 'auto'">
                <div v-if="card.icon === 'mdi:whatsapp'">
                  <a
                    :href="whatsAppLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-card-value"
                    >{{ card.value }}</a
                  >
                </div>
                <div v-else-if="card.icon === 'mdi:phone'">
                  <a
                    :href="`tel:${card.value.replace(/[^0-9+]/g, '')}`"
                    class="contact-card-value"
                    >{{ card.value }}</a
                  >
                </div>
                <div v-else>{{ card.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <form
          ref="contactForm"
          class="contact-form-box"
          @submit.prevent="handleSubmit"
        >
          <div class="form-title">أرسل رسالة</div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">الاسم الكامل</label>
              <input
                class="form-input"
                type="text"
                name="user_name"
                placeholder="أحمد محمد"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label class="form-label">رقم الهاتف</label>
              <input
                class="form-input"
                type="tel"
                name="phone_number"
                placeholder="01X XXXX XXXX"
                dir="ltr"
                v-model="phone"
              />
            </div>
            <div class="form-group full">
              <label class="form-label">نوع الطلب</label>
              <select
                class="form-select"
                name="request_type"
                v-model="requestType"
              >
                <option value="">اختر نوع الطلب</option>
                <option>طلب حديد ومعادن</option>
                <option>طلب بوهيا وطلاء</option>
                <option>طلب أدوات صحية</option>
                <option>استشارة مشروع</option>
                <option>أخرى</option>
              </select>
            </div>
            <div class="form-group full">
              <label class="form-label">تفاصيل الطلب</label>
              <textarea
                class="form-textarea"
                name="message"
                placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                v-model="message"
              ></textarea>
            </div>
          </div>
          <div v-if="formError" class="form-error">{{ formError }}</div>
          <BaseButton
            variant="primary"
            type="submit"
            :disabled="isSubmitDisabled"
            class="form-submit"
          >
            {{ submitBtnText }}
          </BaseButton>
        </form>
        <div class="contact-google-maps">
          <div class="contact-map">
            <div class="contact-map-title">موقعنا على الخريطة</div>
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2697.8899876570467!2d31.484379999999998!3d31.17983199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEwJzQ3LjQiTiAzMcKwMjknMDMuOCJF!5e1!3m2!1sen!2seg!4v1782441738786!5m2!1sen!2seg"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/SGa2LBqYGGJTT7GD8"
              target="_blank"
              rel="noopener noreferrer"
              class="map-link"
            >
              فتح الموقع على خرائط جوجل
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import BaseButton from "../BaseButton.vue";

const props = defineProps({
  contactCards: Array,
  socialMedia: Array,
  isSubmitDisabled: Boolean,
  submitBtnText: String,
  submitForm: Function,
  whatsAppLink: Function,
});

const name = ref("");
const phone = ref("");
const requestType = ref("");
const message = ref("");
const formError = ref("");

const handleSubmit = async () => {
  formError.value = "";
  if (!name.value || !phone.value || !requestType.value || !message.value) {
    formError.value = "من فضلك أكمل جميع البيانات قبل الإرسال";
    return;
  }
  if (!props.submitForm) return;

  await props.submitForm({
    name: name.value,
    phone: phone.value,
    requestType: requestType.value,
    message: message.value,
  });
  name.value = "";
  phone.value = "";
  requestType.value = "";
  message.value = "";
};
</script>
