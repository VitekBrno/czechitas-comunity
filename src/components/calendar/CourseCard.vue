<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { Course } from '../../types'

const { t } = useI18n()
const router = useRouter()
const props = defineProps<{
  course: Course
}>()

const formattedDates = computed(() => {
  const startDate = new Date(props.course.startDate)
  const endDate = new Date(props.course.endDate)
  
  const dateFormatter = new Intl.DateTimeFormat('cs', { 
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  
  const timeFormatter = new Intl.DateTimeFormat('cs', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return {
    startDate: dateFormatter.format(startDate),
    endDate: dateFormatter.format(endDate),
    time: `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`
  }
})

const availabilityPercentage = computed(() => {
  return Math.round((props.course.registered / props.course.capacity) * 100)
})

const progressBarClass = computed(() => {
  if (availabilityPercentage.value === 100) return 'bg-danger'
  if (availabilityPercentage.value >= 80) return 'bg-warning'
  return 'bg-success'
})

const isPastCourse = computed(() => {
  return new Date(props.course.endDate) < new Date()
})

const isRegistrationDisabled = computed(() => {
  return isPastCourse.value || props.course.registered >= props.course.capacity
})

const registrationButtonText = computed(() => {
  if (isPastCourse.value) return t('calendar.pastCourse')
  if (props.course.registered >= props.course.capacity) return t('calendar.soldOut')
  return t('calendar.register')
})

const formattedReward = computed(() => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0
  }).format(props.course.price)
})

const intensityLabel = computed(() => {
  return t(`calendar.intensity.${props.course.intensity}`)
})

const navigateToCourseDetail = () => {
  // Will be implemented when course detail page is added
  router.push(`/courses/${props.course.id}`)
}
</script>

<template>
  <div class="card h-100 course-card">
    <div class="card-body d-flex flex-column">
      <!-- Badges -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge theme-badge">
          {{ t(`calendar.themes.${course.theme}`) }}
        </span>
        <span class="badge" :class="course.deliveryMethod">
          {{ t(`calendar.deliveryMethods.${course.deliveryMethod}`) }}
        </span>
      </div>

      <!-- Title -->
      <a 
        href="#" 
        class="course-title-link mb-4"
        @click.prevent="navigateToCourseDetail"
      >
        <h5 class="card-title">{{ course.title }}</h5>
      </a>

      <!-- Course Info -->
      <div class="course-info mb-4">
        <div class="date-range mb-2">
          <i class="bi bi-calendar3 me-2"></i>
          <div class="d-inline-flex align-items-center">
            <strong>{{ formattedDates.startDate }}</strong>
            <span class="mx-2">-</span>
            <strong>{{ formattedDates.endDate }}</strong>
          </div>
        </div>
        <div class="mb-2">
          <i class="bi bi-clock me-2"></i>
          {{ formattedDates.time }}
        </div>
        <div class="mb-2">
          <i class="bi bi-geo-alt me-2"></i>
          {{ course.location }}
        </div>
      </div>

      <!-- Course Details -->
      <div class="course-details mb-4">
        <p class="card-text mb-3">{{ course.description }}</p>
        <div class="details-grid">
          <div class="detail-item">
            <i class="bi bi-speedometer2 me-2"></i>
            {{ intensityLabel }}
          </div>
          <div class="detail-item">
            <i class="bi bi-clock-history me-2"></i>
            {{ t('calendar.teachingHours', { hours: course.teachingHours }) }}
          </div>
        </div>
      </div>

      <!-- Instructors -->
      <div class="instructors mb-4">
        <h6 class="mb-3">
          <i class="bi bi-people me-2"></i>
          {{ t('calendar.instructors') }}
        </h6>
        <div class="instructor-list d-flex gap-3">
          <div v-for="instructor in course.instructors" 
               :key="instructor.name" 
               class="instructor-item">
            <img :src="instructor.photo" 
                 :alt="instructor.name"
                 class="instructor-photo me-2">
            <div class="instructor-info">
              <div class="instructor-name">{{ instructor.name }}</div>
              <div class="instructor-title">{{ instructor.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="card-footer mt-auto">
        <!-- Capacity Progress Bar -->
        <div class="capacity-section mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <small>{{ t('calendar.availability', {
              available: course.capacity - course.registered,
              total: course.capacity
            }) }}</small>
            <small>{{ availabilityPercentage }}%</small>
          </div>
          <div class="progress" style="height: 8px;">
            <div class="progress-bar" 
                 :class="progressBarClass"
                 role="progressbar" 
                 :style="{ width: `${availabilityPercentage}%` }" 
                 :aria-valuenow="availabilityPercentage" 
                 aria-valuemin="0" 
                 aria-valuemax="100">
            </div>
          </div>
        </div>

        <!-- Reward and Register Button -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="reward-badge">
            <i class="bi bi-gift me-2"></i>
            {{ t('calendar.reward', { amount: formattedReward }) }}
          </div>
          <button class="btn btn-czechitas"
                  :disabled="isRegistrationDisabled"
                  :class="{ 'btn-secondary': isRegistrationDisabled }">
            {{ registrationButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-card {
  border: 1px solid var(--bs-gray-200);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .card-body {
    padding: 1.5rem;
  }

  .badge {
    font-size: 0.8rem;
    padding: 0.5em 1em;
    font-weight: 500;
    letter-spacing: 0.3px;
    
    &.theme-badge {
      background-color: var(--bs-blue);
      color: white;
    }
    
    &.online {
      background-color: var(--bs-indigo);
      color: white;
    }
    
    &.hybrid {
      background-color: var(--bs-purple);
      color: white;
    }
    
    &.offline {
      background-color: var(--bs-teal);
      color: white;
    }
  }

  .course-title-link {
    text-decoration: none;
    
    &:hover .card-title {
      color: var(--czechitas-pink-dark);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--czechitas-pink);
      transition: color 0.2s ease;
      margin: 0;
    }
  }

  .course-info {
    font-size: 0.9rem;
    color: var(--bs-gray-700);

    .date-range {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .details-grid {
    display: grid;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--bs-gray-700);
  }

  .instructor-list {
    .instructor-item {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .instructor-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .instructor-info {
      .instructor-name {
        font-size: 0.9rem;
        font-weight: 500;
      }

      .instructor-title {
        font-size: 0.8rem;
        color: var(--bs-gray-600);
      }
    }
  }

  .card-footer {
    background: none;
    border-top: 1px solid var(--bs-gray-200);
    padding-top: 1rem;

    .reward-badge {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--bs-success);
      padding: 0.5rem 1rem;
      background-color: var(--bs-success-bg-subtle);
      border-radius: 0.5rem;
      white-space: nowrap;
    }

    .btn-czechitas {
      background-color: #ff4d6d;
      border-color: #ff4d6d;
      color: white;
      min-width: 120px;
      font-weight: 500;

      &:hover:not(:disabled) {
        background-color: #ff3d61;
        border-color: #ff3d61;
      }

      &:active:not(:disabled) {
        background-color: #ff2d55;
        border-color: #ff2d55;
      }

      &.btn-secondary {
        background-color: var(--bs-gray-500);
        border-color: var(--bs-gray-500);
      }
    }
  }

  .progress {
    background-color: var(--bs-gray-200);
    border-radius: 1rem;
    
    .progress-bar {
      border-radius: 1rem;
      transition: width 0.3s ease;
    }
  }
}
</style>