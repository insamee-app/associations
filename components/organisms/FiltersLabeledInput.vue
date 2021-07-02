<template>
  <InsameeLabeledInput
    :value="value"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :variant="variant"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'FiltersLabeledInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
  mounted() {
    this.$emit('update')
  },
}
</script>
