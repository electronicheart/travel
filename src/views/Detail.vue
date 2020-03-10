<template>
  <div class="detail">
    <DetailBanner />
    <DetailHeader />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
