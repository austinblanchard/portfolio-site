<template>
  <div id="app" :class="{ 'loading': this.$store.state.isLoadingImages }">
        <div class="loader-bg" :class="{ 'loading': this.$store.state.isLoadingImages }">
            <div class="loader-wrapper">
                <div class="loader">
                    <div class="loader-bar-container">
                        <div class="loader-bar" v-bind:style="{ left: this.$store.state.loadingCount + '%' }"></div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="nav" :class="{ 'open': nav_is_open }">
            <div class="nav-socials" :class="{ 'light': lightIcons }">
                <a href="https://www.linkedin.com/in/austinblanchard" target="_blank" draggable="false"><svgicon icon="linkedin" /></a>
                <a href="https://github.com/austinblanchard" target="_blank" draggable="false"><svgicon icon="github-circle" /></a>
                <a href="mailto:austinpdx@gmail.com" target="_blank" draggable="false"><svgicon class="email" icon="email-outline" /></a>
            </div>
        </nav>

        <div class="sound" :class="{ 'light': lightIcons }" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" v-for="audio in audios" :key="audio.id">
            <img src="./assets/victrola.png" draggable="false" alt="play music">
            <div class="notes-wrapper" :class="{ 'playing': audio.isPlaying }">
                <div class="note one">&#9834;</div>
                <div class="note two">&#9834;</div>
                <div class="note three">&#9834;</div>
            </div>
        </div>

        <div class="menu" :class="{ 'on': nav_is_open }" @click="nav_is_open = !nav_is_open">
            <img class="bone two" src="./assets/bone2.png" draggable="false" alt="">
            <img class="bone one" src="./assets/bone.png" draggable="false" alt="">
        </div>

        <router-view @message="setIcons" />
  </div>
</template>

<script>
import './compiled-icons'
import Home from './views/Home.vue'
import { mapActions } from 'vuex'

export default {
    name: 'app',

    data() {
        return {
            nav_is_open: false,
            lightIcons: false,

            audios: [
                {
                    id: 'fats',
                    name: 'song',
                    file: new Audio(require('./assets/fats.mp3')),
                    isPlaying: false
                },
            ]
        }
    },

    methods: {
        play (audio) {
            audio.isPlaying = true;
            audio.file.play();
        },
        
        pause (audio) {
            audio.isPlaying = false;
            audio.file.pause();
        },

        setIcons(bool) {
            this.lightIcons = bool;
        }
    }
}
</script>

<style lang="scss">
@import "./sass/resets/_company.scss";
@import "./sass/resets/_meyer-reset.scss";
@import "./sass/_variables.scss";
@import "./sass/_typography.scss";
@import "./sass/_buttons.scss";
@import "./sass/_breakpoints.scss";

html {
    background-color: #000;
}

.loader-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;    
    background: #000;
    
    display: none;

    &.loading {
        display: block;
    }

    .loader-wrapper {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .loader {
        position: relative;

        width: 200px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loader-bar-container {
        position: absolute;
        left: 0;
        width: 100%;
        height: 10px;
        border-radius: 25px;
        border: 2px solid #cbe7ef;
        background: #d6e6ea;
        box-shadow: 0 0 0 #215c92, 0 0 0 #215c92, 0 0 9px #215c92, 0 0 9px #215c92, 0 0 9px #215c92, 0 0 9px #215c92, 0 0 9px #215c92;

        .loader-bar {
            position: absolute;
            background: #000;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 25px;
            // what does this transition do?
            transition: left .2s;
        }
    }
}

#app {
    position: relative;
    font-family: $quicksand;
    font-style: normal;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;

    &.loading {
        margin: 0;
        height: 100vh;
        overflow: hidden;
    }
}

.nav {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background: transparent;

    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    z-index: 2;
    transition: all 250ms ease;

    @include bp(3) {
        padding: 30px 0;
    }

    &.open {
        top: 0;
    }
}

.nav-socials {
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    width: 100%;

    @include bp(3) {
        max-width: 200px;
    }

    svg {
        color: $black;
        height: 30px;
        width: 30px;
        padding: 8px 8px;
        box-sizing: unset;
        transition: all 250ms ease;

        @include bp(3) {
            height: 36px;
            width: 36px;
        }

        &:hover {
            transform: scale(1.05);
        }

        &.email {
            height: 33px;

            @include bp(3) {
                height: 39px;
            }
        }
    }

    &.light {
        // 
        svg {
            color: $white;
        }
    }
}

.sound {
    position: absolute;
    top: $pad;
    left: $pad;
    height: 44px;
    z-index: 3;
    cursor: pointer;
    transition: all 250ms ease;
    // for music notes animation
    display: flex;

    @include bp(3) {
        top: $pad*3;
        left: $pad*3;
        height: 50px;
    }

    &.light .note {
        color: $white;
    }

    &:hover {
        transform: scale(1.05);
    }

    img {
        height: 100%;
    }
}

.notes-wrapper {
    position: relative;
    width: 25px;
    opacity: 0;
    transition: all 250ms ease;

    &.playing {
        opacity: 1;
    }

    .note {
        position: absolute;
        animation: notes 2s infinite linear;
        font-size: 10px;
        opacity: 0;
        color: #000;

        @include bp(3) {
            font-size: 14px;
        }

        &.one {
            top: 0;
            left: 8px;
            animation-delay: 0.5s;
            
            @include bp(3) {
                top: -5px;
                left: 14px;
            }
        }

        &.two {
            top: 8px;
            left: 3px;
            animation-delay: 1s;
            
            @include bp(3) {
                left: 6px;
            }
        }

        &.three {
            top: 0;
            left: 0;
            animation-delay: 1.5s;
            
            @include bp(3) {
                top: -5px;
                left: 3px;
            }
        }
    }
}

@keyframes notes {
    0% {
        transform: scale(1) translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: scale(1.5) translate(20%, -20%);
    }
    80% {
        opacity: 0;
        transform: scale(1.5) translate(40%, -40%);
    }
    100% {
        transform: scale(1.5) translate(60%, -60%);
        opacity: 0;
    }
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 3;
    top: $pad;
    right: $pad;
    width: 44px;
    height: 44px;
    // padding: 15px 0;
    cursor: pointer;

    @include bp(3) {
        top: $pad*3;
        right: $pad*3;
        height: 50px;
        width: 50px;
    }


    .bone {
        display: block;
        height: 22%;
        width: 100%;
        
        // background: $white;
        //
        position: absolute;
        left: 0;
        top: 50%;
        //
        transition: 0.1s ease-in-out;

        @include bp(3) {
            height: 24%;
        }

        &.one {
            transform: translate(0, -50%);
            margin-top: -(5px);

            @include bp(3) {
                margin-top: -(10px);
            }
        }
        &.two {
            transform: translate(0, -50%);
            margin-top: 10px;
        }
    }

    &.on {
        //
        .bone {
            // background: $black;
            &.one {
                transform: translate(0, -50%) rotate(45deg);
                margin-top: 0;
            }
            &.two {
                transform: translate(0, -50%) rotate(-45deg);
                margin-top: 0;
            }
        }
    }
}

</style>
