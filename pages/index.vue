<template>
  <v-row class="d-flex" align="center">
    <v-col cols="4" v-for="card in this.$store.getters['shopItems/getShopItems']" :key="card.id"  width="285px">
      <v-shop-card :item="card"></v-shop-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  mounted(){
    this.$store.dispatch("shopItems/featchShopItems")
  }
}
</script>