<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  username: '',
  firstName: '',
  lastName: '',
  email: ''
})

const handleSubmit = () => {
  // TODO: Implement form submission
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="basic-info">
    <h2 class="mb-4">{{ t('account.basicInfo.title') }}</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">{{ t('account.basicInfo.username') }}</label>
        <input 
          type="text" 
          class="form-control" 
          v-model="form.username"
          :placeholder="t('account.basicInfo.usernamePlaceholder')"
        >
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label class="form-label">{{ t('account.basicInfo.firstName') }}</label>
          <input 
            type="text" 
            class="form-control" 
            v-model="form.firstName"
            :placeholder="t('account.basicInfo.firstNamePlaceholder')"
          >
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ t('account.basicInfo.lastName') }}</label>
          <input 
            type="text" 
            class="form-control" 
            v-model="form.lastName"
            :placeholder="t('account.basicInfo.lastNamePlaceholder')"
          >
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label">{{ t('account.basicInfo.email') }}</label>
        <input 
          type="email" 
          class="form-control" 
          v-model="form.email"
          :placeholder="t('account.basicInfo.emailPlaceholder')"
        >
      </div>

      <button type="submit" class="btn btn-primary">
        {{ t('account.basicInfo.save') }}
      </button>
    </form>
  </div>
</template>