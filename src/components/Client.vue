<template>
    <section id="client-detail">

        <div class="container">
            <!-- add loop -->
            <div class="project">
                <div class="project-details">
                    <h2>Fox Movies</h2>
                    <p>Services: Custom Themes</p>
                </div>

                <div class="preview">
                    <div class="preview-container">
                        <img src="../assets/dark-phoenix-desktop.jpg" alt="">
                    </div>
                </div>
            </div>
            
        </div>



        <!-- <p>text {{ $route.params.clientSlug }}</p> -->
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

    background: url('../assets/wall.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0px 0px 96px 19px rgba(0,0,0,1);

    @include bp(1) {
        padding: $pad*10 $pad*4;
    }

    @include bp(2) {
        padding: $pad*18 $pad*10;
    }
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.project {
    display: flex;
    flex-direction: column;

    @include bp(2) {
        flex-direction: row;
    }
}

.project-details {
    width: 100%;

    @include bp(2) {
        width: 50%;
    }

    h2 {
        @include project-title();
    }

    p {
        @include standard-font();
        margin-top: $pad*2;
        color: $white;
    }
}

.preview {
    width: 100%;
    margin-top: $pad*2;

    @include bp(2) {
        width: 50%;
        margin-top: 0;
    }
}

.preview-container {
    width: 100%;
    margin: 0 auto;
    border: 1px solid $white;
    overflow: hidden;
    overflow-y: auto;
    height: 250px;

    @include bp(2) {
        height: 300px;
    }

    img {
        width: 100%;
    }
}


</style>
