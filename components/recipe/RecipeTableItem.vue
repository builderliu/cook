<script lang="ts" setup>
import type { RecipeItem } from '~/types'

defineProps<{
  index: number
  recipe: RecipeItem
}>()
</script>

<template>
  <tr>
    <td>
      {{ index }}
    </td>
    <td>
      <a
        class="text-blue-500" font-bold

        target="_blank"
      >
        {{ recipe.name }}
      </a>
    </td>
    <td>
      {{ recipe.tools.join('、') }}
    </td>
    <td>
      {{ recipe.stuff.join('、') }}
    </td>
  </tr>
</template>
