<template>
    <div class="home">
        <Nav/>
        <Header/>
        <About/>
        <Work/>
        <Contact/>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'


export default {
    name: 'home',
    components: {
        Nav,
        Header,
        About,
        Work,
        Contact
    }
}
</script>
