<template>
  <div class="ClaimWrapper">
    <h1 class="claim">spacer</h1>
    <p class="subclaim">Search what do you want from space! <br> Have fun!</p>
  </div>
</template>
<script>
export default {
  name: 'Claim',
};
</script>
<style lang="scss" scoped>
  .ClaimWrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .claim {
    font-size: 50px;
    margin: 0;
    text-transform: uppercase;
    color: #fff;
  }

  .subclaim {
    margin: 20px 0 0 0;
    font-size: 13px;
    color: #fff;
  }
</style>
