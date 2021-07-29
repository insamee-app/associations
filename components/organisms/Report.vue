<template>
  <div>
    <!-- TODO: ensuite il faut ajouter le singelemnt dans un form pour avoir le entrer et faire une gestion de l'erreur  sous le envoyer (et sous le bouton de signelemnt) et la value dans report (app check) peut être un number et gestion du already -->
    <InsameeIconSpinner
      v-if="loadingReasons"
      class="h-6 w-6 text-secondary-base fill-current animate-spin"
    />
    <div
      v-else-if="errorReasons || report"
      class="text-sm text-grey-secondary-base"
    >
      <template v-if="errorReasons"> Une erreur est survenue </template>
      <template v-if="!report.already"> Merci de votre signalement </template>
      <template v-else-if="report.already">
        Vous avez déjà signalé cette association
      </template>
    </div>
    <InsameeAppButton
      v-else
      border
      shadow
      variant="secondary"
      @click="modal = true"
    >
      Signaler l'association
    </InsameeAppButton>
    <Portal>
      <InsameeAppModal :value="modal" @outside="modal = $event">
        <InsameeReport
          :loading="loading"
          :items="reasons"
          :error-message="errorReport"
          @close="modal = !$event"
          @send="send"
        />
      </InsameeAppModal>
    </Portal>
  </div>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'

export default {
  name: 'Report',
  components: {
    Portal,
  },
  data() {
    return {
      modal: false,
      loading: false,
      report: undefined,
      loadingReasons: false,
      errorReasons: false,
      errorReport: '',
    }
  },
  computed: {
    reasons() {
      return this.$store.getters['data/reasonsAssociations']
    },
  },
  async created() {
    this.loadingReasons = true
    try {
      await this.$store.dispatch('data/fetch', 'reasonsAssociations')
    } catch (error) {
      this.errorReasons = true
    }
    this.loadingReasons = false
  },
  methods: {
    async send(data) {
      this.loading = true
      const id = this.$route.params.id
      try {
        const response = await this.$axios.post(
          `/api/v1/associations/${id}/reports`,
          {
            reason: data.report.value,
            description: data.details,
          }
        )
        this.modal = false
        this.report = response.data
      } catch (error) {
        if ('errors' in error.response.data) {
          this.errorReport = error.response.data.errors[0].message
        } else {
          this.errorReport =
            "Une erreur est survenue. N'hésitez pas à nous contacter."
        }
      }
      this.loading = false
    },
  },
}
</script>
