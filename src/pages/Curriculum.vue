<script setup>
import NavBar from '@/components/curriculum/NavBar.vue'
import Intro from '@/components/curriculum/Intro.vue'
import About from '@/components/curriculum/About.vue'
import Skills from '@/components/curriculum/Skills.vue'
import Experience from '@/components/curriculum/Experience.vue'
import Projects from '@/components/curriculum/Projects.vue'
// import Contact from '@/components/curriculum/Contact.vue'
import FooterComponent from '@/components/curriculum/FooterComponent.vue'
</script>

<template>
  <div class="relative">
    <NavBar />
    <Intro />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <!-- Contact -->
    <FooterComponent />
  </div>
</template>
