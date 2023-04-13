<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  items: {
    type: Array,
    default () {
      return []
    }
  }
})

const modules = ref(
  [Pagination]
)
onMounted(() => {

})
</script>

<template>
  <Swiper
    v-if="items.length > 0"
    :slides-per-view="1"
    :space-between="30"
    :pagination="true"
    :modules="modules"
    :breakpoints="{
      '768': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    class="container position-relative rounded-5 rounded-top-0 pb-7"
  >
    <SwiperSlide
      v-for="item in props.items"
      :key="item"
      class="background-transparent h-100"
    >
      <div class="w-100 h-100">
        <ProductCard
          :item="item"
        />
      </div>
    </SwiperSlide>
  </Swiper>
  <div v-else>
    <h5 class="h4 text-center">
      所有產品已加入選擇，或無產品資料。
    </h5>
  </div>
</template>
