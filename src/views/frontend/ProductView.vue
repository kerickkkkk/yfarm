<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/productsStore'
import SelectCountComponent from '@/components/base/SelectCountComponent.vue'
import SuggestionSwiper from '@/components/swiper/SuggestionSwiper.vue'
import { useRoute } from 'vue-router'
import { useCartsStore } from '@/stores/cartsStore'
import BannerView from './components/BannerView.vue'
const route = useRoute()
const productsStore = useProductsStore()
const cartsStore = useCartsStore()

const { getProduct, getProducts } = productsStore
const { productGetter: product, productsGetter: products } = storeToRefs(productsStore)
const { addCart } = cartsStore

const qty = ref(1)
const maxQty = ref(10)
const setQty = (value) => {
  qty.value = value
}
onMounted(() => {
  const { id } = route.params
  getProduct(id)
  if (products.value.length <= 0) {
    getProducts()
  }
})

</script>
<template>
  <BannerView />

  <div class="container">
    <div class="row mb-3 p-5">
      <div class="col-md-6 mb-3">
        <div class="slide__main">
          <div
            class="bg-cover img-fluid"
            :style="`background-image: url(${product.imageUrl})`"
            style="min-height: 350px"
          />
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div>
          <h1 class="text-primary mb-3">
            {{ product.title }}
          </h1>
          <p class="mb-4">
            {{ product.description }}
          </p>
          <p class="mb-4">
            付款方式： ATM 、 信用卡
          </p>
          <div class="d-flex mb-4">
            <SelectCountComponent
              :qty="qty"
              :max-qty="maxQty"
              @set-qty="setQty"
            />
            {{ product.unit }}
          </div>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <div
            :class="{
              'text-decoration-line-through':
                product.origin_price !== product.price,
            }"
          >
            原價： {{ product.origin_price }} 元
          </div>
          <div
            v-if="product.origin_price !== product.price"
            class="text-primary ms-auto"
          >
            特價：<span class="h4">
              {{ product.price }}
            </span>
            元
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button
            class="btn btn-outline-primary me-2"
            @click="addCart(product.id ,qty)"
          >
            加入購物車
          </button>
          <RouterLink
            to="/cart"
            type="button"
            class="btn btn-secondary"
          >
            直接結帳
          </RouterLink>
        </div>
      </div>
    </div>
    <div
      v-if="product.content"
      class="row"
    >
      <h3>產品描述</h3>
      <p>
        {{ product.content }}
      </p>
    </div>
  </div>
  <div class="container-fluid">
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
@import "@/scss/helpers/variables";

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
