<script setup lang="ts">
import { getPokeApi } from "~/servies/api";
import type { TPokeList } from "~/types/apiType";

const toFixedWidth = (index: number) => {
  return `#${index.toString().padStart(4, "0")}`;
};
const res = await getPokeApi("list", {});
const resData = JSON.parse(JSON.stringify(res.data)) as TPokeList[];
resData.forEach((item) => {
  item.strIndex = toFixedWidth(item.index);
});
</script>

<template>
  <div class="container">
    <UCard v-for="item in resData" class="poke-card">
      <template #header>
        <p>{{ item.strIndex }}</p>

        <p>{{ item.nameZh }}</p>
      </template>
      <div class="poke-row">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.index}.png`"
          alt=""
          class="poke-img"
        />
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.index}.png`"
          alt=""
          class="poke-img"
        />
        <UDivider orientation="vertical" />

        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${item.index}.png`"
          alt=""
          class="poke-img"
        />
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${item.index}.png`"
          alt=""
          class="poke-img"
        />
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
  @apply mx-auto;
  @apply grid grid-cols-4 auto-rows-auto gap-4;

  .poke-card {
    @apply cursor-pointer;
  }

  .poke-row {
    @apply flex;

    .poke-img {
      max-width: 25%;
      max-height: 80px;
    }
  }
}
</style>
