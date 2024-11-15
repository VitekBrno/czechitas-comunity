import { ref, computed } from 'vue'
import { mockCourses } from '../data/mockCourses'

export function useCourseFilters() {
  const filters = ref({
    search: '',
    date: '',
    deliveryMethod: [] as string[],
    locations: [] as string[],
    themes: [] as string[]
  })

  const filteredCourses = computed(() => {
    return mockCourses.filter(course => {
      // Search filter
      if (filters.value.search) {
        const searchTerm = filters.value.search.toLowerCase()
        if (!course.title.toLowerCase().includes(searchTerm) &&
            !course.description.toLowerCase().includes(searchTerm)) {
          return false
        }
      }

      // Date filter
      if (filters.value.date) {
        const filterDate = new Date(filters.value.date)
        const courseStartDate = new Date(course.startDate)
        const courseEndDate = new Date(course.endDate)
        
        // Check if the selected date falls within the course duration
        if (filterDate < courseStartDate || filterDate > courseEndDate) {
          return false
        }
      }

      // Delivery method filter
      if (filters.value.deliveryMethod.length > 0 &&
          !filters.value.deliveryMethod.includes(course.deliveryMethod)) {
        return false
      }

      // Location filter
      if (filters.value.locations.length > 0 &&
          !filters.value.locations.includes(course.location)) {
        return false
      }

      // Theme filter
      if (filters.value.themes.length > 0 &&
          !filters.value.themes.includes(course.theme)) {
        return false
      }

      return true
    })
  })

  const updateFilter = (key: string, value: any) => {
    filters.value[key as keyof typeof filters.value] = value
  }

  return {
    filters,
    updateFilter,
    filteredCourses // Fixed: Changed from filteredCourse to filteredCourses
  }
}