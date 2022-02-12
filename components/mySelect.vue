<template>
  <v-menu offset-y :close-on-content-click="false" v-model="menu">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="select__title" v-bind="attrs" v-on="on">
        <span>{{ title }} ({{$store.getters["filters/countBrand"]}})</span>
        <img src="~/assets/img/arrow-down.svg" alt="" />
      </v-btn>
    </template>
    <slot name="card" @closeMenu="menu = false"></slot>
  </v-menu>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  data: () => ({
    menu: false,
  })
}
</script>

<style lang="scss" scoped>
.select {
  &__title {
    width: 190px;
    display: flex;
    box-shadow: none !important;
    justify-content: space-between;
    align-items: center;
    padding: 15px 22px !important;
    background-color: $bg-select !important;
    color: $font-color;
    font-size: 14px;
    line-height: 17px;
    font-family: $text-family;
  }
}
</style>
