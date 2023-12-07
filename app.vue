<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo('h1', { opacity: 0}, { opacity: 1, duration: 3})
})
</script>

<template>
  <section>
      <h1>Partners Overzicht</h1>
  </section>
</template>
