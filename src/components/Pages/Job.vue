<template>
  <Progress v-if="loading"/>
  <JobDetails
    v-else
    :details="jobById($route.params.id)"
  />
</template>
<script>
//core
import { mapGetters } from "vuex";

import { JOBS_FETCH } from "@/constants/Types.actions";
import Progress from "@/components/Progress/Full";

import JobDetails from "@/components/Jobs/Details";
import { JOB_BY_ID, JOBS_LOADING } from "@/constants/Types.getters";

export default {
  components: { Progress, JobDetails },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters({
      jobById: JOB_BY_ID,
      loading: JOBS_LOADING
    })
  },
  mounted() {
    this.$store.dispatch(JOBS_FETCH, {
      _id: this.$route.params.id
    });
  }
};
</script>
