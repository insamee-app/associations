export const state = () => ({
  thematics: [],
  tags: [],
  schools: [],
})

export const mutations = {
  set(state, { name, value }) {
    state[name] = value
  },
}

export const actions = {
  async fetch({ state, commit }, name) {
    if (!state[name].length) {
      const { data } = await this.$axios.get(`/api/v1/${name}?serialize=filter`)
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
}
