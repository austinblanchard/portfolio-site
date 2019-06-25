<template>
    <header>
        <!-- <div class="sky" ref="sky"></div> -->
        <canvas class="sky" id="field" />
        <div class="title-wrapper">
            <div class="logo">
                <svgicon class="fox" icon="fox" />
            </div>
        </div>
        
    </header>
</template>

<script>
// import clients from '../projects.json';

export default {

    // data() {
    //     return {
    //         client: clients.find(client => client.slug === this.$route.params.clientSlug)
    //     };
    // },

    mounted() {
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var field = document.getElementById("field");
        var f = field.getContext("2d");

        var stars = {};
        var starIndex = 0;
        var numStars = 0;
        var acceleration = 1;
        var starsToDraw = (field.width * field.height) / 200;
        if (getUrlParameter("stars")) {
            starsToDraw = getUrlParameter("stars");
        }
        if (getUrlParameter("accel")) {
            acceleration = getUrlParameter("accel");
        } 


        function Star() {
            this.X = field.width / 2;
            this.Y = field.height / 2;

            this.SX = Math.random() * 10 - 5;
            this.SY = Math.random() * 10 - 5;

            var start = 0;

            if (field.width > field.height)
                start = field.width;
            else
                start = field.height;

            this.X += this.SX * start / 10;
            this.Y += this.SY * start / 10;

            this.W = 1;
            this.H = 1;

            this.age = 0;
            this.dies = 500;

            starIndex++;
            stars[starIndex] = this;

            this.ID = starIndex;
            this.C = "#fff1cc";
        }

        Star.prototype.Draw = function () {
            this.X += this.SX;
            this.Y += this.SY
            
            this.SX += this.SX / (400 / acceleration);
            this.SY += this.SY / (400 / acceleration);

            this.age++;

            if (this.age == Math.floor(50 / acceleration) | this.age == Math.floor(150 / acceleration) | this.age == Math.floor(300 / acceleration)) {
                this.W++;
                this.H++;
            }

            if (this.X + this.W < 0 | this.X > field.width |
                this.Y + this.H < 0 | this.Y > field.height)
            {
                delete stars[this.ID];
                numStars--;
                    }
        
            f.fillStyle = this.C;
            f.fillRect(this.X, this.Y, this.W, this.H);
        }

        field.width = window.innerWidth;
        field.height = window.innerHeight;

        function draw() {
            if (field.width != window.innerWidth)
                field.width = window.innerWidth;
            if (field.height != window.innerHeight)
                field.height = window.innerHeight;
        
            // Play with the "a" value to create streams...it's fun!
            // f.fillStyle = "rgba(17, 0, 7, 0.5)";
            f.fillStyle = "rgba(0, 0, 0, 0.5)";
            f.fillRect(0, 0, field.width, field.height);

            for (var i = numStars; i < starsToDraw; i++) {
                new Star();
                numStars++;
            }

            for (var star in stars) {
                stars[star].Draw();
            }
        }

        // Original timing of the screensaver
        setInterval(draw, 40);
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

header {
    position: relative;
    text-align: center;
}

.sky {
    // original sky styles
    // background: url('../assets/art.jpg');
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;

    // css from codepen
    // color: #FFFFFF;
    // background-color: #000;
    // margin: 0;
    // padding: 0;
    // overflow: hidden;

    height: 100%;
    width: 100%;

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
