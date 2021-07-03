<template>
  <InsameeResponsiveList>
    <template #filter>
      <InsameeAppCard v-if="mdAndDown" class="w-full">
        <div class="flex flex-row items-center justify-end">
          <InsameeAppButton variant="secondary" @click="modalFilters = true">
            Filtrer
          </InsameeAppButton>
          <Portal>
            <InsameeAppModal
              :value="modalFilters"
              @outside="modalFilters = $event"
            >
              <FiltersCard @submit="refreshFilters" />
            </InsameeAppModal>
          </Portal>
        </div>
      </InsameeAppCard>
      <FiltersCard v-if="lgAndUp" class="w-full" @submit="refreshFilters" />
    </template>
    <template #cards>
      <InsameeResponsiveListCards
        :loading="$fetchState.pending"
        :pagination="pagination"
        :pagination-total="paginationTotal"
        :items-total="associations.length"
      >
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
        <template #pagination>
          <InsameeResponsiveListPagination>
            <InsameePagination
              :small="mdAndDown"
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
              @pagination="refreshPagination"
            />
          </InsameeResponsiveListPagination>
        </template>
      </InsameeResponsiveListCards>
    </template>
  </InsameeResponsiveList>
</template>

<script>
import getTexts from '@/mixins/getTexts'
import { Portal } from '@linusborg/vue-simple-portal'

export default {
  components: { Portal },
  mixins: [getTexts],
  middleware: 'authenticated',
  data() {
    return {
      modalFilters: false,
      associations: [],
      pagination: undefined,
      itemsPerPage: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
        { text: '20', value: 20 },
      ],
    }
  },
  async fetch() {
    const query = this.$store.getters['filters/getAssociationsSearchParams']
    const path = `/api/v1/associations?${query}&serialize=card`

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
          value,
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
