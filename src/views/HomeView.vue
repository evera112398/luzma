<template>
    <div class="container-fluid image">
      <div class="row">
        <div class="col-3 custom-col" v-for="(item, index) in 16" :key="index">
          <img :src="getRandomImage().src" alt="LDR" class="img-fluid">
        </div>
      </div>
      <div v-if="!openedDialog">
        <AlertDialog :opened-dialog="openedDialog" @update-bool="switchBool"/>
      </div>
      <div v-else>
        <FlowerDialog />
      </div>
    </div>
  </template>
    
  <script>
  import { defineAsyncComponent } from 'vue';
  export default {
    components:{
        AlertDialog: defineAsyncComponent(() => import('@/components/AlertComponent.vue')),
        FlowerDialog: defineAsyncComponent(() => import('@/components/FlowerComponent.vue')),
    },
    data() {
      return {
        images: [
          { src: require('@/assets/LDR1.jpg') },
          { src: require('@/assets/LDR2.jpg') },
          { src: require('@/assets/LDR3.jpg') },
          { src: require('@/assets/LDR4.jpg') },
          { src: require('@/assets/LDR5.jpg') },
          { src: require('@/assets/LDR6.jpg') },
          { src: require('@/assets/LDR7.jpg') },
          { src: require('@/assets/LDR8.jpg') },
          { src: require('@/assets/LDR9.jpg') },
          { src: require('@/assets/LDR10.jpg') },
        ],
        openedDialog: false,
        shuffledImages: [], 
        currentIndex: 0,  
      };
    },
    methods: {
        switchBool(newValue){
            this.openedDialog = newValue;
        },
      shuffleImages() {
        this.shuffledImages = [...this.images].sort(() => Math.random() - 0.5);
      },
      getRandomImage() {
        if (this.currentIndex >= this.shuffledImages.length) {
          this.shuffleImages();
          this.currentIndex = 0;
        }
        const image = this.shuffledImages[this.currentIndex];
        this.currentIndex++;
        return image;
      },
    },
    created() {
      this.shuffleImages();
    },
  };
  </script>

<style lang="scss" scoped>
.custom-col {
  padding: 0;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.image {
  position: relative;
}

.image img {
  width: 100%;
  vertical-align: top;
}

.image:after {
  content: '\A';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}


</style>


  