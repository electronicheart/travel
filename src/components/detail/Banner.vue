<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          八达岭长城(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe611;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose" />
  </div>
</template>

<script>
import CommonGallary from '@/components/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_r_800x800_ae28174d.jpg', 'http://img1.qunarzz.com/sight/p0/1908/e0/e0ee4f5e3ec59d14a3.img.jpg_r_800x800_fe02a2d6.jpg']
    }
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
    CommonGallary
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
