import {
  JOBS_FETCH
} from "@/constants/Types.actions";
import {
  fetch
} from "@/api/jobs"
export default {
  state: {
    list: [],
    loading: false
  },
  actions: {
    [JOBS_FETCH]: (constext, params) => {
      fetch(params)
    }
  }

}
