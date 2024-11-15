<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CourseCard from './CourseCard.vue'
import type { Course } from '../../types'

const { t } = useI18n()
const props = defineProps<{
  courses: Course[]
  activeTab: string
}>()

const visibleCourses = computed(() => {
  if (!props.courses || !Array.isArray(props.courses)) {
    return []
  }

  const now = new Date()
  return props.courses.filter(course => {
    const courseDate = new Date(course.startDate)
    return props.activeTab === 'upcoming' 
      ? courseDate >= now 
      : courseDate < now
  }).sort((a, b) => {
    // Sort by date - ascending for upcoming, descending for past
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return props.activeTab === 'upcoming' ? dateA - dateB : dateB - dateA
  })
})
</script>

<template>
  <div v-if="visibleCourses.length > 0" class="row g-4">
    <div v-for="course in visibleCourses" 
         :key="course.id" 
         class="col-md-6">
      <CourseCard 
        v-if="course" 
        :course="course" 
      />
    </div>
  </div>
  <div v-else class="text-center py-5">
    <p class="text-muted">{{ t('calendar.noCourses') }}</p>
  </div>
</template>