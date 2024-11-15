<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

defineProps<{
  collapsed: boolean
}>()
</script>

<template>
  <nav class="sidebar px-3 py-4" :class="{ 'collapsed': collapsed }">
    <div class="brand mb-4">
      <div class="d-flex align-items-center px-2">
        <img src="/vite.svg" alt="Czechitas Logo" class="me-2" style="height: 32px;" />
        <h5 class="m-0 text-czechitas" v-if="!collapsed">Czechitas</h5>
      </div>
      <div class="subtitle mt-2" v-if="!collapsed">#Komunita</div>
    </div>
    
    <div class="nav flex-column nav-pills">
      <router-link 
        v-for="(route, index) in router.options.routes.filter(r => r.path !== '/')" 
        :key="index"
        :to="route.path"
        class="nav-link mb-2"
        active-class="active">
        {{ t(`nav.${route.name?.toLowerCase()}`) }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.sidebar {
  width: 280px;
  min-width: 280px;
  height: 100vh;
  position: sticky;
  top: 0;
  transition: width 0.3s ease, min-width 0.3s ease;
  background-color: white;
  border-right: 1px solid var(--bs-gray-200);
  
  &.collapsed {
    width: 80px;
    min-width: 80px;
  }

  .brand {
    h5 {
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .subtitle {
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0.5rem 0;
      margin: 0 -1rem;
      text-align: center;
      background: linear-gradient(135deg, var(--czechitas-pink) 0%, var(--czechitas-title-blue) 100%);
      color: white;
      letter-spacing: 0.5px;
    }
  }

  .nav-link {
    color: var(--bs-gray-700);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--bs-gray-100);
      transform: translateX(4px);
    }
    
    &.active {
      background-color: var(--czechitas-blue);
      color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>