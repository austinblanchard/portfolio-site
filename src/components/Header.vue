<template>
    <header>
        <div class="sky" ref="sky"></div>
        <div class="title-wrapper">
            <h1 class="title">
                Austin Blanchard
            </h1>
            <div class="subtitle">Creative Web Developer</div>

            <div class="symbols">
                <div class="symbol-wrapper">
                    <img src="../assets/palm.png" draggable="false" alt="">
                </div>

                <div class="symbol-wrapper">
                    <!-- <img src="../assets/giraffe.png" alt=""> -->
                    <!-- <img v-on:click="change" v-bind:src="'../assets/' + animals.image" alt=""> -->
                    <img class="animal" draggable="false" @click="change" v-bind:src="array[n]"/>
                    <!-- <p @click="n++">{{array[n]}}</p> -->
                </div>

                <div class="symbol-wrapper">
                    <img src="../assets/palm.png" draggable="false" alt="">
                </div>
            </div>

        </div>
        
    </header>
</template>

<script>
// import { TimelineLite } from 'gsap'

export default {

    // initial animal change

    data() {
        return {
            n: 0,
            array: [require('../assets/giraffe.png'), require('../assets/rhino.png'), require('../assets/cheetah.png')],
        }
    },

    methods: {
        change: function (event) {
            if (this.n >= this.array.length - 1) {
                this.n = 0
            } else {
                this.n++
            }
        }
    },

    // constant sky zoom
    // mounted() {
    //         const { sky } = this.$refs;
    //         const tl = new TimelineLite();

    //         tl.to(".sky",100,{scale:1.3,rotationZ:0.01});
    // },
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
    background: url('../assets/sky.jpg');
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
    max-width: 600px;
    margin: 0 auto;
    padding: $pad*10 0;

    @include bp(3) {
        padding: $pad*15 0;
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
