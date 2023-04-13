<script setup>
import { onMounted } from 'vue'
import { useLikesStore } from '@/stores/likesStore.js'
import ProductCard from '@/components/ProductCard.vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import SuggestionSwiper from '@/components/swiper/SuggestionSwiper.vue'
import BannerView from './components/BannerView.vue'
const likesStore = useLikesStore()

const { getAllProducts, getLikes } = likesStore
const { filterLikesProductsGetter, noLikesProductsGetter } = storeToRefs(likesStore)

onMounted(async () => {
  await getAllProducts()
  getLikes()
})
</script>

<template>
  <BannerView />
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            to="/"
            class="nav-link active p-0"
          >
            首頁
          </router-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          我的最愛
        </li>
      </ol>
    </nav>
    <div class="row">
      <template v-if="filterLikesProductsGetter.length > 0">
        <div class="row">
          <div
            v-for="item in filterLikesProductsGetter"
            :key="item.id"
            class="col-md-4 mb-4"
          >
            <ProductCard :item="item" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="h3 text-center">
          沒有我的最愛 我的最愛
          <RouterLink
            class="btn btn-primary"
            to="/products"
          >
            前往產品
          </RouterLink>
        </div>
      </template>
    </div>
    <div class="row mb-8">
      <h3 class="text-center mt-4 mb-9">
        猜您喜歡
      </h3>
      <SuggestionSwiper :items="noLikesProductsGetter" />
    </div>
  </div>
</template>
