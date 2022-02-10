<template>
    <v-col>_segment2<v-col><nuxt-child /></v-col></v-col>
</template>

<script>
export default {
  mounted() {
    console.log(" 2 " + this.$route)
  },
}
</script>