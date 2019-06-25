<template>
    <div class="about-page">
        <Header :page-change="true"/>
        <About :hide-link="true" :show-text="true" :page-change="true"/>
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

<style lang="scss">
    // html {
    //     background-color: #D5BB96;
    // }
</style>
