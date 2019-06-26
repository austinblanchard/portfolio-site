import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isLoadingImages: true,
        loadingCount: 0
    },

    mutations: {
        setIsLoadingImages(state, value) {
            state.isLoadingImages = value;
        },

        setLoadingCount(state, value) {
            state.loadingCount = value;
        },
    },

    actions: {
        async loadImages(context) {
            // Preload images and set counter
            const imagePromises = [];
            const imagesToLoad = [
                'bone.png',
                // 'frame-top.png',
                // 'cheetah.png',
                // 'giraffe.png',
                // 'rhino.png',
                // 'victrola.png',
                // 'jungle.jpg',
                // 'about.jpg',
                // 'underwater.jpg'
            ];
            let percentageDone = 0;

            for (let i = 0; i < imagesToLoad.length; i++) {
                imagePromises.push(new Promise((resolve, reject)=> {
                    const image = new Image();
                    image.src = require('../assets/' + imagesToLoad[i]);

                    image.onload = ()=> {
                        percentageDone += 1;
                        let tempCount = Math.floor((percentageDone * 100)/1);

                        context.commit('setLoadingCount', tempCount);

                        resolve();
                    }

                    image.onerror = (error)=> {
                        console.log('image reject', error);
                        context.commit('setLoadingCount', percentageDone);
                        reject();
                    }
                }));
			}

            Promise.all(imagePromises).then(()=> {
                setTimeout(()=> {
                    context.commit('setIsLoadingImages', false);
                }, 1000);
            });
        },
    }
})