<template>
    <div class="work-page">
        <Nav :light-icons="true"/>
        <ClientHeader/>
        <Client/>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import ClientHeader from '@/components/ClientHeader.vue'
import Client from '@/components/Client.vue'

export default {
    name: 'work-page',
    components: {
        Nav,
        ClientHeader,
        Client
    }
}


</script>