<script setup>
import { onMounted, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { currency } from '@/utils/filters.js'
import { useCartsStore } from '@/stores/cartsStore'
import CartStep from '@/components/CartStep.vue'
import { useRoute, useRouter } from 'vue-router'
import BannerView from './components/BannerView.vue'
const swal = inject('$swal')
const route = useRoute()
const router = useRouter()
const cartsStore = useCartsStore()
const { getCarts, updateCart, deleteCart, deleteAllCarts } = cartsStore
const {
  cartsGetter: carts,
  totalGetter: total,
  finalTotalGetter: finalTotal
} = storeToRefs(cartsStore)
const step = route.meta.step
const goCheckoutHandler = () => {
  if (carts.value.length <= 0) {
    swal('購物車沒產品')
    return false
  }
  router.push('/checkout')
}
const handleValue = (cart, e, type) => {
  const currentQty = e.target.value <= 0 ? 1 : e.target.value
  cart.qty = currentQty
  e.target.value = currentQty
  if (type === 'change') {
    updateCart(cart.id, cart.product.id, currentQty)
  }
}
onMounted(() => {
  getCarts()
})

</script>

<template>
  <BannerView />
  <div class="container">
    <CartStep :step="step" />
  </div>
  <section class="step d-md-flex" />
  <div class="container mt-5">
    <!-- 購物車區塊 -->
    <div class="row">
      <div class="text-end">
        <button
          v-if="carts.length>0"
          class="btn btn-sm btn-outline-danger"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th
              class="d-md-table-cell d-none"
              scope="col"
            >
              商品
            </th>
            <th
              class="d-md-table-cell d-none"
              scope="col"
            >
              單價
            </th>
            <th
              class="text-center"
              scope="col"
            >
              <span class="d-md-none d-inline-block">商品/</span>數量
            </th>
            <th scope="col">
              小計
            </th>
            <th scope="col">
              刪除
            </th>
          </tr>
        </thead>
        <tbody v-cloak>
          <template v-if="carts.length > 0">
            <tr
              v-for="cart in carts"
              :key="cart.id"
              class="align-middle"
            >
              <td
                class="d-md-table-cell d-none"
              >
                <div class="cart__title d-flex">
                  <div class="me-3">
                    <img
                      :src="cart.product.imageUrl"
                      :alt="cart.product.title"
                      width="50"
                      class="img-fluid"
                    >
                  </div>
                  <div class="cart__title__content">
                    <div class="fw-bold">
                      {{ cart.product.title }}
                    </div>
                  </div>
                </div>
              </td>
              <td
                class="d-md-table-cell d-none text-end"
              >
                NTD {{ currency(cart.product.price) }}
              </td>
              <td>
                <div class="fw-bold mb-1 text-center">
                  {{ cart.product.title }}
                </div>
                <div class="text-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <button
                      :disabled="cart.qty < 2"
                      type="button"
                      class="btn btn-primary"
                      @click="updateCart(cart.id, cart.product.id, --cart.qty)"
                    >
                      -
                    </button>

                    <input
                      :value="cart.qty"
                      type="number"
                      min="1"
                      class="form-control text-center rounded-0"
                      style="width: 80px"
                      @input="handleValue(cart, $event)"
                      @change="handleValue(cart, $event, 'change')"
                    >

                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="updateCart(cart.id, cart.product.id, ++cart.qty)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td class="text-end">
                NTD {{ currency(cart.final_total) }}
              </td>
              <td>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteCart(cart.id)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td
                colspan="100"
                class="text-center"
              >
                購物車沒有東西
                <!-- 抽出做時間倒數 -->
                <routerLink to="/products">
                  挑選產品去
                </routerLink>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td
              class="text-end"
              colspan="100"
            >
              原價 NTD  {{ currency(total) }}
            </td>
          </tr>
          <tr>
            <td
              class="text-end"
              colspan="100"
            >
              總價 NTD  {{ currency(finalTotal) }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="text-end">
        <a
          class="btn btn-secondary rounded-start-0"
          @click.prevent="goCheckoutHandler"
        >
          填寫資料
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/all';
@include media-breakpoint-up(md) {
  .d-md-table-cell{
    display: table-cell !important;
  }
}
</style>
