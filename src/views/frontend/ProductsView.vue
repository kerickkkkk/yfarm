<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import Pagination from '@/components/base/PaginationComponent.vue'
import { useProductsStore } from '@/stores/productsStore'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()

const { getProducts } = productsStore
const { productsGetter: products, paginationGetter: pagination } = storeToRefs(productsStore)

const categories = ref(['全部', '花生糖', '炒花生'])
const currentCategory = ref('全部')
onMounted(() => {
  getProducts()
})
</script>
<template>
  <div
    class="bg-cover"
    style="height: 40vh; backgroundImage: url(./images/ImgAbout01.png)"
  />
  <div class="container">
    <div class="row py-6">
      <div class="col-md-3">
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
            @click="currentCategory = item"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <template v-if="products.length > 0">
            <div
              v-for="item in products"
              :key="item.id"
              class="col-4 mb-4"
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
          </template>
          <!-- 沒有反應需看 -->
          <template v-else>
            <div class="col-12">
              <div class="h3 text-center">
                沒有產品!
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
