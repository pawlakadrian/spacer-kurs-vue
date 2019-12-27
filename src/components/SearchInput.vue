<template>
  <input
    id="search"
    name="search"
    :value="value"
    @input="handleChange"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      requeired: true,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  input {
    margin-top: 50px;
    display: flex;
    width: 250px;
    color: #fff;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid #fff;
    transition: box-shadow .3s ease-out;

    @media (min-width: 1024px) {
      font-weight: 400;
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 5px 10px -8px rgba(255,255,255, .8);
  }

</style>
