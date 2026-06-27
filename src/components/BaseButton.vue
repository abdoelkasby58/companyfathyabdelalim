<template>
  <component
    :is="tag"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    :class="['base-button', `base-button--${variant}`, { 'base-button--disabled': disabled }]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  href: { type: String, default: '' },
  tag: { type: String, default: 'button' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 1.5rem;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
}

.base-button--primary {
  background: var(--gold);
  color: white;
  clip-path: polygon(0 0, 95% 0, 100% 25%, 100% 100%, 5% 100%, 0 75%);
}

.base-button--primary:hover {
  background: var(--gold-light);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(200, 146, 42, 0.4);
}

.base-button--outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.base-button--outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  transform: translateY(-3px);
}

.base-button--disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
