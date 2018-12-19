<template>
  <div>
    <Progress v-if="loading"/>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
    >
      <v-container
        fluid
        fill-height
      >
        <v-layout>
          <v-flex>
            <div
              v-for="row in list.slice(0,listSize)"
              :key="row._id"
            >
              <CategoryJobLink>{{ row.title }} {{ row._id }}</CategoryJobLink>
              <JobsTable :category="row._id"/>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
//core
import { mapGetters } from "vuex";

//templates
import CategoryJobLink from "@/components/Links/CategoryJob";
import JobsTable from "@/components/Jobs/Table";
import Progress from "@/components/Progress/Full";

//store
import { JOBS_CATEGORY_FETCH } from "@/constants/Types.actions";
import {
  JOBS_CATEGORIES_LIST,
  JOBS_CATEGORIES_LOADING,
  JOBS_CATEGORIES_ERROR
} from "@/constants/Types.getters";

export default {
  components: {
    Progress,
    CategoryJobLink,
    JobsTable
  },
  data: () => ({ listSize: 5 }),
  computed: {
    ...mapGetters({
      list: JOBS_CATEGORIES_LIST,
      loading: JOBS_CATEGORIES_LOADING,
      error: JOBS_CATEGORIES_ERROR
    })
  },
  mounted() {
    this.$store.dispatch(JOBS_CATEGORY_FETCH, {});
  },
  methods: {
    loadMore() {
      this.listSize += 5;
    }
  }
};
</script>
