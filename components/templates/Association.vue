<template>
  <div class="space-y-8">
    <AssociationInformation
      :name="name"
      :school-name="schoolName"
      :image-url="imageUrl"
      :thematic="thematicName"
      :tags="tags"
      :text="text"
      :email="email"
    />
    <div v-if="loading" class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
      <InsameeSkeletonCard
        v-for="value in $store.state.filters.pagination.profiles.limit"
        :key="value"
      />
    </div>
    <InsameeAppError v-else-if="error" :error-message="errorMessage" />
    <AssociationProfiles
      v-else
      :pagination="pagination"
      :profiles="profiles"
      @pagination="$emit('pagination', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'Association',
  props: {
    name: {
      type: String,
      default: undefined,
    },
    schoolName: {
      type: String,
      default: undefined,
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
    thematicName: {
      type: String,
      default: undefined,
    },
    tags: {
      type: Array,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    email: {
      type: String,
      default: undefined,
    },
    profiles: {
      type: Array,
      default: undefined,
    },
    pagination: {
      type: Object,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      errorMessage:
        "Une erreur est survenue dans le chargement des données. Si l'erreur persiste, n'hésitez pas à nous contacter.",
    }
  },
}
</script>
