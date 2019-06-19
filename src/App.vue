<template>
  <div id="app">
      <nav class="nav" :class="{ 'open': nav_is_open }">
            <div class="nav-socials">
                <a href="https://www.linkedin.com/in/austinblanchard" target="_blank"><svgicon icon="linkedin" /></a>
                <a href="https://github.com/austinblanchard" target="_blank"><svgicon icon="github-circle" /></a>
                <a href="mailto:austinpdx@gmail.com" target="_blank"><svgicon class="email" icon="email-outline" /></a>
            </div>
        </nav>

        <div class="sound" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" v-for="audio in audios" :key="audio.id">
            <img src="./assets/victrola.png" alt="play music">
            <div class="notes-wrapper" :class="{ 'playing': audio.isPlaying }">
                <div class="note one">&#9834;</div>
                <div class="note two">&#9834;</div>
                <div class="note three">&#9834;</div>
            </div>
        </div>

        <div class="menu" :class="{ 'on': nav_is_open }" @click="nav_is_open = !nav_is_open">
            <img class="bone two" src="./assets/bone2.png" alt="">
            <img class="bone one" src="./assets/bone.png" alt="">
        </div>


    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import './compiled-icons'
import Home from './views/Home.vue'
// import Header from './components/Header.vue'
// import About from './components/About.vue'
// import Work from './components/Work.vue'
// import Contact from './components/Contact.vue'

export default {
    name: 'app',
    // components: {
    //     Header,
    //     About,
    //     Work,
    //     Contact
    // },

    data() {
        return {
            nav_is_open: false,

            audios: [
                {
                    id: 'fats',
                    name: 'song',
                    file: new Audio(require('./assets/audio/fats.mp3')),
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
        }
    },

    // created: function() {
    // 	alert('Hello');
    // },

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
    background-color: #2196C1;
}

#app {
    font-family: $quicksand;
    font-style: normal;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
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
        // box-shadow: 0px 13px 49px 2px rgba(128,128,128,1);
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

// [v-cloak] > * { display: none; }
// [v-cloak]::before {
//     content: '';
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     z-index: 1;
//     width: 150px;
//     height: 150px;
//     margin: -75px 0 0 -75px;
//     border: 16px solid #f3f3f3;
//     border-radius: 50%;
//     border-top: 16px solid #3498db;
//     width: 120px;
//     height: 120px;
//     -webkit-animation: spin 2s linear infinite;
//     animation: spin 2s linear infinite;
// }
// @-webkit-keyframes spin {
//     0% { -webkit-transform: rotate(0deg); }
//     100% { -webkit-transform: rotate(360deg); }
// }

// @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
// }

</style>
