<template>
    <div class="text-overlay rounded-4">
        <img src="../assets/yellow_flower.gif" alt="yellow_flower">
        <h1 class="fst-italic fw-light text-white">Obsequiar flores amarillas adquiere un significado de <b>amor</b>, <b>una vida juntos</b>, y <b>muchas</b> otras características.</h1>
        <h1 class="display-2 text-white">Te amo con todo mi corazón, mi niña hermosa.</h1> 
        <img src="../assets/ILY.jpg" alt="" class="us mt-4">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .text-overlay {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -65%);
  background-color: transparent;
  padding: 20px;
  text-align: center;
  z-index: 1; 
  width: 80%;
  height: 80%;
}

.text-overlay h1 {
  font-size: 24px;
  color: #333;
}

.text-overlay p {
  font-size: 16px;
  color: #555;
}

.us{
    width: 560px;
    height: 440px;
    
}
</style>