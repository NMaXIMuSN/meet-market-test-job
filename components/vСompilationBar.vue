<template>
  <v-row>
    <div class="compilation-wrapper">
      <div
        class="compilation"
        :class="{ 'compilation-hot': link.hot }"
        v-for="(link, i) in links"
        :key="i"
        @click="clikLink(link)"
      >
        {{ link.text }}
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: 'Все товары', to: 'all' },
      { text: 'Популярные', to: 'popular' },
      { text: 'Экспресс-доставка', to: 'delivery', hot: true },
      { text: 'Новинки', to: 'new' },
      { text: 'Black&White', to: 'black-and-white' },
      { text: 'Зима', to: 'winter' },
      { text: 'Подборка Light', to: 'light' },
      { text: 'Подборка Multicolor', to: 'multicolor' },
      { text: 'Подборка Dark', to: 'dark' },
    ],
  }),
  methods:{
    clikLink(link){
      this.$route.params.segment2 = link.to
      this.$router.push(`/catalog/${this.$route.params.segment}/${link.to}/${this.$route.params.segment3}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.compilation {
  color: $font-color;
  font-size: 21px;
  line-height: 25px;
  font-family: $text-family;
  font-weight: 400;
  margin-bottom: 28px;
  cursor: pointer;
  &-hot {
    font-weight: 600;
    color: #f4900c;
    font-size: 21px;
    position: relative;
    line-height: 25px;
    &::after{
      position: absolute;
      content: "";
      right: 0;
      top: 50%;
      transform: translate(100%, -50%);
      width: 22px;
      height: 22px;
      background-image: url('~/assets/img/hot-img.svg');
    }
  }
}
</style>
