<template>
  <div class="qiang">
    <img class="imgs imgs1" src="/assets/images/1.JPG" alt="">
    <img class="imgs imgs2" src="/assets/images/2.JPG" alt="">
    <img class="imgs imgs3" src="/assets/images/3.JPG" alt="">
    <img class="imgs imgs4" src="/assets/images/4.JPG" alt="">
    <img class="imgs imgs5" src="/assets/images/5.JPG" alt="">
    <img class="imgs imgs6" src="/assets/images/6.JPG" alt="">
    <img class="imgs imgs7" src="/assets/images/7.JPG" alt="">
    <img class="imgs imgs8" src="/assets/images/8.JPG" alt="">
  </div>
</template>
<style lang='less'>
.qiang{
  position: relative;
  width: 1400px; 
  height: 1000px;
  overflow: hidden; 
  margin: 0px auto; 
  .imgs{
    z-index: 1;
    width: 20%;
    height: auto;
    position: absolute;
    padding: 10px 10px 15px 10px;
    background: #ffffff;
    border: 1px solid #CCCCCC;
    /* 动画的时间 */
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .imgs1{
    left: 100px;
    top: 50px;
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    transform: rotate(20deg);
  }
  .imgs:hover{
    z-index: 2;
    transform: scale(1.5);
    -moz-transform: scale(1.5) ;
    -webkit-transform: scale(1.5) ;
    box-shadow: -10px 10px 20px #000000;
    -moz-box-shadow: -10px 10px 20px #000000;
    -webkit-box-shadow: -10px 10px 20px #000000;
  }
  .imgs2{
    left: 280px;
    top: 60px;
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  .imgs3{
    left: 500px;
    top: 10px;
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  .imgs4{
    left: 2px;
    top: 160px;
    -webkit-transform: rotate(50deg);
    -moz-transform: rotate(50deg);
    transform: rotate(50deg);
  }
  .imgs5{
    left: 36px;
    top: 452px;
    -webkit-transform: rotate(32deg);
    -moz-transform: rotate(32deg);
    transform: rotate(32deg);
  }
  .imgs6{
    left: 426px;
    top: 80px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .imgs7{
    left: 180px;
    top: 63px;
    -webkit-transform: rotate(31deg);
    -moz-transform: rotate(31deg);
    transform: rotate(31deg);
  }
  .imgs8{
    left: 267px;
    top: 38px;
    -webkit-transform: rotate(56deg);
    -moz-transform: rotate(56deg);
    transform: rotate(56deg);
  }
}
</style>

<script>
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('family enter')
      // 在 next 前实例还没有被创建 可以在next 添加回掉
      next(vm => {
        console.log('this is vm.id', vm.name)
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('family updata')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('family leave')
      next()
      // if (global.confirm('are yoou sure')) {
      //   next()
      // }
    }
  }
</script>