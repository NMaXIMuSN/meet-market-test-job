<template>
  <v-row>
    <v-col cols="12"
      ><h1 class="catalog__title">
        Кросовки: Новинки
        <span
          >{{ this.$store.getters['shopItems/getCountShopItems'] }} товара</span
        >
      </h1></v-col
    >
    <v-row>
      <v-col cols="3"><v-left-bar></v-left-bar></v-col>
      <v-col cols="9">
        <v-row>
          <v-col
            class="catalog__card"
            v-for="card in this.$store.getters['shopItems/getShopItems']"
            :key="card.id"
          >
            <v-shop-card :item="card"></v-shop-card> </v-col></v-row
      ></v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('shopItems/featchShopItems')
    // console.log(this.$route);
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  &__title {
    font-family: $text-family;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    text-transform: uppercase;
    margin-bottom: 40px;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $font-color-grey;
      margin-left: 20px;
    }
  }
  &__card {
    width: 285px;
  }
}
</style>
