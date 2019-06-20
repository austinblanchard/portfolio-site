<template>
    <header>
        <div class="sky" ref="sky"></div>
        <div class="title-wrapper">
            <div class="logo">
                <svgicon class="fox" icon="fox" />
            </div>
        </div>
        
    </header>
</template>

<script>
// import { TimelineLite } from 'gsap'

export default {

}
</script>

<style lang="scss" scoped>
@import "../sass/resets/_company.scss";
@import "../sass/resets/_meyer-reset.scss";
@import "../sass/_variables.scss";
@import "../sass/_typography.scss";
@import "../sass/_buttons.scss";
@import "../sass/_breakpoints.scss";

header {
    position: relative;
    text-align: center;
}

.sky {
    background: url('../assets/download.jpg');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.title-wrapper {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    padding: $pad*10 0;
    z-index: 1;

    display: flex;
    justify-content: center;

    @include bp(3) {
        padding: $pad*15 0;
    }
}

.logo {
    width: 100px;
    text-align: center;

    @include bp(3) {
        width: 150px;
    }

    svg {
        width: 100%;
        height: 100%;

        color: $white;

    
    }
}





.title {
    @include title-font();
    font-size: 24px;

    @include bp(3) {
        font-size: 36px;
    }
}

.subtitle {
    position: relative;
    margin-top: $pad;
    // color: white;
    color: $black;
    font-weight: 700;
}

.symbols {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: $pad;
}

.symbol-wrapper {
    //

    img {
        height: 75px;

        @include bp(3) {
            height: 100px;
        }
    }
}

.animal {
    cursor: pointer;

    // img {
    //     transition: all 1s ease;
    // }
}

</style>
