<template>
  <div>
    <TheHeader :nav="navList" @open="toggleNav" />
    <TheNavMobile
      v-if="!$screen.md"
      :value="nav"
      :nav="navList"
      @close="toggleNav"
    />
    <main class="max-w-7xl mx-auto">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    }
  },
  computed: {
    navList() {
      const nav = [
        {
          name: 'Trouver des associations',
          to: { name: 'associations' },
        },
        {
          name: 'Trouver des mee',
          href: this.$config.insameeURL + '/mee',
        },
        {
          name: 'Contact',
          to: { name: 'contact' },
        },
      ]
      // nav.unshift(
      //   this.loggedIn()
      //     ? { name: 'Mon profil', path: 'me' }
      //     : { name: 'Acceuil', path: 'index' }
      // )
      return nav
    },
  },
  watch: {
    $route() {
      this.nav = false
    },
  },
  methods: {
    // ...mapGetters({ loggedIn: 'auth/loggedIn' }),
    toggleNav(state) {
      this.nav = state
    },
  },
}
</script>
