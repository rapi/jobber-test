

<template>
  <v-container grid-list-md>
    <v-layout
      v-for="(title,field) in fields"
      :key="field"
      row
    >
      <div>
        <b>{{ title }}</b>
        : {{ details[field] }}
      </div>
    </v-layout>
    <div>
      <a
        :href="details.link"
        target="_blank"
      >Read More</a>
    </div>
  </v-container>
</template>
<script>
//core
import { mapGetters } from "vuex";

import { JOB_BY_ID } from "@/constants/Types.getters";

export default {
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      fields: {
        title: "Title",
        company: "Company",
        location: "Location",
        description: "Description",
        price: "Price"
      }
    };
  },
  computed: {
    ...mapGetters({
      jobById: JOB_BY_ID
    })
  }
};
</script>
