<template>
  <InsameeHeader
    :name-link="{ name: 'index' }"
    :icon-nav="!$screen.md"
    @open="$emit('open', $event)"
  >
    <template #name> Associations </template>
    <template #nav>
      <InsameeHeaderNav v-if="$screen.md">
        <InsameeAppList :list="nav" row />
      </InsameeHeaderNav>
    </template>
    <template #actions>
      <template v-if="loggedIn()">
        <InsameeAppButton :to="{ name: 'associations' }">
          Trouver des associations
        </InsameeAppButton>
        <InsameeAppTeam
          :link-tutorat="$config.tutoratURL"
          :link-evenements="$config.insameeURL"
          link-associations="/"
          :link-insamee="$config.insameeURL"
        />
      </template>
      <InsameeAppButton
        v-if="!loggedIn() && $screen.md"
        empty
        variant="secondary"
        :to="{ name: 'signup' }"
      >
        Se connecter
      </InsameeAppButton>
      <InsameeAppButton v-if="!loggedIn()" border :to="{ name: 'login' }">
        S'inscrire
      </InsameeAppButton>
    </template>
  </InsameeHeader>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  props: {
    nav: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapGetters({ loggedIn: 'auth/loggedIn' }),
  },
}
</script>
