// Api
import {
  fetchCategories
} from "@/api/jobsCategories";

//Mutation Constants
import {
  JOBS_CATEGORIES_LIST,
  JOBS_CATEGORIES_LOADING,
  JOBS_CATEGORIES_ERROR,
  JOBS_CATEGORIES_BY_ID,
} from "@/constants/Types.getters";

//Getters Constants
import {
  JOBS_CATEGORY_LOADING,
  JOBS_CATEGORY_FETCHED,
  JOBS_CATEGORY_ERROR,
  JOB_CATEGORY_LOADING,
} from "@/constants/Types.mutations";

//Actions Constants
import {
  JOBS_CATEGORY_FETCH
} from "@/constants/Types.actions";



export default {
  // namespaced: true,
  state: {
    list: [],
    loading: false,
    error: false
  },
  mutations: {
    [JOBS_CATEGORY_FETCHED]: (state, list) => state.list = list,
    [JOBS_CATEGORY_ERROR]: (state, error) => state.error = error,
    [JOBS_CATEGORY_LOADING]: (state, loading) => state.loading = loading,
    [JOB_CATEGORY_LOADING]: (state, data) => state.list.find(e => e._id === data.id).loading = data.loading,
  },
  actions: {
    //Fetch all actegories
    [JOBS_CATEGORY_FETCH]: (context, params) => {
      context.commit(JOBS_CATEGORY_LOADING, true)
      fetchCategories(params)
        .then(list => context.commit(JOBS_CATEGORY_FETCHED, list.map(e => ({
          ...e,
          loading: false
        }))))
        .catch(error => commit(JOBS_CATEGORY_ERROR, error.toString()))
        .then(list => context.commit(JOBS_CATEGORY_LOADING, false))
    }
  },
  getters: {
    [JOBS_CATEGORIES_LIST]: state => state.list,
    [JOBS_CATEGORIES_LOADING]: state => state.loading,
    [JOBS_CATEGORIES_ERROR]: state => state.error,
    [JOBS_CATEGORIES_BY_ID]: state => id => state.list.find(e => e._id === id),
  }
};
