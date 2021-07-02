<template>
  <InsameeResponsiveList>
    <template #filter>
      <InsameeAppCard class="w-full">
        <div class="flex flex-row justify-end">
          <InsameeAppButton v-if="mdAndDown" variant="secondary">
            Filtrer
          </InsameeAppButton>
        </div>
      </InsameeAppCard>
      <InsameeAppCard v-if="lgAndUp" class="w-full">
        <InsameeAppCardTitle>Filtres</InsameeAppCardTitle>
        <Filters @submit="filters" />
      </InsameeAppCard>
    </template>
    <template #cards>
      <InsameeResponsiveListCards>
        <template v-if="$fetchState.pending">
          <InsameeSkeletonCard
            v-for="value in $store.state.filters.pagination.profiles.limit"
            :key="value"
            variant="association"
          />
        </template>
        <template v-else>
          <AssociationCard
            v-for="association in associations"
            :id="association.id"
            :key="association.id"
            :name="association.name"
            :school-name="association.school.name"
            :thematic="association.thematic.name"
            :tags="getTexts(association.tags)"
            :text="association.text"
            :image-url="association.image_url"
          />
        </template>
        <template #pagination>
          <InsameeResponsiveListPagination>
            <InsameePagination
              v-if="!$fetchState.pending"
              :small="$screen.lg"
              :previous-page="
                pagination.previous_page_url
                  ? pagination.current_page - 1
                  : undefined
              "
              :next-page="
                pagination.next_page_url
                  ? pagination.current_page + 1
                  : undefined
              "
              :first-page="pagination.first_page"
              :current-page="pagination.current_page"
              :last-page="pagination.last_page"
              @pagination="refresh"
            />
          </InsameeResponsiveListPagination>
        </template>
      </InsameeResponsiveListCards>
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
      associations: [],
      pagination: undefined,
    }
  },
  async fetch() {
    const query = this.$store.getters['filters/getAssociationsSearchParams']
    const path = '/api/v1/associations?' + query + '&serialize=card'

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
  },
  watch: {
    '$route.query'() {
      this.parseUrl()
      this.$fetch()
      // this.setRoute()
    },
  },
  beforeMount() {
    this.parseUrl()
  },
  methods: {
    refresh(value) {
      this.$store.commit('filters/setPagination', {
        pagination: 'associations',
        name: 'page',
        value,
      })
      this.setRoute()
    },
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
          value,
        })
      }
    },
    setRoute() {
      const query = this.$store.getters['filters/getAssociationsSearchParams']
      this.$router.push({
        path: `/associations?${query}`,
      })
    },
    filters(data) {
      for (const iterator in data) {
        let value
        if (typeof data[iterator] === 'string') value = data[iterator]
        else if (typeof data[iterator] === 'object')
          value = JSON.stringify(data[iterator].map((el) => el.value))

        this.$store.commit('filters/setFilters', {
          filter: 'associations',
          name: iterator,
          value,
        })
      }
      this.setRoute()
    },
  },
}
</script>
