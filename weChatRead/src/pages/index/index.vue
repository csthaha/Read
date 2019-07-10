<template>
  <div class="index">
    <img class="index_img" src="/static/images/user.png" alt>
    <p class="text">欢迎来到微信读书</p>
    <div class="goRead">
      <!-- <p @click="open">开启我的读书之旅</p> -->
      <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">获取信息-开启读书之旅</button>
    </div>
  </div>
</template>

<script>
var app=getApp()
export default {
  data() {
    return {
      
    };
  },
  globalData:{
    userInfo: ""
  },
  methods: {
    bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      const self = this;
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        self.s1 = true;
        self.setting();
        console.log("用户按了允许授权按钮");
      } else {
        console.log("用户按了拒绝按钮");
      }
    },
    setting() {
      const self = this;
      wx.login({
        success(res) {
          console.log(res);
          if (res.code) {
            console.log("res.code" + res.code);
            var code = res.code;
            wx.getSetting({
              success(res) {
                if (res.authSetting["scope.userInfo"]) {
                  wx.getUserInfo({
                    //获取用户信息
                    success: res => {
                      // console.log(res.userInfo)
                      app.globalData.userInfo = res.userInfo;
                      wx.showToast({
                        title: "获取信息成功！",
                        icon: "success",
                        duration: 2000
                      });
                      setTimeout(() => {
                        wx.switchTab({
                          url: "../my/main"
                        });
                      },2000);
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  },
  
};
</script>

<style lang="stylus">
page {
  background: #76EE00;
}

.index {
  display: flex;
  align-items: center;
  flex-direction: column;

  .index_img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 100px 0;
  }

  .text {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
  }

  .goRead {
    width: 300px;
    height: 50px;
    border: 1px solid #eeeeee;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    background-color: #B4CDCD;
    border-radius: 10px;
  }
}
</style>
