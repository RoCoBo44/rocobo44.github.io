<script setup>
import { onMounted } from 'vue'
import { useSkillsStore } from '@/stores/useSkillsStore'
import { useExperienceStore } from '@/stores/useExperienceStore'
import { useProjectsStore } from '@/stores/useProjectsStore'

onMounted(() => {
  const skillsStore = useSkillsStore()
  const experienceStore = useExperienceStore()
  const projectsStore = useProjectsStore()

  // Initialize store data from static arrays only once across the whole app lifecycle
  skillsStore.connect()
  experienceStore.connect()
  projectsStore.connect()
})
</script>

<template>
  <div class="app relative">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* Global wowjs overrides if needed */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
