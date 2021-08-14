<template>
  <InsameeFooter>
    <div class="flex flex-col space-y-2">
      <InsameeAppButton
        empty
        :href="$config.insameeURL + '/terms-of-use'"
        variant="secondary"
      >
        Conditions générales d'utilisation
      </InsameeAppButton>
      <InsameeAppButton
        empty
        :href="$config.insameeURL + '/privacy'"
        variant="secondary"
      >
        Politique de confidentialité
      </InsameeAppButton>
    </div>
  </InsameeFooter>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
