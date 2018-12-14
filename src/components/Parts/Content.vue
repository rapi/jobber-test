<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-layout>
        <v-flex>
          <slot/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  mounted: () => {
    console.log(this.detailsChild)
  }
}
</script>
