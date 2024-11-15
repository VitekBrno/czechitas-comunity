<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const handleSubmit = () => {
  // TODO: Implement password change
  console.log('Password change submitted:', form.value)
}
</script>

<template>
  <div class="password-change">
    <h2 class="mb-4">{{ t('account.password.title') }}</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">{{ t('account.password.current') }}</label>
        <input 
          type="password" 
          class="form-control" 
          v-model="form.currentPassword"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">{{ t('account.password.new') }}</label>
        <input 
          type="password" 
          class="form-control" 
          v-model="form.newPassword"
        >
      </div>

      <div class="mb-4">
        <label class="form-label">{{ t('account.password.confirm') }}</label>
        <input 
          type="password" 
          class="form-control" 
          v-model="form.confirmPassword"
        >
      </div>

      <button type="submit" class="btn btn-primary">
        {{ t('account.password.change') }}
      </button>
    </form>
  </div>
</template>