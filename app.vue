<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.set('.cursor', {
    xPercent: -50,
    yPercent: -50,
    scale: 0
  });

  let h1 = document.querySelector('h1');

  gsap.to('h1', { opacity: 0 });

  let animation = gsap.to("h1", {
    paused: true,
    opacity: 1
  })

  // h1.addEventListener('mouseenter', () => animation.play());
  // h1.addEventListener('mouseleave', () => animation.reverse());

  // gsap.fromTo('h1', { opacity: 0}, { opacity: 1, duration: 5})
})
</script>

<template>
  <div class="cursor"></div>
  <h1>Mythical</h1>
</template>
