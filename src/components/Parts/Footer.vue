<template>
  <v-footer
    height="auto"
    color="indigo"
  >
    <v-layout
      row
      wrap
      text-xs-right
      pa-3
      white--text
    >
      <v-flex text-align="right">
        &copy;{{ year }} —
        <strong>Rapi</strong>
        <v-spacer/>
      </v-flex>
      <v-flex>
        Contact me:
        <a
          v-for="(info,name) in social"
          :key="name"
          :href="info.link"
          class="mr-2"
          target="_blank"
        >
          <v-icon dark>{{ info.icon }}</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
import social from '@/constants/SocialLinks'
export default {
  data: () => ({
    social: social,
    year: new Date().getFullYear()
  })
}
</script>
