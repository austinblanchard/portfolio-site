import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // maybe change back to true once work page loader is working?
        isLoadingImages: false,
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
        async loadHomeImages(context) {
            context.commit('setLoadingCount', 0);
            context.commit('setIsLoadingImages', true);
            // Preload images and set counter
            const imagePromises = [];
            const imagesToLoad = [
                'frame-top.png',
                'cheetah.png',
                'giraffe.png',
                'rhino.png',
                'jungle.jpg',
                'about.jpg',
                'underwater.jpg'
            ];
            let percentageDone = 0;

            for (let i = 0; i < imagesToLoad.length; i++) {
                imagePromises.push(new Promise((resolve, reject)=> {
                    const image = new Image();
                    image.src = require('../assets/' + imagesToLoad[i]);

                    image.onload = ()=> {
                        percentageDone += 1;
                        let tempCount = Math.floor((percentageDone * 100)/7);

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
                }, 500);
            });
        },

        async loadAboutImages(context) {
            context.commit('setLoadingCount', 0);
            context.commit('setIsLoadingImages', true);
            // Preload images and set counter
            const imagePromises = [];
            const imagesToLoad = [
                'frame-top.png',
                'art.jpg',
                'sand.jpg'
            ];
            let percentageDone = 0;

            for (let i = 0; i < imagesToLoad.length; i++) {
                imagePromises.push(new Promise((resolve, reject)=> {
                    const image = new Image();
                    image.src = require('../assets/' + imagesToLoad[i]);

                    image.onload = ()=> {
                        percentageDone += 1;
                        let tempCount = Math.floor((percentageDone * 100)/3);

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
                }, 500);
            });
        },

        async loadWorkImages(context) {
            // Preload images and set counter
            const imagePromises = [];
            // active project(s)
            const imagesToLoad = [
                // 'frame-top.png',
                // 'art.jpg',
                // 'sand.jpg'
            ];
            let percentageDone = 0;

            for (let i = 0; i < imagesToLoad.length; i++) {
                imagePromises.push(new Promise((resolve, reject)=> {
                    const image = new Image();
                    image.src = require('../assets/work' + imagesToLoad[i]);

                    image.onload = ()=> {
                        percentageDone += 1;
                        // i guess this will need to be dynamic too for pages with more than 1 project?
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
        }

    }
})