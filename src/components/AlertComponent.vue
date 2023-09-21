<template>
    <div class="text-overlay rounded-4">
        <div class="mt-1">
            <img :src="ferretImage" style="width: 15%; height: 15%;" class="mb-2">
            <h1 class="display-1 fw-normal">Por favor, da clic en el botón de abajo.</h1>
            <button class="btn btn-outline-success mt-3" @click="openDialog">Clíqueame</button>
        </div>
      </div>
</template>
<script>
export default {
    data(){
        return{
            ferretImage: require('@/assets/ferret.png'),
        }
    },
    methods:{
        openDialog() {
            this.$swal({
                icon: 'info',
                title: 'Te amo',
                willClose: () => {
                    this.$emit('update-bool',true);
                },
                html: `
                <p class="fw-italic">Antes que cualquier otra cosa, quiero recordarte que eres lo más importante para mí y que te amo con todo mi corazón. Mi morusita hermosa</p>
                <img src="${require('@/assets/cat.png')}" style="max-width: 50%;">
                `
                });
            },
    },
    props:{
        openedDialog: Boolean
    }
}
</script>
<style lang="scss" scoped>
    .text-overlay {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  text-align: center;
  z-index: 1; 
  
}

.text-overlay h1 {
  font-size: 24px;
  color: #333;
}

.text-overlay p {
  font-size: 16px;
  color: #555;
}
</style>