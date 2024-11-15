<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BasicInfo from '../components/account/BasicInfo.vue'
import PasswordChange from '../components/account/PasswordChange.vue'
import VolunteerProfile from '../components/account/VolunteerProfile.vue'
import AccountDeactivation from '../components/account/AccountDeactivation.vue'

const { t } = useI18n()
const activeTab = ref('basic-info')

const tabs = computed(() => [
  {
    id: 'basic-info',
    icon: 'person-circle',
    title: t('account.tabs.basicInfo'),
    component: BasicInfo,
    active: true
  },
  {
    id: 'password',
    icon: 'key',
    title: t('account.tabs.password'),
    component: PasswordChange,
    active: true
  },
  {
    id: 'volunteer',
    icon: 'heart',
    title: t('account.tabs.volunteer'),
    component: VolunteerProfile,
    active: true
  },
  {
    id: 'contracts',
    icon: 'file-earmark-text',
    title: t('account.tabs.contracts'),
    component: null,
    active: false
  },
  {
    id: 'questionnaire',
    icon: 'clipboard-check',
    title: t('account.tabs.questionnaire'),
    component: null,
    active: false
  },
  {
    id: 'lecturer',
    icon: 'easel',
    title: t('account.tabs.lecturer'),
    component: null,
    active: false
  },
  {
    id: 'coach',
    icon: 'people',
    title: t('account.tabs.coach'),
    component: null,
    active: false
  },
  {
    id: 'workshop',
    icon: 'laptop',
    title: t('account.tabs.workshop'),
    component: null,
    active: false
  },
  {
    id: 'photographer',
    icon: 'camera',
    title: t('account.tabs.photographer'),
    component: null,
    active: false
  }
])
</script>

<template>
  <div class="account-view">
    <h1 class="mb-4">{{ t('account.title') }}</h1>

    <div class="row">
      <!-- Tabs Navigation -->
      <div class="col-md-3">
        <div class="nav flex-column nav-pills account-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="nav-link"
            :class="{ 
              active: activeTab === tab.id,
              disabled: !tab.active 
            }"
            @click="tab.active && (activeTab = tab.id)"
          >
            <i class="bi" :class="`bi-${tab.icon}`"></i>
            <span>{{ tab.title }}</span>
            <span v-if="!tab.active" class="coming-soon">
              {{ t('account.comingSoon') }}
            </span>
          </button>
        </div>

        <!-- Deactivation -->
        <div class="mt-4">
          <AccountDeactivation />
        </div>
      </div>

      <!-- Tab Content -->
      <div class="col-md-9">
        <div class="tab-content p-4 bg-white rounded-3 shadow-sm">
          <component 
            :is="tabs.find(t => t.id === activeTab)?.component" 
            v-if="tabs.find(t => t.id === activeTab)?.active"
          />
          <div 
            v-else
            class="text-center py-5 text-muted"
          >
            {{ t('account.sectionInDevelopment') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-view {
  .account-tabs {
    .nav-link {
      display: flex;
      align-items: center;
      padding: 1rem;
      color: var(--bs-gray-700);
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      transition: all 0.2s ease;
      position: relative;
      
      i {
        margin-right: 0.75rem;
        font-size: 1.2rem;
      }

      &:not(.disabled):hover {
        background-color: var(--bs-gray-100);
        transform: translateX(4px);
      }
      
      &.active {
        background-color: var(--czechitas-blue);
        color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      &.disabled {
        opacity: 0.7;
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      }

      .coming-soon {
        position: absolute;
        right: 1rem;
        font-size: 0.75rem;
        background-color: var(--bs-gray-200);
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        color: var(--bs-gray-600);
      }
    }
  }

  .tab-content {
    min-height: 400px;
  }
}
</style>