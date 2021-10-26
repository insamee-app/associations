<template>
  <div class="text-xl text-center">
    Vous allez être redirigé sur le portail de connexion...
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  head() {
    return {
      title: 'Se connecter',
    }
  },
  beforeMount() {
    window.location.href =
      this.$config.insameeURL + '/login?redirect=associations'
  },
}
</script>
