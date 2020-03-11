<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{ this.sightname }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe611;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <Fade-Animation>
      <CommonGallary :imgs="bannerImgs" v-show="showGallary" @close="handleBannerClose" />
    </Fade-Animation>
  </div>
</template>

<script>
import CommonGallary from '@/components/common/gallary/Gallary'
import FadeAnimation from '@/components/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false
    }
  },
  props: {
    sightname: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    color: #fff
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      line-height: 0.32rem
      height: 0.32rem
      padding: 0 0.4rem
      margin-top: 0.14rem
      border-radius: 0.2rem
      font-size: 0.24rem
      background: rgba(0, 0, 0, 0.8)
      .banner-icon
        font-size: 0.24rem
</style>
