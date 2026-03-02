<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const texts = [
  'Software Engineer',
  '3D/VFX Artist',
  'Data Scientist',
  'Full-Stack Engineer',
  'Puns Enthusiast',
  'ML Engineer'
]
const displayText = ref('')
let timeoutId = null

const typeWriter = () => {
  let currentIndex = 0
  let currentTextIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  const type = () => {
    const currentText = texts[currentTextIndex]
    
    if (isDeleting) {
      displayText.value = currentText.substring(0, currentIndex - 1)
      currentIndex--
      typingSpeed = 50
    } else {
      displayText.value = currentText.substring(0, currentIndex + 1)
      currentIndex++
      typingSpeed = 100
    }

    if (!isDeleting && currentIndex === currentText.length) {
      typingSpeed = 2000
      isDeleting = true
    } else if (isDeleting && currentIndex === 0) {
      isDeleting = false
      currentTextIndex = (currentTextIndex + 1) % texts.length
      typingSpeed = 500
    }

    timeoutId = setTimeout(type, typingSpeed)
  }
  
  type()
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <section id="home" class="relative w-full min-h-screen bg-gradient-to-br from-[#ff6363] to-[#ffab76] flex items-center pt-20 pb-12 overflow-hidden">
    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between">
        
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-white">
          <ScrollReveal animation="slide-left" duration="1s">
            <p class="text-xl md:text-2xl font-medium mb-3">I'm</p>
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-md">Rodrigo Cobo</h1>
            <h2 class="text-3xl md:text-4xl font-semibold h-[48px] drop-shadow-sm flex items-center">
              <span class="mr-1">{{ displayText }}</span><span class="animate-pulse">|</span>
            </h2>
            
            <div class="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/rocobo/" target="_blank" class="btn-primary bg-white text-primary hover:bg-gray-100 hover:text-primary">
                Hire Me
              </a>
              <a href="mailto:rocobo44@gmail.com" class="btn-outline">
                Contact Me
              </a>
            </div>

            <div class="mt-10 flex gap-6 text-2xl">
              <a href="https://www.instagram.com/rocobo/" target="_blank" class="header-icon"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/rocobo/" target="_blank" class="header-icon"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/RoCoBo44" target="_blank" class="header-icon"><i class="fab fa-github"></i></a>
            </div>
          </ScrollReveal>
        </div>

        <div class="w-full md:w-1/2 mt-12 md:mt-0 hidden md:block">
          <ScrollReveal animation="slide-right" delay="0.5s" duration="1s">
            <div class="relative w-full flex justify-center lg:justify-end pr-0 lg:pr-10">
               <img src="/src/img/hero3.png" alt="Hero Image" class="max-w-[80%] max-h-[80%] drop-shadow-2xl object-cover mix-blend-multiply rounded-2xl"/>
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-20 hidden md:block pointer-events-none mix-blend-overlay"></div>
  </section>
</template>
