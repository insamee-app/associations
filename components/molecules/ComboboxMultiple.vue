<template>
  <div>
    <InsameeIconSpinner
      v-if="!items.length"
      class="animate-spin text-secondary-base fill-current mx-auto"
    />
    <div v-else-if="error">Une erreur est survenue</div>
    <InsameeComboboxMultiple
      v-else
      variant="secondary"
      :items="items"
      :placeholder="placeholder"
      :value="value"
      @selected="$emit('selected', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'ComboboxMultiple',
  props: {
    value: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      error: undefined,
    }
  },
  computed: {
    items() {
      return this.$store.getters[`data/${this.name}`]
    },
  },
  watch: {
    '$route.query'() {
      this.emit()
    },
  },
  async created() {
    try {
      await this.$store.dispatch('data/fetch', this.name)
      this.emit()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    // Get filters for the store (URL) and populate the combobox using fetched data
    emit() {
      const filters = JSON.parse(this.$store.getters[`filters/${this.name}`])
      const data = this.$store.getters[`data/${this.name}`]
      this.$emit(
        'selected',
        data.filter((el) => filters.includes(el.value))
      )
    },
  },
}
</script>
