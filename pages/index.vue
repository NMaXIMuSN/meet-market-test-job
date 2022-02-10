<template>
  <v-row justify="center" align="center">
    clear
  </v-row>
</template>


<script>
export default {
  mounted(){
    this.$store.dispatch("shopItems/featchShopItems")
  }
}
</script>