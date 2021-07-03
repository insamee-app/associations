<template>
  <div class="text-xl text-center">
    Vous allez être redirigé sur le portail d'enregistrements...
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  beforeMount() {
    window.location.href = this.$config.insameeURL + '/signup'
  },
}
</script>
