<template>
  <div>
    <Progress v-if="loading"/>
    <v-container
      v-else
      fluid
      fill-height
    >
      <v-layout>
        <v-flex>
          <JobsTable
            :category="$route.params.id"
            :options="{
              'hide-actions':true,
              'no-data':''}"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
//core
import { mapGetters } from "vuex";

//templates
import JobsTable from "@/components/Jobs/Table";
import Progress from "@/components/Progress/Full";

//store
import { JOBS_CATEGORY_FETCH } from "@/constants/Types.actions";
import { JOBS_CATEGORIES_LOADING } from "@/constants/Types.getters";

export default {
  components: {
    Progress,
    JobsTable
  },
  computed: {
    ...mapGetters({
      loading: JOBS_CATEGORIES_LOADING
    })
  },
  mounted() {
    this.$store.dispatch(JOBS_CATEGORY_FETCH, {});
  }
};
</script>
