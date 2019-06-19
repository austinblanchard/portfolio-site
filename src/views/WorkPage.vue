<template>
    <div class="work-page">
        <Header/>
        <Client/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Client from '@/components/Client.vue'

export default {
    name: 'work-page',
    components: {
        Header,
        Client
    }
}


</script>