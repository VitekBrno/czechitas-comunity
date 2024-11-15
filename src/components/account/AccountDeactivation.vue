<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showConfirmation = ref(false)

const handleDeactivate = () => {
  // TODO: Implement account deactivation
  console.log('Account deactivation requested')
}
</script>

<template>
  <div class="account-deactivation">
    <button 
      v-if="!showConfirmation"
      class="btn btn-outline-danger w-100"
      @click="showConfirmation = true"
    >
      {{ t('account.deactivate.button') }}
    </button>

    <div v-else class="text-center">
      <p class="text-danger mb-3">
        {{ t('account.deactivate.confirmation') }}
      </p>
      <div class="d-flex gap-2">
        <button 
          class="btn btn-danger flex-grow-1"
          @click="handleDeactivate"
        >
          {{ t('account.deactivate.confirm') }}
        </button>
        <button 
          class="btn btn-light flex-grow-1"
          @click="showConfirmation = false"
        >
          {{ t('account.deactivate.cancel') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-deactivation {
  padding: 1rem;
  border-top: 1px solid var(--bs-gray-200);
}
</style>