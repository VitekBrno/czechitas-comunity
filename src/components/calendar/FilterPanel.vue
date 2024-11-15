<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CITIES, THEMES, DELIVERY_METHODS } from '../../constants/filters'

const { t } = useI18n()
const props = defineProps<{
  filters: {
    search: string
    date: string
    deliveryMethod: string[]
    locations: string[]
    themes: string[]
  }
}>()

const emit = defineEmits<{
  (e: 'update-filter', key: string, value: any): void
}>()

const updateSearch = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update-filter', 'search', target.value)
}

const toggleFilter = (key: string, value: string) => {
  const currentValues = [...props.filters[key as keyof typeof props.filters] as string[]]
  const index = currentValues.indexOf(value)
  
  if (index === -1) {
    currentValues.push(value)
  } else {
    currentValues.splice(index, 1)
  }
  
  emit('update-filter', key, currentValues)
}
</script>

<template>
  <div class="card filter-panel">
    <div class="card-body">
      <h5 class="card-title mb-4">{{ t('calendar.filters.title') }}</h5>

      <!-- Search -->
      <div class="mb-4">
        <label class="form-label" for="search">{{ t('calendar.filters.search') }}</label>
        <input 
          type="text" 
          id="search"
          class="form-control" 
          :value="filters.search"
          @input="updateSearch"
        >
      </div>

      <!-- Date -->
      <div class="mb-4">
        <label class="form-label">{{ t('calendar.filters.date') }}</label>
        <input 
          type="date" 
          class="form-control" 
          :value="filters.date"
          @input="e => emit('update-filter', 'date', (e.target as HTMLInputElement).value)"
        >
      </div>

      <!-- Delivery Method -->
      <div class="mb-4">
        <label class="form-label">{{ t('calendar.filters.deliveryMethod') }}</label>
        <div class="form-check" v-for="method in DELIVERY_METHODS" :key="method">
          <input 
            class="form-check-input" 
            type="checkbox" 
            :id="'delivery-' + method"
            :checked="filters.deliveryMethod.includes(method)"
            @change="() => toggleFilter('deliveryMethod', method)"
          >
          <label class="form-check-label" :for="'delivery-' + method">
            {{ t(`calendar.deliveryMethods.${method}`) }}
          </label>
        </div>
      </div>

      <!-- Locations -->
      <div class="mb-4">
        <label class="form-label">{{ t('calendar.filters.locations') }}</label>
        <div class="form-check" v-for="city in CITIES" :key="city">
          <input 
            class="form-check-input" 
            type="checkbox" 
            :id="'location-' + city"
            :checked="filters.locations.includes(city)"
            @change="() => toggleFilter('locations', city)"
          >
          <label class="form-check-label" :for="'location-' + city">
            {{ city }}
          </label>
        </div>
      </div>

      <!-- Themes -->
      <div class="mb-4">
        <label class="form-label">{{ t('calendar.filters.themes') }}</label>
        <div class="form-check" v-for="theme in THEMES" :key="theme">
          <input 
            class="form-check-input" 
            type="checkbox" 
            :id="'theme-' + theme"
            :checked="filters.themes.includes(theme)"
            @change="() => toggleFilter('themes', theme)"
          >
          <label class="form-check-label" :for="'theme-' + theme">
            {{ t(`calendar.themes.${theme}`) }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-panel {
  position: sticky;
  top: 1rem;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;

  .form-check {
    margin-bottom: 0.5rem;
  }

  .form-check-label {
    color: var(--bs-gray-700);
    font-size: 0.9rem;
    cursor: pointer;
  }
}
</style>