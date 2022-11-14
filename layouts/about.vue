<template>
  <div class="slidev-layout default flex justify-around items-center h-fit">
    <div>
      <slot />
    </div>
    <figure class="w-fit h-fit">
      <img
        :src="imageSrc"
        height="250"
        width="250"
        class="rounded-full p-1.5 bg-indigo-400 dark:bg-indigo-600"
      />
    </figure>
  </div>
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client/layoutHelper';

type Props = {
  image: string;
};

const props = defineProps<Props>();
const imageSrc = resolveAssetUrl(props.image);
</script>
