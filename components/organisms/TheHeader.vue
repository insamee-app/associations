<template>
  <InsameeHeader
    :icon-link="{ name: 'index' }"
    icon-nav
    @open="$emit('open', $event)"
  >
    <template #nav
      ><InsameeHeaderNav> <InsameeAppList :list="nav" row /> </InsameeHeaderNav>
    </template>
    <template #actions>
      <InsameeAppButton border :href="$config.insameeURL + '/signin'">
        S'inscrire
      </InsameeAppButton>
    </template>
  </InsameeHeader>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    nav: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
