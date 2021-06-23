<template>
  <div class="space-y-8">
    <div class="flex flex-row justify-center items-center">
      <InsameeAppProfileAvatar />
      <div class="ml-6">
        <div class="text-xl font-bold">{{ name }}</div>
        <div class="font-light">{{ schoolName }}</div>
      </div>
    </div>
    <div>
      <div class="text-secondary-dark text-lg">{{ thematic }}</div>
      <InsameeAppChips :texts="thematics" />
    </div>
    <div class="text-justify">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssociationInformation',
  props: {
    name: {
      type: String,
      default: undefined,
    },
    schoolName: {
      type: String,
      default: undefined,
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
    thematic: {
      type: String,
      default: undefined,
    },
    thematics: {
      type: Array,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
  },
}
</script>
