<script setup>
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'
</script>

<template>
  <footer class="bg-gray-900 text-white py-16 relative overflow-hidden">
    <!-- Decor Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

    <ScrollReveal animation="fade-in">
      <div class="content-wrapper text-center">
        <h2 class="text-4xl font-extrabold tracking-tight mb-2 drop-shadow-sm">Rodrigo Cobo</h2>
        <h3 class="text-xl text-gray-400 font-medium italic mb-8 flex items-center justify-center">
          <i class="fas fa-map-marker-alt text-primary mr-2"></i> Everything Everywhere All At Once
        </h3>
        
        <div class="inline-block px-8 py-4 bg-gray-800 rounded-2xl mb-10 border border-gray-700 shadow-inner">
          <a href="mailto:cobo.rodrigo@gmail.com" class="text-lg font-bold hover:text-primary transition-colors flex items-center text-gray-200">
             <i class="fas fa-envelope text-primary mr-3 text-xl"></i> cobo.rodrigo@gmail.com
          </a>
        </div>
        
        <div class="flex justify-center space-x-6 text-2xl">
          <a href="https://www.instagram.com/rocobo/" target="_blank" class="social-icon">
             <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/rocobo/" target="_blank" class="social-icon">
             <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/RoCoBo44" target="_blank" class="social-icon">
             <i class="fab fa-github"></i>
          </a>
        </div>

        <div class="mt-12 text-gray-500 text-sm font-medium">
          &copy; {{ new Date().getFullYear() }} Rodrigo Cobo. All Rights Reserved.
        </div>
      </div>
    </ScrollReveal>
  </footer>
</template>
