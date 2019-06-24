<template>
    <section id="about">
        <img class="frame top" draggable="false" src="../assets/frame-top.png" alt="">
        <img class="frame bottom" draggable="false" src="../assets/frame-top.png" alt="">
        <div class="container">
            <h2 class="title">
                Story
            </h2>

            <p class="copy">Hello. To get to the long and short of it, my name is Austin, and I like to make good-looking and fun-to-use things on the web. I didn’t start here, far from it. I studied language, traveled the world a bit, made some lifelong friends, and eventually found my way back to learning a new skill. I suppose the first thing that attracted me to web development was building out a little world, a space that looked and behaved the way I imagined. But as I learned more about the tools available to me, my mind began to wander and I realized the possibilities were nearly endless…</p>

            <!-- <p class="copy page-copy" :class="{ 'show': showText }">More text.</p> -->

            <!-- <router-link class="link" :class="{ 'hidden': hideLink }" to="/about">More</router-link>  -->
        </div>
    </section>
    
</template>

<script>
export default {

    props: {
        hideLink: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: false
        }
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
    position: relative;
    overflow: hidden;
    
    background: url('../assets/about.jpg');
    // background: #FDDD98;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

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

.frame {
    position: absolute;

    &.top {
        height: 35px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        @include bp(2) {
            height: 50px;
        }
    }

    &.bottom {
        height: 35px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) scaleY(-1);

        @include bp(2) {
            height: 50px;
        }
    }

    // &.left {
    //     left: 0;
    //     top: 0;
    // }

    // &.right {
    //     right: 0;
    //     top: 0;
    // }
}

.title {
    @include futura();
    color: $black;
    text-align: center;
    padding-bottom: $pad*2;
    font-size: 22px;

    @include bp(2) {
        font-size: 28px;
    }

    // &:after {
    //     color: red;
    //     content: attr(data-text);
    //     position: absolute;
    //     -webkit-text-stroke: 0.150em #d9a3ff;
    //     left: 0;
    //     z-index: -2;
    //     font-size: 1em;
    // }
}

.copy {
    @include standard-font();
    text-align: left;
}

.page-copy {
    display: none;
    margin-top: $pad;

    &.show {
        display: block;
    }
}

.link {
    @include standard-button();
    margin-top: $pad;
    display: inline-block;
    color: $black;

    &.hidden {
        display: none;
    }
}

</style>
