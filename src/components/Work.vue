<template>
    <section id="work">
        <h2 class="title">
            Work
        </h2>

        <div class="container">

            <div class="logos-container">

                <div class="logo">
                    <router-link class="link fox" draggable="false" :to="{ name: 'client', params: { clientSlug: 'fox' }}">
                        <svgicon class="fox" icon="fox" />
                    </router-link>
                </div>
                <div class="logo">
                    <router-link class="link" draggable="false" :to="{ name: 'client', params: { clientSlug: 'dreamworks' }}">
                        <svgicon class="dreamworks" icon="dreamworks" />
                    </router-link>
                </div>

                <div class="logo">
                    <router-link class="link lafh" draggable="false" :to="{ name: 'client', params: { clientSlug: 'lafh' }}">
                        <svgicon class="lafh" icon="lafh" />
                    </router-link>
                </div>
                <div class="logo">
                    <router-link class="link paramount" draggable="false" :to="{ name: 'client', params: { clientSlug: 'paramount' }}">
                        <svgicon class="paramount" icon="paramount" />
                    </router-link>
                </div>

                <div class="logo">
                    <router-link class="link fx" draggable="false" :to="{ name: 'client', params: { clientSlug: 'fx' }}">
                        <svgicon class="fx" icon="fx" />
                    </router-link>
                </div>
                <div class="logo">
                    <router-link class="link pxl" draggable="false" :to="{ name: 'client', params: { clientSlug: 'pxl' }}">
                        <svgicon class="pxl" icon="pxl" />
                    </router-link>
                </div>

                <!-- <div class="logo">
                    <svgicon class="universal" icon="universal" />
                </div> -->

            </div>

        </div>
    </section>
    
</template>

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
        width: 34%;
        margin: 0 auto;
        padding: $pad*2 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        @include bp(1) {
            padding: $pad*2 $pad;
        }

        @include bp(2) {
            padding: $pad*2 $pad*2;
        }

        .link {
            // 
            &.fox {
                width: 72%;
            }

            &.lafh {
                width: 50%;
            }

            &.paramount {
                width: 80%;
            }

            &.fx {
                width: 80%;
            }

            &.pxl {
                width: 90%;
            }
        }

        svg {
            width: 100%;
            height: 100%;

            color: $white;

            transition: all 200ms ease;

            &:hover {
                transform: scale(1.02);
            }

            &.lafh {
                fill: none;
                stroke: $white;
            }
        }
    }
    
}

</style>
