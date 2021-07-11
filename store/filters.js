export const state = () => ({
  pagination: {
    profiles: {
      limit: 6,
      page: 1,
    },
    associations: {
      page: 1,
    },
  },
  filters: {
    associations: {
      name: '',
      'thematics[]': [],
      'tags[]': [],
      'schools[]': [],
    },
  },
})

export const mutations = {
  setPagination(state, { pagination, name, value }) {
    // Avoid unwanted value from url
    if (Object.keys(state.pagination[pagination]).includes(name))
      state.pagination[pagination][name] = value
  },
  setFilters(state, { filter, name, value }) {
    // Avoid unwanted value from url
    if (Object.keys(state.filters[filter]).includes(name)) {
      if (Array.isArray(value))
        state.filters[filter][name] = value.map((v) => +v)
      else state.filters[filter][name] = value
    }
  },
  resetFilters(state) {
    state.filters.associations = {
      name: '',
      'thematics[]': [],
      'tags[]': [],
      'schools[]': [],
    }
  },
}

export const getters = {
  getProfilesSearchParams({ pagination: { profiles } }) {
    const data = {}
    for (const property in profiles) {
      if (profiles[property]) data[property] = profiles[property]
    }
    const searchParams = new URLSearchParams(data)
    return searchParams.toString()
  },
  getAssociationsSearchParams({
    pagination: { associations: associationsPagination },
    filters: { associations: associationsFilters },
  }) {
    const searchParams = new URLSearchParams()
    for (const property in associationsPagination) {
      const value = associationsPagination[property]
      if (value) searchParams.append(property, value)
    }
    for (const property in associationsFilters) {
      const value = associationsFilters[property]
      if (Array.isArray(value) && value.length > 0)
        value.forEach((v) => searchParams.append(property, v))
      else if (typeof value === 'string' && value)
        searchParams.append(property, value)
    }
    return searchParams.toString()
  },
  name({ filters: { associations } }) {
    return associations.name
  },
  thematics({ filters: { associations } }) {
    return associations['thematics[]']
  },
  tags({ filters: { associations } }) {
    return associations['tags[]']
  },
  schools({ filters: { associations } }) {
    return associations['schools[]']
  },
}
