<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { THEMES } from '../../constants/filters'

const { t } = useI18n()

const form = ref({
  phone: '',
  preferredTheme: '',
  bio: '',
  availability: {
    weekdays: false,
    weekends: false,
    evenings: false
  }
})

const handleSubmit = () => {
  // TODO: Implement form submission
  console.log('Volunteer profile submitted:', form.value)
}
</script>

<template>
  <div class="volunteer-profile">
    <h2 class="mb-4">{{ t('account.volunteer.title') }}</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">{{ t('account.volunteer.phone') }}</label>
        <input 
          type="tel" 
          class="form-control" 
          v-model="form.phone"
          :placeholder="t('account.volunteer.phonePlaceholder')"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">{{ t('account.volunteer.preferredTheme') }}</label>
        <select class="form-select" v-model="form.preferredTheme">
          <option value="">{{ t('account.volunteer.selectTheme') }}</option>
          <option 
            v-for="theme in THEMES" 
            :key="theme" 
            :value="theme"
          >
            {{ t(`calendar.themes.${theme}`) }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">{{ t('account.volunteer.bio') }}</label>
        <textarea 
          class="form-control" 
          v-model="form.bio"
          rows="4"
          :placeholder="t('account.volunteer.bioPlaceholder')"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="form-label d-block">{{ t('account.volunteer.availability') }}</label>
        <div class="form-check">
          <input 
            type="checkbox" 
            class="form-check-input" 
            id="weekdays"
            v-model="form.availability.weekdays"
          >
          <label class="form-check-label" for="weekdays">
            {{ t('account.volunteer.weekdays') }}
          </label>
        </div>
        <div class="form-check">
          <input 
            type="checkbox" 
            class="form-check-input" 
            id="weekends"
            v-model="form.availability.weekends"
          >
          <label class="form-check-label" for="weekends">
            {{ t('account.volunteer.weekends') }}
          </label>
        </div>
        <div class="form-check">
          <input 
            type="checkbox" 
            class="form-check-input" 
            id="evenings"
            v-model="form.availability.evenings"
          >
          <label class="form-check-label" for="evenings">
            {{ t('account.volunteer.evenings') }}
          </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        {{ t('account.volunteer.save') }}
      </button>
    </form>
  </div>
</template>