<script setup>
import ScrollReveal from '@/components/curriculum/common/ScrollReveal.vue'
// Contact logic could be added here
</script>

<template>
  <section id="contact" class="section-container-gray z-20">
    <div class="absolute inset-0 bg-primary/5 skewed-y-3 transform -skew-y-3 origin-top-left -z-10"></div>
    <div class="content-wrapper max-w-4xl">
      <ScrollReveal animation="fade-up">
        <div class="section-header">
          <div class="section-subtitle-wrapper">
            <span class="section-line"></span>
            <p class="section-subtitle">Get in touch</p>
            <span class="section-line"></span>
          </div>
          <h2 class="section-title">Contact Me</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay="0.2s">
        <div class="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-16">
          <form name="sentMessage" id="contactForm" novalidate="novalidate" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="control-group">
                <label class="form-label">Name</label>
                <input type="text" class="form-input" id="name" placeholder="Your Name" required="required" />
              </div>
              <div class="control-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" id="email" placeholder="Your Email" required="required" />
              </div>
            </div>
            
            <div class="control-group">
              <label class="form-label">Subject</label>
              <input type="text" class="form-input" id="subject" placeholder="Subject" required="required" />
            </div>
            <div class="control-group">
              <label class="form-label">Message</label>
              <textarea class="form-input h-40 resize-none" id="message" placeholder="Your Message" required="required"></textarea>
            </div>
            
            <div class="pt-4 text-center">
              <button class="btn-primary w-full md:w-auto min-w-[200px]" type="submit" id="sendMessageButton">
                <i class="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
