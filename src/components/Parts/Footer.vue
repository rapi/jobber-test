<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue">
        <strong class="subheading">For any questions you can message me</strong>

        <v-spacer/>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="blue darken-3 justify-center">
        &copy;{{ year }} —
        <strong>Rapi</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
}
</script>
