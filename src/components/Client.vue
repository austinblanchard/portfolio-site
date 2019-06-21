<template>
    <section id="client-detail">

        <div class="container">
            <!-- add loop -->
            <div class="project">
                <div class="project-details">
                    <h2>Fox Movies</h2>
                    <p>Services: Custom Film Themes</p>
                    <p>Tools: HTML/CSS, jQuery</p>
                </div>

                <div class="preview">
                    <!-- <div class="preview-container">
                        <img src="../assets/dark-phoenix-desktop.jpg" alt="">
                    </div> -->

                    <svgicon class="" icon="frame-laptop-phone" />
                    
                    <div class="desktop-wrapper">
                        <img src="../assets/work/dark-phoenix-desktop.jpg" draggable="false" alt="">
                    </div>

                    <div class="mobile-wrapper">
                        <img src="../assets/work/dark-phoenix-mobile.jpg" draggable="false" alt="">
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

    @include bp(3) {
        flex-direction: row;
    }
}

.project-details {
    width: 100%;

    @include bp(3) {
        width: 50%;
    }

    h2 {
        @include project-title();
        text-align: center;
        font-size: 26px;

        @include bp(2) {
            font-size: 30px;
        }

        @include bp(3) {
            text-align: left;
        }
    }

    p {
        @include futura();
        text-transform: uppercase;
        font-size: 12px;
        margin-top: $pad;
        color: $white;
        text-align: center;

        @include bp(2) {
            font-size: 14px;
        }

        @include bp(3) {
            text-align: left;
        }

        &:first-of-type {
            margin-top: $pad*2;
        }
    }
}

.preview {
    position: relative;
    width: 100%;
    margin-top: $pad*2;

    @include bp(3) {
        width: 50%;
        margin-top: 0;
    }

    svg {
        position: relative;
        color: $white;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }

    .desktop-wrapper {
        position: absolute;
        overflow-y: auto;
        top: 5.8%;
        height: 77.9%;
        left: 10.7%;
        width: 67.3%;
    }

    .mobile-wrapper {
        position: absolute;
        overflow-y: auto;
        top: 32.2%;
        height: 59.4%;
        width: 19.2%;
        left: 80.1%;
    }

    img {
        width: 100%;
        position: absolute;
        top: 0;
        // cursor: url('../assets/scroll-icon.svg'),auto;
    }
}



// .preview-container {
//     width: 100%;
//     margin: 0 auto;
//     border: 1px solid $white;
//     overflow: hidden;
//     overflow-y: auto;
//     height: 250px;

//     @include bp(2) {
//         height: 300px;
//     }

//     img {
//         width: 100%;
//     }
// }


</style>
