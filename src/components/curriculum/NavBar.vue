<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const isOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm" :class="{ 'py-2 shadow-md': scrolled, 'py-5': !scrolled }">
    <div class="content-wrapper flex flex-wrap justify-between items-center">
      <a href="/" class="text-2xl font-bold tracking-widest text-gray-800 transition-colors hover:text-primary">
        PORTFOLIO
      </a>
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100">
        <i class="fas fa-bars text-xl"></i>
      </button>
      <div :class="isOpen ? 'block' : 'hidden'" class="w-full md:flex md:w-auto md:items-center mt-4 md:mt-0 transition-all duration-300 origin-top">
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm font-semibold uppercase tracking-wider">
          <li><a @click="isOpen = false" href="/" class="block text-gray-700 hover:text-primary transition-colors">Home</a></li>
          <li><a @click="isOpen = false" href="/curriculum#about" class="block text-gray-700 hover:text-primary transition-colors">About</a></li>
          <li><a @click="isOpen = false" href="/curriculum#skills" class="block text-gray-700 hover:text-primary transition-colors">Skills</a></li>
          <li><a @click="isOpen = false" href="/curriculum#experience" class="block text-gray-700 hover:text-primary transition-colors">Experience</a></li>
          <li><a @click="isOpen = false" href="/curriculum#portfolio" class="block text-gray-700 hover:text-primary transition-colors">Portfolio</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>