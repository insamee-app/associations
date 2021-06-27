export const state = () => ({
  pagination: {
    profiles: {
      limit: 5,
      page: 1,
    },
    associations: {
      limit: 5,
      page: 1,
    },
  },
})

export const mutations = {
  setPagination(state, { pagination, name, value }) {
    // Avoid unwanted value from url
    if (Object.keys(state.pagination[pagination]).includes(name))
      state.pagination[pagination][name] = value
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
  getAssociationsSearchParams({ pagination: { associations } }) {
    const data = {}
    for (const property in associations) {
      if (associations[property]) data[property] = associations[property]
    }
    const searchParams = new URLSearchParams(data)
    return searchParams.toString()
  },
}
