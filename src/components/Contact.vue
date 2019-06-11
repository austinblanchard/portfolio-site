<template>
    <section id="contact">
        <div class="bg-image">
            <div class="porthole"></div>
            <div class="container">
                <h2 class="title">
                    Contact
                </h2>

                <a class="link" href="mailto:austinpdx@gmail.com">
                    <span>Email Me</span>
                </a>

                <a class="link" href="./austin-blanchard-resume.pdf" download>
                    <span>Résumé</span>
                </a>

            </div>
        </div>
    </section>
    
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
import '../ripples.js'

export default {

    mounted() {
        $('.bg-image').ripples({
            imageUrl: (require('../assets/underwater.jpg')),
            perturbance: 0.02
        });
        $( 'canvas' ).css( "border-radius", "100px" );
    }
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
    background-color: #000;
}

.bg-image {
    position: relative;
    height: 100%;
    width: 100%;

    background: url('../assets/underwater.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 100px;

    padding: $pad*12 $pad*2;

    @include bp(2) {
        padding: $pad*18 $pad*2;
    }

    @include bp(3) {
        padding: $pad*24 $pad*2;
    }
}

.porthole {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: inset 0px 0px 33px 19px rgba(0,0,0,1);
    border-radius: 100px;
}

.container {
    max-width: 600px;
    margin: 0 auto;

    text-align: center;
}

.title {
    // @include title-font();
    @include futura();
    color: $white;
    // text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    padding-bottom: $pad*2;
    font-size: 22px;

    @include bp(2) {
        font-size: 28px;
    }
}

.copy {
    @include standard-font();
}

.link {
    @include standard-button();
    margin-top: $pad;
    display: inline-block;
    color: $yellow;

    &:after {
        background: $yellow;
    }
}

</style>
