<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    :item-text="(el)=>el.title+'  /'+el.type"
    color="white"
    hide-no-data
    hide-selected
    item-value="description"
    prepend-inner-icon="fa-search"
    return-object
    @change="select"
  />
</template>
<script>
import { JOBS_LIST, JOBS_CATEGORIES_LIST } from "@/constants/Types.getters.js";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    items: []
  }),
  computed: {
    ...mapGetters({
      jobs: JOBS_LIST,
      jobsCategories: JOBS_CATEGORIES_LIST
    })
  },
  watch: {
    search(val) {
      if (val)
        this.items = this.jobs
          .filter(
            el => el.description.toUpperCase().indexOf(val.toUpperCase()) > -1
          )
          .map(el => ({ ...el, type: "Jobs" }))
          .concat(
            this.jobsCategories
              .filter(
                el => el.title.toUpperCase().indexOf(val.toUpperCase()) > -1
              )
              .map(el => ({ ...el, type: "Categories" }))
          );
    }
  },
  methods: {
    select(el) {
      if (el.type === "Jobs") this.$router.push("/job/" + el._id);
      else if (el.type === "Categories")
        this.$router.push("/category/" + el._id);
    }
  }
};
</script>
<style>
.fa-search {
  font-size: 17px;
}
</style>
