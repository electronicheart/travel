<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
  </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
