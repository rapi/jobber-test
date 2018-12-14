<template>
  <div>
    <slot/>
  </div>
</template>
<script>
export default {
  mounted: () => {
    console.log(this.detailsChild)
  }
}
</script>
