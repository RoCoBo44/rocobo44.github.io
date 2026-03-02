<script setup>
import { ref, computed } from 'vue'
import { useSkillsStore } from '@/stores/useSkillsStore.js'
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'

const skillsStore = useSkillsStore()
const activeFilter = ref('All')

const filteredSkills = computed(() => {
  if (activeFilter.value === 'All') return skillsStore.skills_data
  return skillsStore.skills_data.filter(skill => skill.group && skill.group.includes(activeFilter.value))
})
</script>

<template>
  <section id="skills" class="section-container-light">
    <div class="content-wrapper">
      <ScrollReveal animation="zoom-in">
        <div class="section-header">
          <div class="section-subtitle-wrapper">
            <span class="section-line"></span>
            <p class="section-subtitle">Skills</p>
            <span class="section-line"></span>
          </div>
          <h2 class="section-title">My Skills</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in" delay="0.2s">
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            v-for="btn in skillsStore.skills_buttons" :key="btn.name"
            @click="activeFilter = btn.name"
            class="btn-filter"
            :class="activeFilter === btn.name ? 'btn-filter-active' : 'btn-filter-inactive'"
          >
            {{ btn.name }}
          </button>
        </div>
      </ScrollReveal>

      <div class="relative min-h-[400px]">
        <transition-group name="list" tag="div" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div 
            v-for="skill in filteredSkills" :key="skill.name"
            class="card-skill group"
          >
            <h3 class="text-lg font-bold text-gray-700 group-hover:text-primary transition-colors">{{ skill.name }}</h3>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}
.list-leave-active {
  position: absolute;
}
</style>
