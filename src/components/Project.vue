<template>
    <section id="project-detail">
        <p>text {{ $route.params.projectSlug }}</p>
        <!-- <img src="{{ $route.params.desktopImage }}" alt=""> -->
    </section>
    
</template>

<script>
// import '../projects.json';
export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
}
</script>

<style lang="scss" scoped>
@import "../sass/resets/_company.scss";
@import "../sass/resets/_meyer-reset.scss";
@import "../sass/_variables.scss";
@import "../sass/_typography.scss";
@import "../sass/_buttons.scss";
@import "../sass/_breakpoints.scss";

section {
    

    padding: $pad*10 $pad*2;

    @include bp(2) {
        padding: $pad*18 $pad*2;
    }

}

.container {
    max-width: 600px;
    margin: 0 auto;

    text-align: center;
}


</style>
