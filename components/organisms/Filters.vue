<template>
  <form @submit.prevent="submit" @reset.prevent="reset">
    <FiltersLabeledInput
      v-model="filters.name"
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
        :value="filters['thematics[]']"
        @selected="filters['thematics[]'] = $event"
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
        :value="filters['tags[]']"
        @selected="filters['tags[]'] = $event"
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
        :value="filters['schools[]']"
        @selected="filters['schools[]'] = $event"
        @update="updateComboboxMultiple"
      />
    </InsameeLabeledItem>
    <div class="flex justify-between mt-4">
      <InsameeAppButton variant="secondary" border type="reset" shadow>
        Réinitialiser
      </InsameeAppButton>
      <InsameeAppButton variant="secondary" type="submit" shadow>
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
      filters: {
        name: '',
        'thematics[]': [],
        'tags[]': [],
        'schools[]': [],
      },
    }
  },
  watch: {
    '$route.query'() {
      this.updateFilters()
    },
  },
  methods: {
    reset() {
      this.filters = {
        name: '',
        'thematics[]': [],
        'tags[]': [],
        'schools[]': [],
      }
      this.submit()
    },
    submit() {
      this.$emit('submit', {
        name: this.filters.name,
        'thematics[]': this.filters['thematics[]'].map((el) => el.value),
        'tags[]': this.filters['tags[]'].map((el) => el.value),
        'schools[]': this.filters['schools[]'].map((el) => el.value),
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
      this.filters[name + '[]'] = data.filter((el) => filter.includes(el.value))
    },
    updateInput() {
      const filter = this.$store.getters[`filters/name`]
      this.filters.name = filter
    },
  },
}
</script>
