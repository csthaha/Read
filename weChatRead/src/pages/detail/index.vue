<template>
  <div>
    <div class="contain">
      <div class="top">
        <div class="imgurl">
          <img class="image" :src="book.imgUrl" alt="">
        </div>
        <div class="detail">
          <div class="name">{{ book.title }}</div>
          <div class="author">{{ book.author }}</div>
          <div class="desc">{{ book.desc }}</div>
        </div>
      </div>
      <div class="com">
        <div class="rate">{{ book.grade }} 分</div>
        <div class="reader">
          {{ book.readNum }}万人 阅读
        </div>
      </div>
    </div>
    <div class="comments">
        <div class="til">精彩点评</div>
        <div v-for="(item, index) in book.comments" :key="index" class="bgc">
          <div class="head">
            <div class="avatar">
              <img :src="item.avatar" alt="">
            </div>
            <div class="nickname">{{ item.nickName }} 点评</div>
          </div>
          <div class="comment">
            {{ item.comment }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import books from "../../book/swiper";
export default {
  data() {
    return {
      books: [],
      book: '',
    };
  },
  method: {},
  created() {
    this.books = books;
  },
  mounted() {
    
    let page = this.$root.$mp.query.page;
    let id = this.$root.$mp.query.id;
    // console.log(page, id);
    // console.log(this.books[page].content[id]);
    this.book = this.books[page].content[id]
    console.log(this.book)
  }
};
</script>

<style lang="stylus" scoped>

  .contain 
    width 100%
    height 150px
    // background-color #DCDCDC
    padding 20px
    display flex
    flex-direction column   
    .top
      display flex     
      width 100%
      height 120px
      .imgurl
        width 100px
        height 120px
        .image
          width 100px
          height 100%
      .detail
        margin-left 20px       
        margin-top 10px
        .name
          font-size 24px    
        .author 
          font-size 16px        
          color blue
          margin 10px 0
        .desc
          font-size 16px        
          color #262627
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
      
    .com
      display flex
      margin-top 20px
      margin-right 50px
      justify-content: space-between
  .comments
    margin-top 20px
    width 100%
    height 150px
    // background-color #DCDCDC
    padding 20px
    .til
      width 100%
      height 50px
      line-height 50px
      border-bottom 1px solid 	#97FFFF
      font-size 24px
    .head
      width 100%
      height 30px
      padding 10px       
      // background-color #DCDCDC
      display flex
      .avatar
        height 100%
        width 30px
        img 
          width 100%
          height 100%
          border-radius 50%
      .nickname
        line-height 30px
        margin-left 10px
        font-size 18px
    
    
    


</style>
