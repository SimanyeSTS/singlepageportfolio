
<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingSection />
    </section>
    <section class="row" id="about">
      <AboutSection />
    </section>
    <section class="row" id="resume">

    </section>
    <section class="row" id="project">

    </section>
    <section class="row" id="testimonials">

    </section>
    <section class="row" id="reachMe">

    </section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection
  }
}
</script>
