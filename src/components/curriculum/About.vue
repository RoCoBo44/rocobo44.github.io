<script setup>
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'

const getAge = (dateString) => {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
</script>

<template>
  <section id="about" class="section-container-gray pb-12 -mt-6 z-20 rounded-t-[3rem] shadow-[0_-15px_30px_rgba(0,0,0,0.05)]">
    <div class="content-wrapper">
      <ScrollReveal animation="fade-up">
        <div class="card-about">
          <!-- Decor circles -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-primary/10 to-purple-400/10 rounded-full blur-3xl"></div>

          <div class="section-header relative z-10">
             <div class="section-subtitle-wrapper">
              <span class="section-line"></span>
              <p class="section-subtitle">Learn About Me</p>
              <span class="section-line"></span>
            </div>
            <h2 class="section-title">Who am I?</h2>
          </div>
          
          <div class="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto font-medium relative z-10">
            <p class="mb-6">
              I'm a <span class="text-primary font-bold">{{ getAge("1997/04/04") }}</span> years old Argentinian guy living in Italy. In April of 2021 I graduated as a Software Engineer and I'm eager to build impactful software and learn about new technologies.
            </p>
            <p>
              Being a <span class="text-primary font-serif italic text-2xl font-bold">"jack of all trades"</span> is my motto in life, that's why I like to work on projects where I can grow in many areas at the same time, such as Machine Learning, AI, Cloud Computing, Visual Computation, Full-Stack, VFX, and 3D animation.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
