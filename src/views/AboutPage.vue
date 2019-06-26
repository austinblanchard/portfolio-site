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
import { mapActions } from 'vuex'

export default {
    name: 'about-page',
    components: {
        Header,
        About
    },

    methods: {
        ...mapActions([
            'loadAboutImages',
        ]),
    },

    beforeMount() {
        this.loadAboutImages();
    }
}

</script>