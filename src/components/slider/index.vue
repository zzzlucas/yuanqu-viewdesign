<template>
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img class="slider-img" src="https://f11.baidu.com/it/u=945887430,393333749&fm=72"/></swiper-slide>
      <swiper-slide><img class="slider-img" src="http://img5.imgtn.bdimg.com/it/u=3825034455,507457344&fm=26&gp=0.jpg"/>
      </swiper-slide>
      <swiper-slide><img class="slider-img" src="http://img3.imgtn.bdimg.com/it/u=387532899,629560158&fm=26&gp=0.jpg"/>
      </swiper-slide>
      <swiper-slide><img class="slider-img"
                         src="http://img3.imgtn.bdimg.com/it/u=3947651608,2688646143&fm=26&gp=0.jpg"/></swiper-slide>
      <swiper-slide><img class="slider-img"
                         src="http://img2.imgtn.bdimg.com/it/u=1247132943,3326205927&fm=26&gp=0.jpg"/></swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>
<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="less">
  .slider {
    .slider-img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }

    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
</style>
