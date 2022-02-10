<template>
  <v-card width="285px" class="card">
    <v-img class="card__img" :src="require(`~/assets/img/${item.image}`)" />
    <v-img class="card__like" :src="require(`~/assets/img/like-icon.svg`)" />
    <div class="card-info">
      <div class="card__price">{{ formatPrice }}</div>
      <div class="card__model">{{ item.model }}</div>
      <div class="card__block-wrapper">
        <template v-for="info in item.info">
          <div
            class="card__block"
            :key="info.id"
            :style="{
              color: info['text-color'],
              backgroundColor: info['bacgraund-color'],
            }"
          >
            {{ info.text }}
          </div>
        </template>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },

  computed: {
    formatPrice() {
      return `${new Intl.NumberFormat('ru-RU').format(this.item.price)} руб.`
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  height: 328px;
  position: relative;
  &__img {
    margin-bottom: 16px;
    height: 160px;
  }
  &__price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: $font-color;
    background-color: #fff;
  }

  &__model {
    font-size: 16px;
    line-height: 150%;
    color: $font-color;
    margin-bottom: 40px;
  }

  &__like {
    position: absolute;
    right: 26px;
    top: 28px;
    cursor: pointer;
  }

  &__block {
    padding: 8px 10px 10px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 100%;
    &-wrapper {
      display: flex;
      gap: 12px;
    }
  }

  &-info {
    padding: 0 20px 20px;
  }
}
</style>
