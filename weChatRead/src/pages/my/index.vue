<template>
  <div class="header">
    <div class="img">
      <img :src="avatarUrl" class="avatar" alt="">
      <span class="arrow">></span>
    </div>
    <div class="text">编辑个人资料</div>
    <div class="com">
      <func-me></func-me>
    </div>
    
  </div>
</template>

<script>
import func from '@/components/func.vue'
var app = getApp();
export default {
  components: {
    'func-me': func
  },
  data() {
    return {
      avatarUrl:''
    };
  },
  mounted() {
    console.log(app.globalData.userInfo)
    wx.setNavigationBarTitle({
      title: app.globalData.userInfo.nickName,
      success: function(res) {
        console.log('success!')
      }
    })
    this.avatarUrl = app.globalData.userInfo.avatarUrl
  }
};
</script>

<style lang="stylus" scoped>
page 
  background  #D3D3D3
  .header
    background #D3D3D3
    width 100%
    height 200px
    .img
      width 100%
      height 160px
      margin-top 10px
      position relative
      .avatar
        width 80px
        height 80px
        border-radius 40px
        background-color red
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
      .arrow
        position absolute
        left 80%
        top 50%
        line-height 10px
    .text
      text-align center
      margin-bottom 30px
    .com
      margin-bottom 20px
</style>
