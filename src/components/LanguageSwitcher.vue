<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'cs' ? 'en' : 'cs'
}
</script>

<template>
  <button 
    @click="toggleLanguage" 
    class="btn btn-outline-primary">
    {{ locale === 'cs' ? 'EN' : 'CS' }}
  </button>
</template>