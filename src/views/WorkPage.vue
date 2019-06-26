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

export default {
    name: 'work-page',
    components: {
        ClientHeader,
        Client
    },

    methods: {
        changeIcons() {
            this.$emit("message", true);
        }
    },

    beforeMount() {
        this.changeIcons();
    }
}
</script>