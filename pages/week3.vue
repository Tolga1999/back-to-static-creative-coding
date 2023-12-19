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
}
.circle{
    background-color: red;
    width: 25em;
    height: 25em;
    border-radius: 50%;
    /* clip-path: circle(50% at 50% 50%); */
}
</style>