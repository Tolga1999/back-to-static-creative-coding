<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import splittype lib
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // activate mystic wizard
  const wizardImg = document.querySelectorAll('.wizardImg');
  const overlay = document.querySelector('.overlay');

  wizardImg.forEach(img => {
    img.addEventListener('click', () => {
      if (overlay.classList.contains('remove-overlay')) {
        overlay.classList.remove('remove-overlay');
      } else {
        overlay.classList.add('remove-overlay');
      }
    })
  });

  // splittype free library (instead of club GSAP)
  new SplitType('.title-text')

  gsap.to('.char', { y: 0, stagger: 0.05, delay: 0.2, duration: 0.1 })
  gsap.fromTo('img', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })

  // mouse track
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to('.overlay', {
      '--x': `${x}%`,
      '--y': `${y}%`,
      duration: 0.3,
      ease: 'sine.out'
    })
  })
})
</script>

<template>
  <div class="main-container">
    <section>
      <h1 class="title-text">Partners Overzicht</h1>
      <img class="wizardImg" src="~/assets/img/wizard.png" alt="wizard hat image">
    </section>
  </div>

  <div class="overlay remove-overlay">
    <section>
      <h1 class="title-text">Mystical Cards</h1>
      <img class="wizardImg" src="~/assets/img/wizard2.png" alt="wizard hat image">
    </section>
    <div class="mystic-images">
      <img src="~/assets/img/mystic1.jpg" alt="mystic image">
      <img src="~/assets/img/mystic2.jpg" alt="mystic image">
      <img src="~/assets/img/mystic4.jpg" alt="mystic image">
      <img src="~/assets/img/mystic5.jpg" alt="mystic image">
      <img src="~/assets/img/mystic6.jpg" alt="mystic image">
    </div>
  </div>
</template>
