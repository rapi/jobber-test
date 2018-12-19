<template>
  <div>
    <v-data-table
      :headers="[]"
      :loading="true"
      :items="[]"
      class="elevation-1"
    >
      <template
        slot="items"
        slot-scope="props"
      >
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { JOBS_FETCH } from "@/constants/Types.actions";
export default {
  props: {
    category: {
      required: false,
      default: false,
      type: [String, Boolean]
    }
  },
  mounted() {
    console.log(this.category);
    this.$store.dispatch(JOBS_FETCH, {
      category: this.category
    });
  }
};
</script>
