<template>
  <form @submit.prevent="submit">
    <InsameeLabeledInput
      v-model="name"
      label="Nom"
      name="name"
      placeholder="Rechercher par nom"
      variant="secondary"
    />
    <InsameeLabeledItem
      label="Les thématiques"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <ComboboxMultiple
        name="thematics"
        variant="secondary"
        placeholder="Sélectionner une / des thématiques"
        :value="thematics"
        @selected="thematics = $event"
      />
    </InsameeLabeledItem>
    <InsameeLabeledItem
      label="Les tags"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <ComboboxMultiple
        name="tags"
        variant="secondary"
        placeholder="Sélectionner un / des tags"
        :value="tags"
        @selected="tags = $event"
      />
    </InsameeLabeledItem>
    <InsameeLabeledItem
      label="Les écoles"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <ComboboxMultiple
        name="schools"
        variant="secondary"
        placeholder="Sélectionner une / des écoles"
        :value="schools"
        @selected="schools = $event"
      />
    </InsameeLabeledItem>
    <div class="flex justify-end mt-4">
      <InsameeAppButton variant="secondary" border type="submit">
        Valider
      </InsameeAppButton>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      name: '',
      thematics: [],
      tags: [],
      schools: [],
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {
        name: this.name,
        thematics: this.thematics,
        tags: this.tags,
        schools: this.schools,
      })
    },
  },
}
</script>
