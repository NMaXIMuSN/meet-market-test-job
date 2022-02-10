<template>
  <v-row >
    <v-col class="card" v-for="card in this.$store.getters['shopItems/getShopItems']" :key="card.id">
      <v-shop-card :item="card"></v-shop-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("shopItems/featchShopItems")
  },
}
</script>


<style lang="scss" scoped>
.card{
  width: 285px;
}
</style>