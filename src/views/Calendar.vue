<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterPanel from '../components/calendar/FilterPanel.vue'
import CourseList from '../components/calendar/CourseList.vue'
import { useCourseFilters } from '../composables/useCourseFilters'

const { t } = useI18n()
const activeTab = ref('upcoming')

const {
  filters,
  updateFilter,
  filteredCourses
} = useCourseFilters()

const toggleTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <div class="calendar-view">
    <h1 class="mb-4">{{ t('calendar.title') }}</h1>
    
    <div class="row g-4">
      <!-- Filter Panel -->
      <div class="col-lg-3">
        <FilterPanel 
          :filters="filters" 
          @update-filter="updateFilter" 
        />
      </div>

      <!-- Course List -->
      <div class="col-lg-9">
        <!-- Tabs -->
        <div class="card mb-4">
          <div class="card-body p-2">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <button 
                  class="nav-link" 
                  :class="{ active: activeTab === 'upcoming' }"
                  @click="toggleTab('upcoming')"
                >
                  {{ t('calendar.tabs.upcoming') }}
                </button>
              </li>
              <li class="nav-item">
                <button 
                  class="nav-link" 
                  :class="{ active: activeTab === 'past' }"
                  @click="toggleTab('past')"
                >
                  {{ t('calendar.tabs.past') }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Course Cards -->
        <CourseList 
          :courses="filteredCourses"
          :active-tab="activeTab"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar-view {
  .nav-pills {
    .nav-link {
      color: var(--bs-gray-700);
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      
      &:hover {
        background-color: var(--bs-gray-100);
      }
      
      &.active {
        background-color: var(--czechitas-blue);
        color: white;
      }
    }
  }
}
</style>