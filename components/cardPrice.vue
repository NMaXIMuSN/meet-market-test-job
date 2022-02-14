<template>
  <v-card class="card">
    <v-list class="card__top">
      <div class="card__top-title">Выберите ценовой диапазон</div>
      <div class="card__input-wrapper">
        <div class="card__input">
          <v-text-field
            :value="range[0]"
            color="#1D1D20"
            outlined
            type="number"
            @change="$set(range, 0, $event)"
          ></v-text-field>
        </div>
        <div class="card__input">
          <v-text-field
            :value="range[1]"
            outlined
            color="#1D1D20"
            type="number"
            @change="$set(range, 1, $event)"
          ></v-text-field>
        </div>
      </div>
      <v-range-slider
        v-model="range"
        :max="max"
        :min="min"
        color="#84A2FC"
        hide-details
        track-color="rgba(29, 29, 32, 0.1)"
        class="align-center"
      >
      </v-range-slider>
    </v-list>

    <v-list class="card__list">
      <v-radio-group
        v-model="radio"
        @change="$store.commit('filters/setRadioPrice', $event)"
      >
        <template v-for="price in $store.getters['filters/getRadioPrice']">
          <div :key="price">
            <v-radio
              class="card__radio"
              :label="price"
              :value="price"
            ></v-radio>
            <v-divider></v-divider>
          </div>
        </template>
      </v-radio-group>
    </v-list>

    <v-card-actions class="card__btn-wrapper">
      <v-btn class="card__btn" @click="$emit('closeMenu')"> Применить </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    min: 0,
    max: 10,
    radio: 0,
    range: [0, 0],
  }),
  methods: {
    setRange(index, event) {
      this.range[index] = parseInt(event)
      this.$forceUpdate()
    },
  },
  mounted() {
    this.max = this.$store.getters['shopItems/getMaxPrice']
    this.range = [0, Math.ceil(this.max / 2)]
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 32px 20px 20px;
  border-radius: 10px;
  font-family: $text-family;
  &__top {
    &-title {
      font-size: 14px;
      margin-bottom: 20px;
      line-height: 17px;
      color: rgba($color: $font-color, $alpha: 0.3);
    }
  }
  &__input {
    display: inline;
    max-width: 136px !important;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }



  &__radio {
    flex-direction: row-reverse;
    margin-bottom: 16px !important;
    margin-top: 16px !important;
    font-size: 14px;
    line-height: 17px;
    color: $font-color !important;
  }

  &__btn {
    background-color: $btn-select-color !important;
    color: $btn-select-text-color !important;
    border-radius: 6px !important;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    padding: 16px 104px !important;
    height: auto !important;
    &-wrapper {
      padding: 0;
    }
  }
}
</style>
