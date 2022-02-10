<template>
  <v-row class="d-flex">
    <v-col cols="3"><vСompilationBar></vСompilationBar></v-col>
    <v-col cols="9">
      <v-row>
        <v-col
          class="card"
          v-for="card in this.$store.getters['shopItems/getShopItems']"
          :key="card.id"
        >
          <v-shop-card :item="card"></v-shop-card> </v-col></v-row
    ></v-col>
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
.card {
  width: 285px;
}
</style>
