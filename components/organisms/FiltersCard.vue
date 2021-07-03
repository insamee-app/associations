<template>
  <InsameeAppCard>
    <InsameeAppCardTitle>Filtres</InsameeAppCardTitle>
    <Filters @submit="$emit('submit', $event)" />
  </InsameeAppCard>
</template>

<script>
export default {
  name: 'FiltersCard',
}
</script>
