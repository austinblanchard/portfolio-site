<template>
    <header>
        <div class="sky" :class="{ 'about-page': pageChange }" ref="sky"></div>
        <div class="title-wrapper" :class="{ 'about-page': pageChange }">
            <h1 class="title" v-if="!pageChange">
                Austin Blanchard
            </h1>
            <h1 class="about-title" v-else>
                Story
            </h1>
            <div class="subtitle" :class="{ 'about-page': pageChange }">Creative Web Developer</div>

            <div class="symbols" :class="{ 'about-page': pageChange }">
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

    props: {
        pageChange: {
            type: Boolean,
            default: false
        }
    },

    // animal change
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

    &.about-page {
        background: url('../assets/art.jpg');
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;

        @include bp(3) {
            background-position: center 80%;
        }
    }
}

.title-wrapper {
    max-width: 600px;
    margin: 0 auto;
    padding: $pad*10 0;

    @include bp(3) {
        padding: $pad*15 0;
    }

    &.about-page {
        // 

        @include bp(4) {
            padding: $pad*18 0;
        }
    }
}

.title {
    @include title-font();
    font-size: 24px;

    @include bp(3) {
        font-size: 36px;
    }
}

.about-title {
    @include about-title();
    color: $white;
    font-size: 70px;

    @include bp(3) {
        font-size: 100px;
    }
}

.subtitle {
    position: relative;
    margin-top: $pad;
    // color: white;
    color: $black;
    font-weight: 700;

    &.about-page {
        display: none;
    }
}

.symbols {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: $pad;

    &.about-page {
        display: none;
    }
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
    transition: all 200ms ease;

    &:hover {
        transform: scale(1.02);
    }

    // img {
    //     transition: all 1s ease;
    // }
}

</style>
