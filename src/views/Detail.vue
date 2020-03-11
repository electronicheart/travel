<template>
  <div class="detail">
    <DetailBanner :sightname="sightname" :bannerImg="bannerImg" :bannerImgs="gallaryImgs" />
    <DetailHeader />
    <div class="content">
      <DetailList :list="list" />
    </div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
import DetailList from '@/components/detail/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data() {
    return {
      sightname: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightname = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
