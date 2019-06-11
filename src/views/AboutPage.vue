<template>
    <div class="about-page">
        <Header/>
        <About :hide-link="true" :show-text="true"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'

export default {
    name: 'about-page',
    components: {
        Header,
        About
    }
}


</script>