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
      <slot :row="props.item"/>
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
