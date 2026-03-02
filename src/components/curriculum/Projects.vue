<script setup>
import { ref, computed } from 'vue'
import { useProjectsStore } from '@/stores/useProjectsStore.js'
import github_image from '@/img/github.png'
import colab_image from '@/img/colab.png'
import yb_image from '@/img/YouTube.png'
import document_image from '@/img/document.png'
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'

const projectsStore = useProjectsStore()
const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projectsStore.projects_data
  return projectsStore.projects_data.filter(project => project.group && project.group.includes(activeFilter.value))
})
</script>

<template>
  <section id="portfolio" class="section-container-light">
    <div class="content-wrapper">
      <ScrollReveal animation="zoom-in" delay="0.1s">
        <div class="section-header">
          <div class="section-subtitle-wrapper">
            <span class="section-line"></span>
            <p class="section-subtitle">My Portfolio</p>
            <span class="section-line"></span>
          </div>
          <h2 class="section-title">Personal Projects</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="zoom-in" delay="0.2s">
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            v-for="btn in projectsStore.projects_buttons" :key="btn.name"
            @click="activeFilter = btn.name"
            class="btn-filter"
            :class="activeFilter === btn.name ? 'btn-filter-active' : 'btn-filter-inactive'"
          >
            {{ btn.name }}
          </button>
        </div>
      </ScrollReveal>

      <div class="relative min-h-[600px]">
        <transition-group name="grid" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" :key="project.name"
            class="card-project group"
          >
            <div class="relative overflow-hidden h-64 bg-gray-100">
               <!-- Image fallback support -->
               <img :src="project.image" :alt="project.name" class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop';"/>
               <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
               <h3 class="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-tight drop-shadow-md z-10">{{ project.name }}</h3>
            </div>
            
            <div class="p-6 flex flex-col flex-1 relative">
              <!-- Fixed height container for description to prevent layout shifts/flickering -->
              <div class="relative mb-6 h-24 md:h-28">
                <p class="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4 group-hover:line-clamp-none group-hover:absolute group-hover:inset-0 group-hover:bg-white group-hover:h-auto group-hover:z-20 transition-all duration-300">
                  {{ project.description }}
                </p>
              </div>
              
              <div class="mt-auto pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <a v-if="project.link" :href="project.link" target="_blank" class="text-sm font-bold text-primary hover:text-red-700 transition-colors uppercase tracking-wider">
                  View Demo <i class="fas fa-arrow-right ml-1"></i>
                </a>
                
                <div class="flex gap-3 ml-auto">
                  <a v-if="project.github" :href="project.github" target="_blank" class="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                    <img :src="github_image" alt="GitHub" class="w-8 h-8 rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/25/25231.png';"/>
                  </a>
                  <a v-if="project.colab" :href="project.colab" target="_blank" class="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                    <img :src="colab_image" alt="Colab" class="w-8 h-8 rounded-full" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg';"/>
                  </a>
                  <a v-if="project.youtube" :href="project.youtube" target="_blank" class="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                    <img :src="yb_image" alt="YouTube" class="w-8 h-8 rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png';"/>
                  </a>
                  <a v-if="project.document" :href="project.document" target="_blank" class="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                    <img :src="document_image" alt="Document" class="w-8 h-8 rounded-full" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2991/2991108.png';"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(40px);
}
.grid-leave-active {
  position: absolute;
}
</style>
