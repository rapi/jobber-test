<template>
  <div>
    <Table
      :headers="headers"
      :rows="[
        (row)=>row.title,
        (row)=>row.company,
        (row)=>row.location,
        (row)=>row.price,
      ]"
      :items="list.filter((el)=>el.category===category)"
      :options="Object.assign({
        'loading':categoryById(category).loading
      },options)"
    />
  </div>
</template>
<script>
//core
import { mapGetters } from "vuex";

import { JOBS_FETCH } from "@/constants/Types.actions";

import {
  JOBS_BY_CATEGORIES_LIST,
  JOBS_BY_CATEGORIES_LOADING,
  JOBS_BY_CATEGORIES_ERROR,
  JOBS_CATEGORIES_BY_ID
} from "@/constants/Types.getters";
import { setInterval } from "timers";

import Table from "@/components/Table/Table";
export default {
  components: {
    Table
  },
  props: {
    category: {
      required: false,
      default: false,
      type: [String, Boolean]
    },

    options: {
      required: false,
      default: () => ({}),
      type: Object
    }
  },
  data: () => ({
    headers: [
      {
        text: "Title",
        value: "title"
      },
      {
        text: "Company",
        value: "company"
      },
      {
        text: "location",
        value: "location"
      },
      {
        text: "price",
        value: "price"
      }
    ]
  }),
  computed: {
    ...mapGetters({
      list: JOBS_BY_CATEGORIES_LIST,
      categoryById: JOBS_CATEGORIES_BY_ID
      //   loading: state => state.loading[this.category]
    })
  },
  mounted() {
    this.$store.dispatch(JOBS_FETCH, {
      category: this.category
    });
  }
};
</script>
