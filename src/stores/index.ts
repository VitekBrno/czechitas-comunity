import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null,
    courses: [],
    loading: false,
    error: null
  }),
  
  actions: {
    // Actions will be implemented later
  }
})