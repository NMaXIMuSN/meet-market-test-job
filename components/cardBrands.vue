<template>
  <v-card class="card">
    <v-list class="card__top">
      <div class="card__top-wrapper">
        <div class="card__text">Выбрано: {{ countBrand }}</div>

        <div class="card__clear" @click="currentBrand = []">Очистить</div>
      </div>
    </v-list>

    <v-list class="card__list">
      <div v-for="brand in brands" :key="brand">
        <v-checkbox color="#84A2FC" v-model="currentBrand" :value="brand">
          <template #label>
            <div id="card__list-label">
              {{ brand }}
              <span>
                {{
                  $store.getters['shopItems/getShopItems'].filter(
                    (item) => item.brand === brand
                  ).length
                }}
              </span>
            </div>
          </template>
        </v-checkbox>
        <v-divider></v-divider>
      </div>
    </v-list>

    <v-card-actions class="card__btn-wrapper">
      <v-btn class="card__btn" @click="$emit('closeMenu')"> Применить </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    currentBrand: [],
  }),
  computed: {
    ...mapGetters({
      brands: 'filters/getBrands',
      countBrand: 'filters/countBrand',
    }),
  },
  watch: {
    currentBrand(newValue) {
      this.$store.commit('filters/setCurretnBrands', newValue)
    },
  },
  mounted() {
    this.currentBrand = this.$store.getters['filters/getCurrenBrands']
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  padding-right: 8px;
  border-radius: 10px;
  font-family: $text-family;
  &__top {
    padding: 12px 0 32px;
    margin-right: 12px;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
  &__text {
    font-size: 14px;
    line-height: 17px;
    color: $font-color !important;
  }
  &__clear {
    font-size: 14px;
    line-height: 17px;
    color: $font-color-grey !important;
    cursor: pointer;
    text-decoration-line: underline;
  }

  &__list {
    max-height: 278px;
    overflow-y: scroll;
    padding: 0 8px 0 0;
    scrollbar-gutter: stable;
    &::-webkit-scrollbar {
      width: 4px;
      margin-left: 8px;
    }
    &::-webkit-scrollbar-thumb {
      margin-left: 8px;
      border-radius: 6px;
      background: rgba($color: $font-color, $alpha: 0.1);
    }
  }

  &__btn {
    background-color: $btn-select-color !important;
    color: $btn-select-text-color !important;
    border-radius: 6px !important;
    font-size: 14px;
    margin-top: 20px;
    margin-right: 12px;
    line-height: 17px;
    font-family: $text-family;
    font-weight: 400;
    padding: 16px 104px !important;
    height: auto !important;
    &-wrapper {
      padding: 0;
    }
  }
}

#card__list-label {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: $font-color;
  span {
    opacity: 0.3;
  }
}
</style>
