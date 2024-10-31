<script setup lang="ts">
import { getPokeApi } from "~/servies/api";
import type { TPokeList } from "~/types/apiType";

const toFixedWidth = (index: number) => {
  return `#${index.toString().padStart(4, "0")}`;
};
const res = await getPokeApi("list", {});
console.log("res", res);
const pokeList = JSON.parse(JSON.stringify(res.data)) as TPokeList[];
pokeList.forEach((item) => {
  item.strIndex = toFixedWidth(item.index);
});

// 總圖片的寬度和高度
const totalWidth = 4480;
const totalHeight = 4480;

// 小點圖的行列數
const gridRows = 40;
const gridCols = 40;

// 計算每個小點圖的寬度和高度
const cellWidth = totalWidth / gridCols;
const cellHeight = totalHeight / gridRows;

// 計算每個小點圖的寬高佔整體的比例
const widthRatio = cellWidth / totalWidth;
const heightRatio = cellHeight / totalHeight;
</script>

<template>
  <div class="container">
    <UCard v-for="item in pokeList">
      <template #header>
        <p>{{ item.strIndex }}</p>

        <p>{{ item.nameZh }}</p>
      </template>
      <div class="poke-row">
        <div class="poke-base poke-img" :class="`poke-${item.index}`"></div>
        <div class="poke-color poke-img" :class="`poke-${item.index}`"></div>
      </div>

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

  .poke-row {
    @apply flex;

    .poke-img {
      @apply w-16 h-16;
    }
  }
}
</style>
