<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList :cities="cities" :hot="hotCities" />
    <CityAlphabet :cities="cities" />
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/city/Header'
import CitySearch from '@/components/city/Search'
import CityList from '@/components/city/List'
import CityAlphabet from '@/components/city/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
