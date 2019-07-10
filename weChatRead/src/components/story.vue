<template>
  <div ref="storys">
    <!-- <div class="content">
      <div class="msg">
        <div class="msg_text">程序读书微信小程序读书微信小程序读书微信小程序读书</div>
        <div class="msg_img">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1619683067,2993665289&fm=27&gp=0.jpg"
            alt="还未放图片"
          >
        </div>
      </div>
      <div class="foot">
        <div class="foot_text">近期热门</div>
        <div class="foot_img">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="还未放图片">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg" alt="">
          <img @click="handleLike" :src="isSelected ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg'" alt="">
          <div class="num">1</div>
        </div>
      </div>
    </div>-->
    <div class="content" v-for="(story,index) in storys" :key="index">
      <div class="msg">
        <div class="msg_text">{{story.title}}</div>
        <div class="msg_img">
          <img :src="story.src" alt="还未放图片">
        </div>
      </div>
      <div class="foot">
        <div class="foot_text">{{ story.type }}</div>
        <div class="foot_img">
          <!-- <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="还未放图片"> -->
          <img
            @click="handleLike(index)"
            :src="story.isLike ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg'"
            alt
          >
          <div class="num">{{ story.star}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storys: []
      // isLike: false
    };
  },

  methods: {
    handleLike(index) {
      console.log(index);
      this.storys[index].isLike = !this.storys[index].isLike;
      let title = this.storys[index].isLike;
      console.log(title);
      wx.showToast({
        title: title ? "已点赞" : "已取消点赞",
        icon: "success"
      });
      if (title == true) this.storys[index].star++;
      else this.storys[index].star--;
      let oldStorage = wx.getStorageSync("isLike");
      let oldStorageNum = wx.getStorageSync("num");
      // oldStorageNum = {}

      if (!oldStorage) {
        wx.setStorage({
          key: "isLike",
          data: ""
        });
      }
      if (!oldStorageNum) {
        wx.setStorage({
          key: "num",
          data: ""
        });
      }

      oldStorage[index] = this.storys[index].isLike;
      oldStorageNum[index] = this.storys[index].star
      for (let i = 0, len = this.storys.length; i < len; i++) {
        if (i == index) {
          wx.setStorage({
            key: "isLike",
            data: oldStorage
          });
          wx.setStorage({
            key: "num",
            data: oldStorageNum
          });
        }
      }
    }
  },
  beforeMount() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca457efc4e9a575b66b625c/example/mpvue/story"
      )
      .then(res => {
        console.log(res);
        this.storys = res.data.data;
        let oldStorage = wx.getStorageSync("isLike");
        let oldStorageNum = wx.getStorageSync("num");

        if (!oldStorage) {
          wx.setStorage({
            key: "isLike",
            data: oldStorage
          });
        } else {
          for(let i = 0, len = this.storys.length; i < len; i++) {
            this.storys[i].isLike = oldStorage[i] ? true : false
          }
        }
        if (!oldStorageNum) {
          wx.setStorage({
            key: "num",
            data: oldStorageNum
          });
        } else {
          for(let i = 0, len = this.storys.length; i < len; i++) {
            this.storys[i].star = oldStorageNum[i]
          }
        }
      });

    
  
  },
  created() {
    // console.log(this.storys)
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 160px;
  width: 100%;
  border-bottom: 1px solid #eee;
  margin-top: 10px;

  .msg {
    width: 100%;
    height: 100px;
    display: flex;

    .msg_img {
      width: 100px;
      height: 100px;
      float: right;
      line-height: 100px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .msg_text {
      flex: 1;
      margin: 10px;
      font: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }
  }

  .foot {
    width: 100%;
    height: 60px;
    display: flex;

    .foot_img {
      width: 60px;
      height: 60px;
      float: right;
      line-height: 60px;
      display: flex;
      align-items: center;
      margin-right: 20px;

      img {
        width: 40px;
        height: 40px;
      }

      .num {
        width: 20px;
        height: 20px;
        opacity: 0.7;
      }
    }

    .foot_text {
      flex: 1;
      line-height: 60px;
      margin: 10px;
      opacity: 0.7;
    }
  }
}
</style>
