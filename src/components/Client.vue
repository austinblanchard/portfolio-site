<template>
    <section id="client-detail">

        <div class="container">
            <!-- add loop -->
            <div class="project" v-for="project in client.projects">
                <div class="project-details">
                    <a class="project-link" href="https://www.foxmovies.com/" target="_blank">
                        <h2>{{ project.title }}</h2>
                    </a>
                    <p>Services: Custom Film Pages</p>
                    <p>Tools: HTML/CSS, jQuery</p>
                </div>

                <div class="preview">

                    <svgicon class="" icon="frame-laptop-phone" />
                    <!-- screen capture desktop sites at 1300px, squoosh at 60 quality, reduce to 1500px wide -->
                    <div class="desktop-wrapper">
                        <img :src="getImgUrl(project.desktopImage)" draggable="false" alt="">
                    </div>
                    <!-- screen capture mobile sites at iphone 6 , squoosh at 52 quality, reduce to 500px wide -->
                    <div class="mobile-wrapper">
                        <img :src="getImgUrl(project.mobileImage)" draggable="false" alt="">
                    </div>

                </div>
            </div>
            
        </div>

        <!-- <p>text {{ $route.params.clientSlug }}</p> -->
        <!-- <img src="{{ $route.params.desktopImage }}" alt=""> -->
    </section>
    
</template>

<script>
import clients from '../projects.json';

export default {
    data() {
        return {
            client: clients.find(client => client.slug === this.$route.params.clientSlug)
        };
    },
    
    methods: {
        getImgUrl(imagePath) {
            return require('../assets/work/'+imagePath)
        }
    }
};
    
</script>

<style lang="scss" scoped>
@import "../sass/resets/_company.scss";
@import "../sass/resets/_meyer-reset.scss";
@import "../sass/_variables.scss";
@import "../sass/_typography.scss";
@import "../sass/_buttons.scss";
@import "../sass/_breakpoints.scss";

@keyframes flicker {
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		opacity: .99;
		text-shadow: 0 0 0 #fff3b9, 0 0 0 #fffcb9, 0 0 9px #ff6e00, 0 0 9px #dd6205, 0 0 4px #c12400, 0 0 1px #dd1905, 0 0 6px #dd4b05;
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
		text-shadow: none;
	}
}

@keyframes flicker2 {
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		opacity: .99;
		text-shadow: 0 0 0 #f8f8fa, 0 0 0 #f8f8fa, 0 0 6px #286296, 0 0 6px #1f65a5, 0 0 5px #1c5b94, 0 0 5px #1f629e, 0 0 5px #215f98;
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
		text-shadow: none;
	}
}

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

    // @include bp(3) {
    //     flex-direction: row;
    // }

    &:not(:first-of-type) {
        margin-top: $pad*8;
    }

    &:nth-of-type(even) h2 {
        color: #cbe7ef;

        animation: flicker2 14s linear infinite;

        &:hover {
            text-shadow: 0 0 0 #f8f8fa, 0 0 0 #f8f8fa, 0 0 10px #286296, 0 0 10px #1f65a5, 0 0 10px #1c5b94, 0 0 10px #1f629e, 0 0 10px #215f98;
            animation: none;
        }
    }
}

.project-details {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    // @include bp(3) {
    //     width: 50%;
    // }

    h2 {
        @include project-title();
        text-align: center;
        font-size: 26px;

        @include bp(2) {
            font-size: 34px;
        }

        // @include bp(3) {
        //     text-align: left;
        //     display: inline;
        // }

        color: #ffe4b9;
        animation: flicker 8s linear infinite;

        &:hover {
            text-shadow: 0 0 0 #fff3b9, 0 0 0 #fffcb9, 0 0 7px #ff6e00, 0 0 7px #dd6205, 0 0 7px #c12400, 0 0 7px #dd1905, 0 0 7px #dd4b05;
            animation: none;
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

        // @include bp(3) {
        //     text-align: left;
        // }

        &:first-of-type {
            margin-top: $pad*2;

            @include bp(4) {
                margin-top: $pad*3;
            }
        }
    }
}

.preview {
    position: relative;
    width: 100%;
    margin-top: $pad*2;

    // @include bp(3) {
    //     width: 50%;
    //     margin-top: 0;
    // }

    @include bp(4) {
        margin-top: $pad*3;
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

</style>
