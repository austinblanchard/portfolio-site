<template>
    <div class="home">
        <Header/>
        <About/>
        <Work/>
        <Contact/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import { mapActions } from 'vuex'


export default {
    name: 'home',
    components: {
        Header,
        About,
        Work,
        Contact
    },

    methods: {
        ...mapActions([
            'loadHomeImages',
        ]),
        changeIcons() {
            this.$emit("message", false);
        }
    },

    beforeMount() {
        this.loadHomeImages();
        this.changeIcons();
    }
}
</script>