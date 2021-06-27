export const state = () => ({
  profile: undefined,
})

export const mutations = {
  setProfile(state, profile) {
    if (!profile) state.profile = undefined
    else {
      state.profile = profile
    }
  },
}

export const actions = {
  login({ commit }, profile) {
    commit('setProfile', profile)
  },
  async logout({ commit }) {
    await this.$axios.post('/auth/logout')
    commit('setProfile', undefined)
    this.$router.push({ name: 'index' })
  },
}

export const getters = {
  loggedIn({ profile }) {
    return !!profile
  },
}
