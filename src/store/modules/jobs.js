import {
  JOBS_FETCH
} from "@/constants/Types.actions";

import {
  JOBS_LIST,
  JOBS_LOADING,
  JOBS_ERROR,
  JOB_BY_ID,
  JOBS_BY_CATEGORY,
}
from "@/constants/Types.getters";

import {
  JOB_CATEGORY_LOADING as LOADING_CATEGORY,
  JOBS_FETCHED as FECHED,
  JOBS_LOADING as LOADING,
  JOBS_ERROR as ERROR,
}
from "@/constants/Types.mutations";


import {
  fetch
} from "@/api/jobs"
export default {
  state: {
    list: [],
    loading: true,
    error: {},
  },
  mutations: {
    [FECHED]: (state, data) => state.list = state.list.concat(data),
    [LOADING]: (state, data) => state.loading = data.loading,
    [ERROR]: (state, data) => state.error = data.error,
  },
  actions: {
    [JOBS_FETCH]: (context, params) => {
      context.commit(LOADING, {
        loading: true,
      })
      if (params.category)
        context.commit(LOADING_CATEGORY, {
          loading: true,
          id: params.category
        })
      fetch(params)
        .then(result => {
          context.commit(FECHED, result.data)
        })
        .catch(e => context.commit(JOBS_ERROR, error))
        .then(() => {
          context.commit(LOADING, {
            loading: false,
          })
          if (params.category)
            context.commit(LOADING_CATEGORY, {
              loading: false,
              id: params.category
            })
        })
    }
  },
  getters: {
    [JOBS_LIST]: state => state.list,
    [JOBS_LOADING]: state => state.loading,
    [JOBS_ERROR]: state => state.error,
    [JOB_BY_ID]: state => id => state.list.find(e => e._id === id),
    [JOBS_BY_CATEGORY]: state => category => state.list.filter(el => el.category === category),
  }

}
