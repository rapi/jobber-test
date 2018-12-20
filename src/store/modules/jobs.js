import {
  JOBS_FETCH
} from "@/constants/Types.actions";

import {
  JOBS_BY_CATEGORIES_LIST,
  JOBS_BY_CATEGORIES_LOADING,
  JOBS_BY_CATEGORIES_ERROR,
}
from "@/constants/Types.getters";

import {
  JOB_CATEGORY_LOADING,
  JOBS_FETCHED,
  JOBS_LOADING,
  JOBS_ERROR,
}
from "@/constants/Types.mutations";


import {
  fetch
} from "@/api/jobs"
export default {
  state: {
    list: [],
    loading: {},
    error: {},
  },
  mutations: {
    [JOBS_FETCHED]: (state, data) => state.list = state.list.concat(data),
    [JOBS_LOADING]: (state, data) => state.loading[data.category = data.loading],
    [JOBS_ERROR]: (state, data) => state.error = data.error,
  },
  actions: {
    [JOBS_FETCH]: (context, params) => {
      context.commit(JOB_CATEGORY_LOADING, {
        loading: true,
        id: params.category
      })
      fetch(params)
        .then(result => {
          context.commit(JOBS_FETCHED, result.data)
        })
        .catch(e => context.commit(JOBS_ERROR, error))
        .then(() => context.commit(JOB_CATEGORY_LOADING, {
          loading: false,
          id: params.category
        }))
    }
  },
  getters: {
    [JOBS_BY_CATEGORIES_LIST]: state => state.list,
    [JOBS_BY_CATEGORIES_LOADING]: state => state.loading,
    [JOBS_BY_CATEGORIES_ERROR]: state => state.error,
  }

}
