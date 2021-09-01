export const state = () => ({
  thematics: [],
  tags: [],
  schools: [],
  reasonsAssociations: [],
  reasonsProfiles: [],
})

export const mutations = {
  set(state, { name, value }) {
    state[name] = value
  },
}

export const actions = {
  async fetch({ state, commit }, name) {
    const endpoint = name.includes('reasons')
      ? `/api/v1/reasons?resource=${name.replace('reasons', '').toLowerCase()}`
      : `/api/v1/${name}?serialize=filter&platform=associations`
    if (!state[name].length) {
      const { data } = await this.$axios.get(endpoint)
      commit('set', { name, value: data })
    }
  },
}

export const getters = {
  thematics(state) {
    return state.thematics.map((thematic) => ({
      text: thematic.name,
      value: thematic.id,
    }))
  },
  tags(state) {
    return state.tags.map((tag) => ({
      text: tag.name,
      value: tag.id,
    }))
  },
  schools(state) {
    return state.schools.map((school) => ({
      text: school.name,
      value: school.id,
    }))
  },
  reasonsAssociations(state) {
    return state.reasonsAssociations.map((reason) => ({
      text: reason.name,
      value: reason.id,
    }))
  },
  reasonsProfiles(state) {
    return state.reasonsProfiles.map((reason) => ({
      text: reason.name,
      value: reason.id,
    }))
  },
}
