<template>
  <InsameeHeader
    :icon-link="{ name: 'index' }"
    :icon-nav="!$screen.md"
    @open="$emit('open', $event)"
  >
    <template #nav>
      <InsameeHeaderNav v-if="$screen.md">
        <InsameeAppList :list="nav" row />
      </InsameeHeaderNav>
    </template>
    <template #actions>
      <InsameeAppButton
        v-if="$screen.md"
        empty
        variant="secondary"
        :href="$config.insameeURL + '/signup'"
      >
        Se connecter
      </InsameeAppButton>
      <InsameeAppButton border :href="$config.insameeURL + '/login'">
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
