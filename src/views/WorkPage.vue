<template>
    <div class="work-page">
        <ClientHeader/>
        <Client/>
    </div>
</template>

<script>
// @ is an alias to /src
import ClientHeader from '@/components/ClientHeader.vue'
import Client from '@/components/Client.vue'
// import { mapActions } from 'vuex'

export default {
    name: 'work-page',
    components: {
        ClientHeader,
        Client
    },

    methods: {
        // ...mapActions([
        //     'loadWorkImages',
        // ]),
        changeIcons() {
            this.$emit("message", true);
        }
    },

    // beforeMount() {
    //     this.loadWorkImages();
    // }
}
</script>