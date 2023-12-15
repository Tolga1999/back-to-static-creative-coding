<script setup>

const QUERY = `
{
  websites(first: 6) {
    titel
    preview {
      url(transformation: {image: {resize: {height: 800, width: 800, fit: scale}}})
    }
  }
}
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });

console.log(data)

onMounted(() => {
    const images = document.querySelectorAll('article');
    console.log(images);

    images.forEach(image => {
        // get width and height item
        const height = image.clientHeight;
        const width = image.clientWidth;

        image.addEventListener('mousemove', (e) => {
            let xValue = e.clientX;
            let yValue = e.clientY;


            // LOOK AT THIS ONE MORE TIME!

            const yRotation = 20 * ((xValue - width / 2) / width)
            /* Calculate the rotation along the X-axis */
            const xRotation = -20 * ((yValue - height / 2) / height)

            /* Generate string for CSS transform property */
            const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

            /* Apply the calculated transformation */
            image.style.transform = string
        })

        image.addEventListener('mouseout', () => {
            image.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
        })
    });
})

// totaal aantal articles
let totalArticles = 21;
</script>

<template>
    <main>
        <section>
            <article v-for="article in totalArticles"></article>
        </section>
    </main>
</template>

<style scoped>

section {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 1rem;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

article:hover {
    cursor: pointer;
}

article {
    min-height: 5em;
    width: 100%;
    transition: transform 0.1s;
}

/* sizes within grid */
article:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #FF8080;
}

article:nth-child(2) {
    grid-column: span 1;
    grid-row: span 3;
    background-color: #FFCF96;
}

article:nth-child(3) {
    grid-column: span 2;
    grid-row: span 1;
    background-color: #F6FDC3;
}

article:nth-child(4) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #CDFAD5;
}

article:nth-child(5) {
    grid-column: span 1;
    grid-row: span 2;
    background-color: #711DB0;
}

article:nth-child(6) {
    grid-column: span 2;
    grid-row: span 1;
    background-color: #EF4040;
}

article:nth-child(7) {
    grid-column: span 1;
    grid-row: span 6;
    background-color: #C21292;
}

article:nth-child(8) {
    grid-column: span 1;
    grid-row: span 2;
    background-color: #FFA732;
}

article:nth-child(9) {
    grid-column: span 3;
    grid-row: span 2;
    background-color: #C5E898;
}

article:nth-child(10) {
    grid-column: span 1;
    grid-row: span 2;
    background-color: #F3F3F3;
}

article:nth-child(11) {
    grid-column: span 1;
    grid-row: span 5;
    background-color: #FED9ED;
}

article:nth-child(12) {
    grid-column: span 1;
    grid-row: span 1;
    background-color: #67729D;
}

article:nth-child(13) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #EBE76C;
}

article:nth-child(14) {
    grid-column: span 2;
    grid-row: span 3;
    background-color: #47A992;
}

article:nth-child(15) {
    grid-column: span 2;
    grid-row: span 1;
    background-color: #7A3E3E;
}

article:nth-child(16) {
    grid-column: span 1;
    grid-row: span 3;
    background-color: #5F6F52;
}

article:nth-child(17) {
    grid-column: span 1;
    grid-row: span 2;
    background-color: #B15EFF;
}

article:nth-child(18) {
    grid-column: span 2;
    grid-row: span 1;
    background-color: #FF90BC;
}

article:nth-child(19) {
    grid-column: span 4;
    grid-row: span 1;
    background-color: #F9F9E0;
}

article:nth-child(20) {
    grid-column: span 1;
    grid-row: span 1;
    background-color:#0F2167;
}

article:nth-child(21) {
    grid-column: span 1;
    grid-row: span 1;
    background-color: #F11A7B;
}
</style>