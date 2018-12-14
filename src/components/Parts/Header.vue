<template>
  <v-toolbar
    color="indigo"
    dark
    fixed
    app
  >
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer/>
    <Search/>
  </v-toolbar>
</template>
<script>
import Search from '@/components/Search/Jobs'
export default {
  components: {
    Search
  }
}
</script>
