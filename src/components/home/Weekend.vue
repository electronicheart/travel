<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '什刹海',
        desc: '什刹海是北京市历史文化旅游风景区、北京市历史文化保护区。'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城',
        desc: '八达岭长城，位于北京市延庆区军都山关沟古道北口。'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_200x200_8e27de70.jpg',
        title: '天安门广场',
        desc: '天安门广场，位于北京市中心，地处北京市东城区东长安街。'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
        title: '天坛公园',
        desc: '天坛，在北京市南部，东城区永定门内大街东侧。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  padding: 0.1rem
  .item-title
    line-height: 0.54rem
    font-size: 0.32rem
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #ccc
    ellipsis()
</style>
