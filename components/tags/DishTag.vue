<script lang="ts" setup>
import type { DbRecipeItem } from '~/utils/db'
import { tools } from '~/data/food'
import type { RecipeItem } from '~/types'
import { getEmojisFromStuff } from '~/utils'
import { recipeHistories } from '~/composables/store/history'

const props = defineProps<{
  dish: RecipeItem | DbRecipeItem
  active: boolean
}>()

const dishLabel = computed(() => {
  const emojis = getEmojisFromStuff(props.dish.stuff)
  return `${props.dish.tags?.includes('杂烩') ? '🍲' : emojis.join(' ')} ${props.dish.name}`
})
</script>

<template>
  <a
    class="dish-tag rounded tag" p="x-2"
    border="~ blue-200 dark:blue-800"
    :bg="active ? 'green-600 opacity-90' : 'green-300 opacity-20'"
  >
    <span m="r-1" text="sm blue-700 dark:blue-200">
      {{ dishLabel }}
    </span>
    <template v-for="tool, i in tools">
      <span v-if="dish.tools?.includes(tool.name)" :key="i" :class="tool.icon" />
    </template>
  </a>
</template>
