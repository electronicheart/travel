<template>
  <div>
    <CityHeader />
    <CitySearch />
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header'
import CitySearch from '@/components/city/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
