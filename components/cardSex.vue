<template>
  <v-card class="card">
    <v-list class="card__top">
      <div class="card__top-title">Выберите пол</div>
    </v-list>

    <v-list class="card__list">
      <v-radio-group
        v-model="radio"
        @change="$store.commit('filters/setRadioSex', $event)"
      >
        <template v-for="sex in $store.getters['filters/getRadioSex']">
          <div :key="sex">
            <v-radio
              class="card__radio"
              :label="sex"
              :value="sex"
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
    radio: 0,
  }),
  methods: {
    setRange(index, event) {
      this.range[index] = parseInt(event)
      this.$forceUpdate()
    },
  },
  mounted() {

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
      line-height: 17px;
      color: rgba($color: $font-color, $alpha: 0.3);
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
