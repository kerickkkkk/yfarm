<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ProductCard from '@/components/ProductCard.vue'
import Pagination from '@/components/base/PaginationComponent.vue'
import { useProductsStore } from '@/stores/productsStore'
import SuggestionSwiper from '@/components/swiper/SuggestionSwiper.vue'
import BannerView from './components/BannerView.vue'
const productsStore = useProductsStore()

const { getProducts } = productsStore
const { productsGetter: products, paginationGetter: pagination } = storeToRefs(productsStore)

const categories = ref(['全部', '花生糖', '焙炒花生'])
const currentCategory = ref('全部')
onMounted(() => {
  getProducts()
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
          產品
        </li>
      </ol>
    </nav>
    <div class="row pb-6">
      <div class="col-md-3 mb-6">
        <div class="list-group">
          <li
            class="list-group-item list-group-item-dark"
          >
            分類
          </li>
          <button
            v-for="item in categories"
            :key="item"
            type="button"
            :class="{active: item === currentCategory}"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
            @click="currentCategory = item;
                    getProducts( pagination.currentPage, item)
            "
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <template v-if="products.length > 0">
          <div class="row">
            <div
              v-for="item in products"
              :key="item.id"
              class="col-md-6 col-lg-4 mb-4"
            >
              <ProductCard :item="item" />
            </div>
            <Pagination
              v-if="pagination.total_pages"
              :current-page="pagination.current_page"
              :total-pages="pagination.total_pages"
              :has-next="pagination.has_next"
              :has-pre="pagination.has_pre"
              @get-page="getProducts"
            />
          </div>
        </template>
        <template v-else>
          <div class="h3 text-center">
            沒有產品!
          </div>
        </template>
      </div>
    </div>
    <div class="row mb-8">
      <h3 class="text-center mt-4 mb-9">
        猜您喜歡
      </h3>
      <SuggestionSwiper :items="products" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/assets/scss/helpers/variables";

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
