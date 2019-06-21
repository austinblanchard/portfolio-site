<template>
    <section id="work">
        <h2 class="title">
            Work
        </h2>

        <div class="container">

            <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <swiper-slide class="item">
                    <img src="../assets/lafh.png" alt="">
                    <p class="work-title">LA Family<br>Housing</p>
                </swiper-slide>
                <swiper-slide class="item">
                    <img src="https://via.placeholder.com/200x150" alt="">
                    <p class="work-title">title</p>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper> -->

            <div class="logos-container">

                <div class="logo">
                    <router-link draggable="false" :to="{ name: 'client', params: { clientSlug: 'fox' }}">
                        <svgicon icon="fox" />
                    </router-link>
                </div>
                <div class="logo">
                    <svgicon class="universal" icon="universal" />
                </div>

                <div class="logo">
                    <svgicon class="dreamworks" icon="dreamworks" />
                </div>
                <div class="logo">
                    <svgicon class="paramount" icon="paramount" />
                </div>

                <div class="logo">
                    <svgicon class="fx" icon="fx" />
                </div>
                <div class="logo">
                    <svgicon class="pxl" icon="pxl" />
                </div>

                <!-- <div class="logo">
                    <svgicon class="lafh" icon="house" />
                </div> -->


            </div>

            

        </div>
    </section>
    
</template>

<script>
// import '../compiled-icons';

// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'



export default {
    // components: {
    //     swiper,
    //     swiperSlide
    // },

    data() {
      return {
        // swiperOption: {
        //   loop: true,
        //   centeredSlides: true,
        //     slidesPerView: 1,
        //     spaceBetween: 40,
        // }
      }
    },
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
    background: url('../assets/jungle.jpg');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;

    // background: url('../assets/stars.jpg');
    // background-position: center;
    // background-repeat: repeat;

    padding: $pad*10 $pad*2;

    @include bp(2) {
        padding: $pad*16 $pad*2;
    }
    
}

.container {
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // for logo container
    align-items: center;
}

.title {
    @include futura();

    paint-order: stroke fill;
    
    background: $pink;
    -webkit-text-stroke: 1px $black;

	-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    text-align: center;
    padding-bottom: $pad*2;
    font-size: 24px;

    @include bp(2) {
        font-size: 30px;
    }

}

.item {
    text-align: center;
    width: 100%;
    // max-width: 400px;

    &:not(:last-of-type) {
        margin-bottom: $pad*2;
    }

    img {
        width: 100%;
    }
}

.work-title {
    @include standard-font();
    font-size: 18px;
    color: $white;
    text-align: center;
    padding: $pad/2 $pad;
    margin-top: $pad;

    display: inline-block;
    background: #3c3b39a6;
}


.logos-container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    background: #00000057;
    border-radius: 25px;
    // background: transparent;
    // box-shadow: 0px 0px 40px 0px rgba(60,59,57,.75);

    .logo {
        width: 50%;
        // height: 100px;
        padding: $pad*2 0;
        text-align: center;

        svg {
            width: 40%;
            height: 100%;

            color: $white;

            &.lafh {
                width: 26%;
                fill: none;
                stroke: $white;
            }

            &.universal {
                width: 57%;
            }

            &.dreamworks {
                width: 54%;
            }
        }
    }
    
}

</style>
