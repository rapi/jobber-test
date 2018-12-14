<template>
  <v-footer
    height="auto"
    color="indigo"
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;{{ year }} —
        <strong>Rapi</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
}
</script>
