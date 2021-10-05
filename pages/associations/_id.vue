<template>
  <InsameeAppContainer class="mx-auto" small>
    <Association
      :name="association.name"
      :school-name="association.school.name"
      :image-url="association.image_url"
      :thematic-name="association.thematic.name"
      :tags="getTexts(association.tags)"
      :text="association.text"
      :email="association.email"
      :profiles="profiles"
      :pagination="pagination"
      :loading="$fetchState.pending"
      :error="$fetchState.error"
      @pagination="refreshProfilesPagination"
    />
  </InsameeAppContainer>
</template>

<script>
import getTexts from '@/mixins/getTexts'

export default {
  mixins: [getTexts],
  middleware: 'authenticated',
  async asyncData({ params, $axios, error }) {
    const path = '/api/v1/associations'
    const { id } = params

    try {
      const { data: association } = await $axios.get(
        `${path}/${id}?platform=associations`
      )
      return {
        association,
      }
    } catch (e) {
      error(e.response.data)
    }
  },
  data() {
    return {
      profiles: [],
      pagination: undefined,
      page: 1,
    }
  },
  async fetch() {
    const id = this.association.id
    const query = this.$store.getters['filters/getProfilesSearchParams']
    const path = '/api/v1/associations/' + id + '/profiles?' + query

    const { data } = await this.$axios.get(path)

    this.profiles = data.data
    this.pagination = data.meta
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
    refreshProfilesPagination(value) {
      this.$store.commit('filters/setPagination', {
        pagination: 'profiles',
        name: 'page',
        value,
      })
      this.setRoute()
    },
    parseUrl() {
      for (const query in this.$route.query) {
        const value = this.$route.query[query]
        this.$store.commit('filters/setPagination', {
          pagination: 'profiles',
          name: query,
          value,
        })
      }
    },
    setRoute() {
      const query = this.$store.getters['filters/getProfilesSearchParams']
      this.$router.push({
        path: `/associations/${this.$route.params.id}?${query}`,
      })
    },
  },
}
</script>
