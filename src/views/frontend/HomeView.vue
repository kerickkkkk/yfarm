<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from '@/components/ProductCard.vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = ref(
  [Pagination]
)
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
        v-for="n in 5"
        :key="n"
        class="col-4 pb-9"
      >
        <div class="w-100">
          <ProductCard
            :item="{
              n,
              url:'https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1677051561718.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=euZ3n0ioz%2Bii12oEy3Gg5d%2FqsevbdDTqE5%2F87D%2BEwGtEdRImnEWGMBVgqNf%2FzUHQg9fBSgOKCxvCIYeNacvqrVL6AhE6togtSgxER7arZ6bJ3OSnNI3v2gb8YAUWkCP%2FT%2B1Nn5a4H%2FPfiVkG8YL%2FD6nG82SmusQMn8p04pi59ZO4CCWCrrDPqrx%2FW19JxK4ga4%2BKkAGA8qVQobk%2B68IMMfvoKgfC0Xv4ZZSGOb4IPhIt%2BWNMfenoxNd6YwsecKqE5eSOn5iN15eADo3hPGC4cByYWGWesnqPghmjcWosRA685YBUzWZ1ayQa%2B6iTuoTknaFbdLFohDSSlBldP32v%2Bw%3D%3D'
            }"
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
              to="/intention"
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
            將農產品送到消費者面前，提高農民們的收入，穩定農村家庭的經濟，讓每一份努力都能有更合理的回饋。
          </p>
          <button class="btn btn-secondary">
            了解更多
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="messages mb-13">
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
                  2023-01-12
                </div>
                <h3 class="h5">
                  新年快樂
                </h3>
              </div>
              <button class="btn btn-outline-secondary">
                官方公告
              </button>
            </li>
            <li
              class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5"
              style="--bs-border-opacity: .1;"
            >
              <div class="d-flex">
                <div class="h6 me-5">
                  2023-01-12
                </div>
                <h3 class="h5">
                  新年快樂
                </h3>
              </div>
              <button class="btn btn-outline-secondary">
                官方公告
              </button>
            </li>
            <li
              class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5"
              style="--bs-border-opacity: .1;"
            >
              <div class="d-flex">
                <div class="h6 me-5">
                  2023-01-12
                </div>
                <h3 class="h5">
                  新年快樂
                </h3>
              </div>
              <button class="btn btn-outline-secondary">
                官方公告
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <footer
    class="py-10 rounded-top-5 bg-cover"
    style="backgroundImage: linear-gradient(to right, rgba(169, 193, 0 , 0.9), rgba(169, 193, 0, 0.9)), url(./images/ImgFooter.jpg)"
  >
    <div class="container text-white">
      <div class="row align-items-end">
        <div class="col-md-5">
          <div class="mb-3">
            <img
              style="width: 120px"
              src="/logo.png"
              alt=""
            >
          </div>
          <div class="mb-3">
            <label
              for="email"
              class="form-label"
            >關於農場的最新優惠，施作趣聞，不漏接</label>
            <div class="position-relative mb-">
              <input
                id="email"
                type="email"
                class="form-control py-4"
                placeholder="name@example.com"
              >
              <button class="position-absolute end-0 top-50 translate-middle-y me-3 btn btn-sm btn-primary">
                立即訂購
              </button>
            </div>
          </div>
          <div class="fs-7">
            © 楊家農舍 2023
          </div>
        </div>
        <div class="col-md-4 ms-md-auto mb-md-5 mb-4">
          <div>
            <h5 class="h4 text-white mb-3">
              聯絡我們
            </h5>
            <ul>
              <li
                class="d-flex mb-4"
              >
                <div>營業時間</div>
                <div>09:00 - 17:00</div>
              </li>
              <li
                class="d-flex mb-4"
              >
                <div class="me-7">
                  電話
                </div>
                <div>
                  <a
                    class="text-white"
                    href="tel:+886-912345678"
                  >0912-345-678</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="me-7">
                  地址
                </div>
                <div>
                  雲林縣土庫鎮奮起湖奮起 100 之 1 號
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 mb-md-5 mb-4">
          <h5 class="h4 text-white mb-4">
            加入官方帳號
          </h5>
          <div
            style="width: 96px; height: 96px;"
          >
            <img
              src="/logo.png"
              alt="qr code"
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
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
