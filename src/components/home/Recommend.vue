<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg',
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    min-width: 0  /* 实现文字过长之后出现...的效果 */
    padding: 0.1rem
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
</style>
