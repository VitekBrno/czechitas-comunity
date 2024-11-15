<script setup lang="ts">
import { ref } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const isSidebarCollapsed = ref(false)
</script>

<template>
  <div class="d-flex">
    <SidebarNav :collapsed="isSidebarCollapsed" />
    <main class="flex-grow-1 main-content">
      <div class="container-fluid">
        <div class="d-flex justify-content-end mb-4">
          <LanguageSwitcher />
        </div>
        <router-view />
      </div>
    </main>
  </div>
</template>