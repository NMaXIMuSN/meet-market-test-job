<template>
  <v-col>
    <h2 class="compilation__title">Подборки Meet-market</h2>
    <ul class="compilation-wrapper">
      <li
        class="compilation"
        :class="{ 'compilation-hot': link.hot }"
        v-for="(link, i) in links"
        :key="i"
        @click="clikLink(link)"
      >
        {{ link.text }}
        <span v-if="link.hot" class="compilation-hot-img"
          ><img src="~/assets/img/hot-img.svg" alt=""
        /></span>
      </li>
    </ul>
  </v-col>
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
  methods: {
    clikLink(link) {
      this.$route.params.segment2 = link.to
      this.$router.push(
        `/catalog/${this.$route.params.segment}/${link.to}/${this.$route.params.segment3}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.compilation {
  color: $font-color;
  font-size: 21px;
  display: flex;
  align-items: center;
  line-height: 25px;
  font-family: $text-family;
  font-weight: 400;
  margin-bottom: 28px;
  cursor: pointer;
  &-wrapper {
    display: flex;
    list-style: none;
    padding-left: 0;
    flex-direction: column;
  }
  &-hot {
    font-weight: 600;
    color: #f4900c;
    font-size: 21px;
    position: relative;
    line-height: 25px;
    &-img {
      margin-left: 12px;
      display: flex;
      align-items: center;
    }
  }

  &__title {
    font-family: $text-family;
    font-weight: 400;
    font-size: 21px;
    line-height: 150%;
    margin-bottom: 28px;
    color: $font-color-grey;
  }
}
</style>
