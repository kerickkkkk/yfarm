<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/productsStore'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
const productsStore = useProductsStore()
const { getProducts } = productsStore
const { productsGetter: products } = storeToRefs(productsStore)

const modules = ref(
  [Pagination]
)
const filterProducts = computed(() => {
  return products.value.filter(item => item.origin_price !== item.price)
})
onMounted(() => {
  getProducts()
})
</script>

<template>
  <section class="hero mb-12">
    <Swiper
      :pagination="true"
      :modules="modules"
      class="mySwiper position-relative rounded-5 rounded-top-0"
      style="height:720px"
    >
      <SwiperSlide style="backgroundImage: url(./images/ImgBanner.png)">
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
    </Swiper>
  </section>
  <section class="sale pb-13">
    <h2 class="text-center mb-9">
      <span class="dot">
        促銷商品
      </span>
    </h2>
    <Swiper
      :initial-slide="2"
      :slides-per-view="1.4"
      :space-between="12"
      :pagination="true"
      :modules="modules"
      :centered-slides="true"
      :breakpoints="{
        '768': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
      class="container position-relative rounded-5 rounded-top-0"
    >
      <SwiperSlide
        v-for="item in filterProducts"
        :key="item"
        class="col-4 pb-9"
      >
        <div class="w-100">
          <ProductCard
            :item="item"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  <section
    class="goal"
    style="height: 720px"
  >
    <div class="container-fluid position-relative  pb-13">
      <div class="col-md-7 position-md-absolute end-0">
        <img
          class="rounded-start-5"
          src="/images/ImgAbout01.png"
          alt="創立初衷"
        >
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="mb-11">
              <span class="dot">
                創立初衷
              </span>
            </h2>
            <p class="h5 mb-8">
              將農產品送到消費者面前，提高農民們的收入，穩定農村家庭的經濟，讓每一份努力都能有更合理的回饋。
            </p>
            <RouterLink
              to="/article/-NQriuKkfh9dcMlUC3tE"
              class="btn btn-secondary"
            >
              了解更多
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="feature pb-13">
    <div class="container">
      <div class="row justify-content-md-between align-items-md-center">
        <div class="col-md-7">
          <img
            class="rounded-5"
            src="/images/ImgAbout02.png"
            alt="產品特色"
          >
        </div>
        <div class="col-md-4">
          <h2 class="mb-11">
            <span class="dot">
              產品特色
            </span>
          </h2>
          <p class="h5 mb-8">
            楊家農舍的所有產品特色就是當季收成的作物，並在產品銷售前完成土地的重金屬殘留檢驗、310項農藥殘留檢驗及營養成份檢驗分析。
          </p>
          <RouterLink
            to="/article/-NQs22hPrf7Q0y7J3_jr"
            class="btn btn-secondary"
          >
            了解更多
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="articles mb-13">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <h2 class="mb-11">
            <span class="dot">
              最新消息
            </span>
          </h2>
        </div>
        <div class="col-md-8">
          <ul>
            <li
              class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5"
              style="--bs-border-opacity: .1;"
            >
              <div class="d-flex">
                <div class="h6 me-5">
                  2023-01-01
                </div>
                <h3 class="h5">
                  2023 新年快樂
                </h3>
              </div>
              <RouterLink
                to="/article/-NQs2SkNEVTKr41YyeG1"
                class="btn btn-outline-secondary"
              >
                官方公告
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
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
