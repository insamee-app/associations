<template>
  <InsameeAppCard class="space-y-1">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col flex-1">
        <div class="font-bold text-xl">{{ name }}</div>
        <div class="font-light">{{ schoolName }}</div>
      </div>
      <InsameeAppProfileAvatar size="small" :image-url="imageUrl" :alt="name" />
    </div>
    <div>
      <div class="text-lg">{{ thematic }}</div>
      <InsameeAppChips :texts="thematics" />
    </div>
    <div>{{ text | cutText }}</div>
    <div class="flex flex-row justify-end">
      <InsameeAppButton :to="{ name: 'associations-id', params: { id } }">
        Voir plus
      </InsameeAppButton>
    </div>
  </InsameeAppCard>
</template>

<script>
export default {
  name: 'AssocationCard',
  filters: {
    cutText(value) {
      if (!value) return
      const length = 120
      const text = value.slice(0, length)
      return text.length === length ? text + '...' : text
    },
  },
  props: {
    id: { type: Number, default: undefined },
    name: {
      type: String,
      default: undefined,
    },
    schoolName: {
      type: String,
      default: undefined,
    },
    thematics: {
      type: Array,
      default: undefined,
    },
    thematic: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
  },
}
</script>
