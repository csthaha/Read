<template>
  <div class="search">
    <div class="img">
      <img src="../../static/images/search.png" alt />
    </div>
    <input
      type="text"
      v-if="find == 1"
      placeholder="算法图解"
      v-model="inputValue"
      @click="sendMsg"
      disabled="false"
    />
    <input type="text" v-if="find == 2" placeholder="图解HTTP" v-model="inputValue" />

    <input type="text" v-if="finds == 3" placeholder="算法图解" v-model="inputValue" /> |
    <!-- <div class="text" >{{find == 1 ? '书城' : '阅读记录'}}</div> -->
    <div class="text" v-if="find == 1">书城</div>
    <div class="text" v-if="find == 2" :class="{'bookshelf' : find == 2}">阅读记录</div>
    <div class="text" v-if="finds == 3" @click="search">搜索</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      show: true
    };
  },
  props: ["find", "finds"],
  methods: {
    sendMsg() {
      this.$emit("send", this.show);
    },
    // 搜索图书
    search() {
      const url = "https://www.apiopen.top/novelInfoApi?name=" + this.inputValue;
      this.$http.get(url).then(res => {
        console.log(res.data.data.data[0]);
        console.log(res.data.data.data[0].first_chapter);
      });
    }
  },
  updated() {
    // var name = this.inputValue;
    // console.log(name);
  }
};
</script>

<style lang="stylus" scoped>
.search {
  display: flex;
  height: 50px;
  border: 1px solid #CDB5CD;
  border-radius: 20px;
  align-items: center;
  margin: 10px 20px;

  .img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    position: relative;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
    }
  }

  input {
    opacity: 0.7;
  }

  .text {
    margin-left: 10px;
  }

  .bookshelf {
    font-size: 13px;
  }
}
</style>
