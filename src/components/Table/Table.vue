<template>
  <v-data-table
    :headers="headers"
    :items="items"
    v-bind="options"
  >
    <template
      slot="items"
      slot-scope="props"
    >
      <td
        v-for="(row,name) in rows"
        :key="name"
        class="text-xs"
      >{{ row(props.item) }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    },
    rows: {
      type: Array,
      default: () => []
    }
  }
};
</script>
