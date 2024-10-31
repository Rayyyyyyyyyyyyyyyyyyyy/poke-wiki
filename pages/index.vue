<script setup lang="ts">
import { getPokeApi } from "~/servies/api";
import type { TPokeList } from "~/types/apiType";

const toFixedWidth = (index: number) => {
  return `#${index.toString().padStart(4, "0")}`;
};
const res = await getPokeApi("list", {});
const pokeList = JSON.parse(JSON.stringify(res.data)) as TPokeList[];
pokeList.forEach((item) => {
  item.strIndex = toFixedWidth(item.index);
});
</script>

<template>
  <div class="container">
    <UCard v-for="item in pokeList">
      <template #header>
        <p>{{ item.strIndex }}</p>

        <p>{{ item.nameZh }}</p>
      </template>

      <template #footer>
        <div class="flex">
          <p>{{ item.type1 }}</p>
          <p v-if="item.type2 !== ''">, {{ item.type2 }}</p>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply grid grid-cols-4 auto-rows-auto gap-4;
}
</style>
