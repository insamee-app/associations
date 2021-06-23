<template>
  <InsameeNavMobile :list="nav" :value="value" @close="close">
    <template #actions>
      <InsameeAppButton border :href="$config.insameeURL + '/signin'">
        S'inscrire
      </InsameeAppButton>
      <InsameeAppButton :href="$config.insameeURL + '/login'">
        Se connecter
      </InsameeAppButton>
    </template>
  </InsameeNavMobile>
</template>

<script>
export default {
  name: 'TheNavMobile',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    nav: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
  },
}
</script>
