<template>
  <form @submit.prevent="submit">
    <FiltersLabeledInput
      v-model="name"
      label="Nom"
      name="name"
      placeholder="Rechercher par nom"
      variant="secondary"
      @update="updateInput"
    />
    <InsameeLabeledItem
      label="Les thématiques"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <FiltersComboboxMultiple
        name="thematics"
        variant="secondary"
        placeholder="Sélectionner une / des thématiques"
        :value="thematics"
        @selected="thematics = $event"
        @update="updateComboboxMultiple"
      />
    </InsameeLabeledItem>
    <InsameeLabeledItem
      label="Les tags"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <FiltersComboboxMultiple
        name="tags"
        variant="secondary"
        placeholder="Sélectionner un / des tags"
        :value="tags"
        @selected="tags = $event"
        @update="updateComboboxMultiple"
      />
    </InsameeLabeledItem>
    <InsameeLabeledItem
      label="Les écoles"
      variant="secondary"
      class="mt-2"
      class-name="text-base"
    >
      <FiltersComboboxMultiple
        name="schools"
        variant="secondary"
        placeholder="Sélectionner une / des écoles"
        :value="schools"
        @selected="schools = $event"
        @update="updateComboboxMultiple"
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
  watch: {
    '$route.query'() {
      this.updateFilters()
    },
  },
  methods: {
    submit() {
      this.$emit('submit', {
        name: this.name,
        thematics: this.thematics.map((el) => el.value),
        tags: this.tags.map((el) => el.value),
        schools: this.schools.map((el) => el.value),
      })
    },
    updateFilters() {
      this.updateInput()
      this.updateComboboxMultiple('thematics')
      this.updateComboboxMultiple('tags')
      this.updateComboboxMultiple('schools')
    },
    updateComboboxMultiple(name) {
      const filter = this.$store.getters[`filters/${name}`]
      const data = this.$store.getters[`data/${name}`]

      this[name] = data.filter((el) => filter.includes(el.value))
    },
    updateInput() {
      const filter = this.$store.getters[`filters/name`]
      this.name = filter
    },
  },
}
</script>
