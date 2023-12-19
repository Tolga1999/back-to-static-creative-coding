<template>
    <main>
        <div class="circle"></div>
    </main>
</template>

<style scoped>
main{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/img/snow03.gif');
    background-repeat: repeat;
    background-size: contain;
}
.circle{
    background-color: red;
    width: 25em;
    height: 25em;
    border-radius: 50%;
    /* clip-path: circle(50% at 50% 50%); */
    background-image: url('../assets/img/christmas.svg');
    /* mix-blend-mode: overlay; */
}
</style>