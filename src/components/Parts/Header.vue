<template>
  <v-toolbar
    color="indigo"
    dark
    fixed
    app
  >
    <v-toolbar-title>
      <router-link
        to="/"
        tag="button"
      >Application</router-link>
    </v-toolbar-title>
    <v-spacer/>

    <Search/>
  </v-toolbar>
</template>
<script>
import Search from "@/components/Search/Jobs";
export default {
  components: {
    Search
  }
};
</script>

