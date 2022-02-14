<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
    :disabled="disable"
    v-model="menu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :class="{ 'select__title-dark': dark }"
        class="select__title"
        v-bind="attrs"
        v-on="on"
        :disabled="disable"
      >
        <span>{{ title }} {{ count }}</span>
        <img v-if="!dark" src="~/assets/img/arrow-down.svg" alt="" />
        <img v-else src="~/assets/img/arrow-down-white.svg" alt="" />
      </v-btn>
    </template>
    <slot name="card" ref="asdf"></slot>
  </v-menu>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    nameCount: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: false,
  }),
  computed: {
    count() {
      return this.$store.getters[`filters/count${this.nameCount}`]
        ? `(${this.$store.getters[`filters/count${this.nameCount}`]})`
        : ``
    },
  },
  mounted() {
    console.log(this.$refs['asdf'])
  },
}
</script>

<style lang="scss" scoped>
.select {
  &__title {
    width: 190px;
    height: auto !important;
    display: flex;
    box-shadow: none !important;
    justify-content: space-between;
    align-items: center;
    padding: 15px 22px !important;
    background-color: $bg-select !important;
    color: $font-color;
    font-size: 14px;
    line-height: 17px;
    text-transform: none;
    letter-spacing: 0;
    font-family: $text-family;
    &-dark {
      background-color: $btn-select-color !important;
      color: $btn-select-text-color !important;
    }
    &:disabled {
      background-color: $bg-select !important;
      img {
        opacity: 0.3;
      }
    }
  }
}
</style>
