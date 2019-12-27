<template>
 <div class="heroImage" />
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="scss" scoped>
  .heroImage {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    background-image: url('../assets/astronomy-atmosphere-earth-exploration-220201.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40% 50%;
  }

  .heroImage::after {
    position: absolute;
    background: rgba(0,0,0, .3);
    content: '';
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
</style>
