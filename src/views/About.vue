<template>
    <div class="about-page">
        <Header/>
        <About/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'

export default {
    name: 'home',
    components: {
        Header,
        About
    }
}


</script>