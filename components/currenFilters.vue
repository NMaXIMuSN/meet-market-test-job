<template>
  <v-row style="gap: 12px" class="mt-8 mb-8">
    <v-chip close close-icon="mdi-close" color="grey" outlined class="chip">
      <span style="margin-right: 22px"> Очистить все </span>
    </v-chip>
    <template v-for="(chip, i) in $store.getters['filters/getFullFilters']">
      <v-chip
        v-if="chip"
        close
        close-icon="mdi-close"
        color="grey"
        outlined
        :key="i"
        class="chip"
      >
        {{ chip }}
      </v-chip>
    </template>
  </v-row>
</template>

<style lang="scss" scoped>
.chip {
  color: $font-color !important;
}
</style>
