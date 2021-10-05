<template>
  <InsameeResponsiveList
    :full-filters="lgAndUp"
    :action-filters="mdAndDown"
    :total-pagination="paginationTotal"
    :loading="$fetchState.pending"
  >
    <template #filters-full="{ classNames }">
      <FiltersCard :class="classNames" @submit="refreshFilters" />
    </template>
    <template #cards="{ loading }">
      <InsameeResponsiveListCards :loading="loading">
        <template #skeletons>
          <InsameeSkeletonCard
            v-for="value in 20"
            :key="value"
            variant="association"
          />
        </template>
        <template #cards>
          <AssociationCard
            v-for="association in associations"
            :id="association.id"
            :key="association.id"
            :name="association.name"
            :school-name="association.school.name"
            :thematic="association.thematic.name"
            :tags="getTexts(association.tags)"
            :text="association.short_text"
            :image-url="association.image_url"
          />
        </template>
      </InsameeResponsiveListCards>
    </template>
    <template #error>
      <div class="space-y-2 mt-4">
        <p class="font-bold">
          Désolé, aucune association ne correspond à ta recherche...
        </p>
        <p>
          Mais si tu penses que c’est une erreur de notre part, tu peux nous
          contacter pour palier à ce problème.
        </p>
        <p>
          Tu peux aussi fonder ta propre association et nous serons ravis de
          l’accueillir sur le site !
        </p>
      </div>
      <div class="mt-8">
        <InsameeAppButton empty :to="{ name: 'contact' }">
          Nous contacter ?
        </InsameeAppButton>
      </div>
    </template>
    <template #filters-action>
      <InsameeAppButton
        shadow
        variant="secondary"
        class="mt-6"
        @click="modalFilters = true"
      >
        {{ filterMessage }}
      </InsameeAppButton>
      <InsameeAppModal :value="modalFilters" @outside="modalFilters = $event">
        <FiltersCard
          closable
          @submit="refreshFilters"
          @close="modalFilters = !$event"
        />
      </InsameeAppModal>
    </template>
    <template #pagination="{ classNames }">
      <InsameeResponsiveListPagination :class="classNames">
        <InsameePagination
          :small="mdAndDown"
          :previous-page="
            pagination.previous_page_url
              ? pagination.current_page - 1
              : undefined
          "
          :next-page="
            pagination.next_page_url ? pagination.current_page + 1 : undefined
          "
          :first-page="pagination.first_page"
          :current-page="pagination.current_page"
          :last-page="pagination.last_page"
          @pagination="refreshPagination"
        />
      </InsameeResponsiveListPagination>
    </template>
  </InsameeResponsiveList>
</template>

<script>
import getTexts from '@/mixins/getTexts'

export default {
  mixins: [getTexts],
  middleware: 'authenticated',
  data() {
    return {
      modalFilters: false,
      associations: [],
      pagination: undefined,
    }
  },
  async fetch() {
    const query = this.$store.getters['filters/getAssociationsSearchParams']
    const path = `/api/v1/associations?${query}&serialize=card&platform=associations`

    const { data } = await this.$axios.get(path)

    this.associations = data.data
    this.pagination = data.meta
  },
  computed: {
    mdAndDown() {
      return !this.$screen.lg
    },
    lgAndUp() {
      return this.$screen.lg
    },
    paginationTotal() {
      return this.pagination ? this.pagination.total : 0
    },
    filterMessage() {
      return this.paginationTotal
        ? 'Rechercher par filtres'
        : "Essayer d'autres filtres"
    },
  },
  watch: {
    '$route.query'() {
      this.parseUrl()
      this.$fetch()
    },
  },
  beforeMount() {
    this.parseUrl()
  },
  methods: {
    parseUrl() {
      this.$store.commit('filters/resetFilters')
      for (const query in this.$route.query) {
        const value = this.$route.query[query]
        this.$store.commit('filters/setPagination', {
          pagination: 'associations',
          name: query,
          value,
        })

        this.$store.commit('filters/setFilters', {
          filter: 'associations',
          name: query,
          // With one number, *[] value is a single value and not an array, so we need to convert it
          value:
            query.includes('[]') && !Array.isArray(value) ? [value] : value,
        })
      }
    },
    refreshPagination(value) {
      this.$store.commit('filters/setPagination', {
        pagination: 'associations',
        name: 'page',
        value,
      })
      this.setRoute()
    },
    refreshFilters(data) {
      this.modalFilters = false
      for (const iterator in data) {
        const value = data[iterator]
        this.$store.commit('filters/setFilters', {
          filter: 'associations',
          name: iterator,
          value,
        })
      }
      this.setRoute()
    },
    setRoute() {
      const query = this.$store.getters['filters/getAssociationsSearchParams']
      this.$router.push({
        path: `/associations?${query}`,
      })
    },
  },
}
</script>
