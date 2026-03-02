<script setup>
import { useExperienceStore } from '@/stores/useExperienceStore.js'
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'

const experienceStore = useExperienceStore()
</script>

<template>
  <section id="experience" class="section-container-gray overflow-hidden">
    <!-- Decor Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="content-wrapper">
      <ScrollReveal animation="zoom-in">
        <div class="section-header">
          <div class="section-subtitle-wrapper">
            <span class="section-line"></span>
            <p class="section-subtitle">My Resume</p>
            <span class="section-line"></span>
          </div>
          <h2 class="section-title">Experience</h2>
        </div>
      </ScrollReveal>

      <div class="relative max-w-5xl mx-auto pl-8 md:pl-0 mt-20">
        <!-- Vertical line -->
        <div class="absolute left-0 md:left-1/2 top-4 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 rounded-full"></div>
        
        <div 
          v-for="(item, index) in experienceStore.experience_data" 
          :key="index"
          class="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between w-full relative"
          :class="[index % 2 === 0 ? 'md:flex-row-reverse' : '']"
        >
          <ScrollReveal 
            :animation="index % 2 === 0 ? 'slide-left' : 'slide-right'"
            :delay="`${index * 0.1}s`"
            class="w-full flex flex-col md:flex-row items-start md:items-center justify-between"
            :class="[index % 2 === 0 ? 'md:flex-row-reverse' : '']"
          >
          <!-- Content Box -->
          <div class="order-1 w-full md:w-[45%]">
             <div 
               class="card-experience group"
               :class="item.star ? 'bg-gradient-to-br from-amber-50 to-white border-amber-200' : 'bg-white border-white/50'"
             >
               <!-- Connector Arrow (Desktop) -->
               <div 
                 class="hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent"
                 :class="index % 2 === 0 ? '-left-4 border-r-8 border-r-white' : '-right-4 border-l-8 border-l-white'"
                 v-if="!item.star"
               ></div>
               <div 
                 class="hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent"
                 :class="index % 2 === 0 ? '-left-4 border-r-8 border-r-amber-50' : '-right-4 border-l-8 border-l-amber-50'"
                 v-if="item.star"
               ></div>

               <div class="text-primary font-black tracking-widest text-sm mb-3 uppercase flex items-center">
                 <i class="far fa-calendar-alt mr-2"></i> {{ item.date }}
               </div>
               <h2 class="text-2xl font-extrabold text-gray-800 mb-2 leading-tight group-hover:text-primary transition-colors">{{ item.rol }}</h2>
               <h4 class="text-md text-gray-500 font-semibold mb-4 flex items-center">
                  <i class="fas fa-map-marker-alt mr-2 text-gray-400"></i> {{ item.place }}
               </h4>
               <div class="text-gray-600 leading-relaxed font-medium">
                  <span v-for="desc in item.info" :key="desc" class="block mb-2 last:mb-0">{{ desc }}</span>
               </div>
               <!-- Star icon for highlights -->
               <div v-if="item.star" class="absolute -top-4 -right-4 bg-amber-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                 <i class="fas fa-star text-xl"></i>
               </div>
             </div>
          </div>
          
          <!-- Timeline Node -->
          <div class="order-1 absolute left-[-6px] top-6 md:top-1/2 md:-translate-y-1/2 md:static md:w-14 items-center justify-center hidden md:flex">
            <div class="w-5 h-5 bg-white border-4 border-primary rounded-full shadow-lg z-10 relative pulse-animation"></div>
          </div>
          <div class="order-1 absolute left-[-4px] top-8 items-center justify-center md:hidden flex">
             <div class="w-4 h-4 bg-primary rounded-full z-10 relative shadow-lg shadow-primary/50 border-2 border-white"></div>
          </div>
          
            <!-- Empty Space for alternating -->
            <div class="order-1 w-full md:w-[45%] hidden md:block"></div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pulse-animation {
  box-shadow: 0 0 0 0 rgba(239, 35, 60, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 35, 60, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(239, 35, 60, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 35, 60, 0);
  }
}
</style>
