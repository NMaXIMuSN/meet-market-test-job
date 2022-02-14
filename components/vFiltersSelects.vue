<template>
  <v-row style="gap: 12px">
    <my-select :title="$store.getters['filters/getCurrenSort']" dark>
      <template #card>
        <card-sort></card-sort>
      </template>
    </my-select>
    <my-select title="Бренд" nameCount="Brand">
      <template #card>
        <card-brands></card-brands>
      </template>
    </my-select>
    <my-select title="Модель" disable>
      <template #card>
        <card-brands></card-brands>
      </template>
    </my-select>
    <my-select title="Стоимость" nameCount="Price">
      <template #card>
        <card-price></card-price>
      </template>
    </my-select>
    <my-select title="Размер" nameCount="Size">
      <template #card>
        <card-size></card-size>
      </template>
    </my-select>
    <my-select title="Пол" nameCount="Sex">
      <template #card>
        <card-sex></card-sex>
      </template>
    </my-select>
  </v-row>
</template>

<script>
export default {}
</script>
