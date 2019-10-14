
// initial state
const initialState = {
  userId: undefined,
};

// getters
const getters = {
  userId: state => state.userId,
};

// actions
const actions = {
  setUserId({ commit }, userId) {
    commit('setUserId', userId);
  },
};

// mutations
const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
