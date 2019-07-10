<template>
  <div>
    <div class="main">
      <div class="container" v-for="(item, index) in imageUrl1" :key="index">
        <div class="left">
          <img class="img" :src="item.url" alt />
          <div class="text">{{ item.title }}</div>
        </div>
        <div class="right">
          <div class="num"></div>
          <div class="detail" v-if="index === 0">已购8本书</div>
          <div class="detail" v-if="index === 1">9元 / 月</div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="container" v-for="(item, index) in imageUrl2" :key="index">
        <div class="left">
          <img class="img" :src="item.url" alt />
          <div class="text">{{ item.title}}</div>
        </div>
        <div class="right">
          <div class="num"></div>
          <div class="detail" v-if="index === 0">本周尚未开始阅读</div>
          <div class="detail" v-if="index === 1">没人关注你</div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="container" v-for="(item, index) in imageUrl3" :key="index">
        <div class="left">
          <img class="img" :src="item.url" alt />
          <div class="text">{{ item.title }}</div>
        </div>
        <div class="right">
          <div class="num"></div>
          <div class="detail" v-if="index === 0">3本</div>
          <div class="detail" v-if="index === 1">1个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl1: [
        {
          url: "../../static/images/wodezhanghu.png",
          title: "账户"
        },
        {
          url: "../../static/images/wuxian.png",
          title: "无限卡"
        }
      ],
      imageUrl2: [
        {
          url: "../../static/images/paihangbang.png",
          title: "读书排行榜"
        },
        {
          url: "../../static/images/guanzhu.png",
          title: "关注"
        }
      ],
      imageUrl3: [
        {
          url: "../../static/images/biji-.png",
          title: "笔记"
        },
        {
          url: "../../static/images/shudan.png",
          title: "书单"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.main {
  margin-top: 10px;

  .container {
    background-color: #eee;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    align-items: center;

    // margin-top 10px
    .left {
      height: 100%;
      width: 100px;
      position: relative;

      .img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .text {
        width: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin-left: 70px;
      }
    }

    .right {
      margin-right: 20px;
      display: flex;
      flex-direction: column;

      .num {
        margin-left: auto;
      }

      .detail {
        margin-left: auto;
        opacity: 0.7;
      }
    }
  }
}
</style>
