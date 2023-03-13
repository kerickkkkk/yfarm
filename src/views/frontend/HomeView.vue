<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = ref(
  [Pagination]
)
</script>

<template>
  <Swiper
    :pagination="true"
    :modules="modules"
    class="mySwiper position-relative"
    style="height:720px"
  >
    <SwiperSlide style="backgroundImage: url(/image/ImgBanner.png)">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8 col-md-6">
            <div class="h1 text-white">
              來一塊花生糖，砌一壺茶，
              心都暖了起來。
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide style="backgroundImage: url(/image/ImgBanner.png)">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="h1 text-white">
              來一塊花生糖，砌一壺茶，222
              心都暖了起來。
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="vh-100" />
</template>
<style  lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/scss/helpers/variables";
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
:deep(.swiper-pagination-bullet) {
  width : calc(100vw * 72 / 1320);
  border-radius: 4px;
  height: 3px;
  background-color: #fff;
  opacity: 1;
  &.swiper-pagination-bullet-active{
    background-color: $secondary;
  }
}

</style>
