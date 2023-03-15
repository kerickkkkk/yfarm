<script setup>
import { onMounted, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { currency } from '@/utils/filters.js'
import { useCartsStore } from '@/stores/cartsStore'
import CartStep from '@/components/CartStep.vue'
import { useRoute, useRouter } from 'vue-router'
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
onMounted(() => {
  getCarts()
})

</script>
<template>
  <div
    class="bg-cover"
    style="height: 40vh; backgroundImage: url(./images/ImgAbout01.png)"
  />
  <div class="container">
    <CartStep :step="step" />
  </div>
  <section class="step d-md-flex" />
  <div class="container mt-5">
    <!-- 購物車區塊 -->
    <div class="row">
      <div class="text-end">
        <button
          class="btn btn-sm btn-outline-danger"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              商品選項
            </th>
            <th scope="col">
              單價
            </th>
            <th scope="col">
              數量
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
            >
              <th>
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
                    <div class="h6">
                      {{ cart.product.title }}
                    </div>
                    <p>規格</p>
                  </div>
                </div>
              </th>
              <td class="text-end">
                NT ${{ currency(cart.product.price) }}
              </td>
              <td>
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
                    v-model="cart.qty"
                    type="number"
                    min="1"
                    class="form-control rounded-0"
                    style="width: 80px"
                    @change="updateCart(cart.id, cart.product.id, cart.qty)"
                  >

                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updateCart(cart.id, cart.product.id, ++cart.qty)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="text-end">
                NT ${{ currency(cart.final_total) }}
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
              原價 NT $ {{ currency(total) }}
            </td>
          </tr>
          <tr>
            <td
              class="text-end"
              colspan="100"
            >
              總價 NT $ {{ currency(finalTotal) }}
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
<style lang="scss">

</style>
