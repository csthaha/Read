<template >
  <div>
    <div :class="all ? 'all' : ''">
      <div class="arrow" @click="back">
        <div class="arrow-left"></div>
      </div>
      <search :finds="searchs" @send="get"></search>
      <div class="header">
        <div class="like">猜你喜欢</div>
        <div class="change" @click="change">换一批</div>
      </div>
      <div class="like_change" v-for="(cbook, index) in Cbooks" :key="index" @click="toBook">
        <div class="img">
          <img :src="cbook.imgUrl" alt="">
        </div>
        <div class="name_desc">
          <div class="bookName">{{ cbook.bookName }}</div>
          <div class="book_desc">{{cbook.detail}}</div>
        </div>
      </div>
      
      
      
    </div>
    <div :class="show ? 'Show' : ''">
      <search :find="search" @send="get"></search>
      <div class="tuijian">
        <swiper
          class="swiper"
          indicator-dots="true"
          interval="5000"
          :duration="duration"
          previous-margin="35px"
          next-margin="35px"
          :current="id"
          @change="switchItem('switchItem',$event)"
        >
          <block v-for="(item, index) in books" :key="index">
            <swiper-item class="slide">
              <!-- <img :src="item" class="slide-image" mode="aspectFill"> -->
              <div class="slide-container">
                <div class="desc">{{item.head}}</div>
                <div v-for="(book, id) in item.content" :key="id">
                  <div class="content" @click="toDetail(id)">
                    <div class="img">
                      <img :src="book.imgUrl" alt />
                    </div>
                    <div class="main">
                      <div class="title">{{book.title}}</div>
                      <div class="author">{{book.author}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-item>
          </block>
        </swiper>
        <div class="arrow" @click="nextScreen">
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search.vue";
import books from "../../book/swiper";
import Cbooks from "../../book/change";
export default {
  components: {
    search
  },
  data() {
    return {
      search: 1,
      searchs: 3,
      books: "",
      Cbooks: '',
      id: 0,
      duration: 1000,
      show: false,
      all: true,
    };
  },
  methods: {
    nextScreen() {
      console.log("触发了向右的点击事件", this.id);
      this.duration = 500;
      this.id++;
      if (this.id > this.books.length - 1) {
        this.id = this.books.length - 1;
        wx.showToast({
          title: '已经到最后了哟~',
          icon: 'none'
        })
      }
      
      console.log(this.id);
    },
    switchItem(prompt, res) {
      // console.log(prompt,res.target.current)
      this.id = res.target.current;
    },
    toDetail(id) {
      console.log("去到详情页! 第：", this.id, "一屏，第:", id, "个");
      let page = this.id;
      const url = "../detail/main?page=" + page + "&id=" + id;
      wx.navigateTo({
        url
      });
    },
    get(val) {
      console.log(val);
      this.show = val;
      this.all = false
    },
    // 换一换
    change() {
      let n = Math.ceil(Math.random() * (7 - 0)) + 0
      this.Cbooks = Cbooks[n]
    },
    //换一换书本详情
    toBook(){
      wx.showToast({
        title:'待完善',
        icon: 'fail'
      })
    },
    // 返回搜索
    back() {
      this.all = true,
      this.show = false
    }
  },
  created() {
    this.books = books;
    this.Cbooks = Cbooks[0];
    console.log(this.books[0].content);
  },
  updated() {
    console.log(this.id);
  }
};
</script>

<style lang="stylus" scoped>
page {
  width: 100%;
  height: 100%;

  .tuijian {
    width: 100%;
    height: 500px;
    position: relative;

    .swiper {
      width: 100%;
      height: 90%;
      margin-top: 20px;
      z-index: 1;

      .slide {
        height: 100%;

        .slide-container {
          height: 100%;
          margin: 0 15px;
          background-color: #eee;
          border-radius: 10px;
          margin-bottom: 20px;

          .desc {
            text-align: center;
            padding-top: 5px;
            font-weight: bold;
          }

          .content {
            height: 120px;
            width: 90%;
            display: flex;
            background-color: #DCDCDC;
            border-radius: 10px;
            margin: 15px;

            .img {
              width: 80px;
              height: 100px;
              margin: 10px;

              img {
                width: 100%;
                height: 100%;
                background-size: cover;
              }
            }

            .main {
              height: 100%;
              margin-top: 30px;

              .title {
                font-weight: bold;
              }
            }
          }
        }
      }
    }

    .arrow {
      width: 50px;
      height: 50px;
      background-color: #48D1CC;
      // float right
      position: absolute;
      bottom: 50px;
      right: 20px;
      z-index: 99;
      overflow: hidden;
      border-radius: 50%;

      .arrow-right {
        height: 15px;
        width: 15px;
        position: absolute;
        left: 45%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(135deg);
        border-left: 2px solid #F5F5F5;
        border-top: 2px solid #F5F5F5;
      }
    }
  }

  .Show, .all {
    display: none;
  }

  .search {
    display: none;
  }

  .header {
    display: flex;
    margin: 15px;
    flex-direction: row;
    justify-content: space-between;

    .change {
      color: blue;
    }
  }

  .arrow-left {
    height: 15px;
    width: 15px;
    margin-left: 20px;
    margin-top: 20px;
    // border 1px solid red
    transform: rotate(45deg);
    border-left: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }
  .like_change {
    width 100%
    height 100%
    
    padding 10px
    display flex
    .img {
      height 90px
      width 85px
      // margin 10px
      img {
        height 100%
        width 100%
      }
        
    }
    .name_desc {
      display flex
      flex-direction column
      justify-content center
      margin-left 10px
      margin-right 15px
      .book_desc {
        font-size 15px
        color 	#8B8B7A
        margin-top 5px
      }
    }
  }
}
</style>
