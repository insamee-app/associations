<template>
  <InsameeNavMobile :list="nav" :value="value" @close="close">
    <template #actions>
      <template v-if="loggedIn()">
        <InsameeAppTeam
          :link-tutorat="$config.tutoratURL"
          :link-evenements="$config.insameeURL"
          link-associations="/"
          :link-insamee="$config.insameeURL"
        />
        <InsameeAppButton
          :disabled="loadingLogout"
          :loading="loadingLogout"
          @click="logout"
        >
          Se déconnecter
        </InsameeAppButton>
      </template>
      <template v-else>
        <InsameeAppButton border :to="{ name: 'signup' }">
          S'inscrire
        </InsameeAppButton>
        <InsameeAppButton :to="{ name: 'login' }">
          Se connecter
        </InsameeAppButton>
      </template>
    </template>
    <template #errors>
      <InsameeAppError :error-message="errorMessage" />
    </template>
  </InsameeNavMobile>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
  data() {
    return {
      errorMessage: '',
      loadingLogout: false,
    }
  },
  methods: {
    ...mapGetters({ loggedIn: 'auth/loggedIn' }),
    ...mapActions(['auth/logout']),
    async logout() {
      this.loadingLogout = true
      try {
        await this['auth/logout']()
        this.errorMessage = ''
      } catch (error) {
        this.errorMessage = error.message
      }
      this.loadingLogout = false
    },
    close() {
      this.$emit('close', false)
    },
  },
}
</script>
