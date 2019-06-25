<template>
    <section id="about" :class="{ 'page-styles': pageChange }">
        <img class="frame top" draggable="false" src="../assets/frame-top.png" alt="">
        <img class="frame bottom" draggable="false" src="../assets/frame-top.png" alt="">
        <div class="container">
            <h2 class="title" :class="{ 'page-styles': pageChange }">
                Story
            </h2>

            <p class="copy" :class="{ 'hidden': hideLink }">Hello. To get to the long and short of it, my name is Austin, and I like to make good-looking and fun-to-use things on the web. I didn’t start here, far from it. I studied language, traveled the world a bit, made some lifelong friends, and eventually found my way back to learning a new skill. I suppose the first thing that attracted me to web development was building out a little world, a space that looked and behaved the way I imagined. But as I learned more about the tools available to me, my mind began to wander and I realized the possibilities were nearly endless…</p>

            <p class="copy page-copy" :class="{ 'show': showText }">Upon returning home to Portland, OR after a few years of traveling and teaching, I enrolled in a 20 week, full-time programing bootcamp called Epicodus. I learned the basics of HTML/CSS, JavaScript and PHP, and decided to look for a job in a new city. I arrived in Los Angeles in the summer of 2017, and began working as a contractor for a digital agency called PXL, specializing in entertainment and brand marketing.</p>

            <p class="copy page-copy" :class="{ 'show': showText }">After one year of full-time contract work, I was offered an employee position. Over the following year and a half I took ownership of creating all custom film pages for FoxMovies.com, made updates to various Universal studio websites, built high-performing microsites for titles like Deadpool and American Horror Story, coded all promotional emails for Paramount Movies that went out to a mailing list of +200k, and was part of a team that built multiple full-scale studio websites like DreamWorks.com.</p>

            <p class="copy page-copy" :class="{ 'show': showText }">Before going into web development, I had completed two years of service in AmeriCorps, where the slogan is “Getting things done.” I found that to be a similar ethic at PXL, where each project that came along had a new challenge, and the only way to keep up is to continue learning and stay humble about what you know and how you can grow. I enjoy collaborating in team settings, and can also manage a project on my own. I tend to gravitate toward front-end challenges, but am happy to learn whatever is required.</p>

            <router-link class="link" :class="{ 'hidden': !hideLink }" to="/">Back</router-link> 
            <router-link class="link" :class="{ 'hidden': hideLink }" to="/about">More</router-link> 
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
        },
        pageChange: {
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

    &.page-styles {
        background: url('../assets/sand.jpg');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
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

    &.page-styles {
        display: none;
    }

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

    &.hidden {
        display: none;
    }
}

.page-copy {
    display: none;
    @include standard-font();
    text-align: left;

    &:not(:nth-of-type(2)) {
        margin-top: $pad;
    }

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
