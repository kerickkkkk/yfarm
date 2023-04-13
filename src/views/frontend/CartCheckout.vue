<script setup>
import { onMounted, ref, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { currency } from '@/utils/filters.js'
import { useCartsStore } from '@/stores/cartsStore'
import { useRoute, useRouter } from 'vue-router'
import CartStep from '@/components/CartStep.vue'
import { postOrderApi } from '@/api/orders.js'
import BannerView from './components/BannerView.vue'
const route = useRoute()
const router = useRouter()
const swal = inject('$swal')
const cartsStore = useCartsStore()
const { getCarts } = cartsStore
const {
  cartsGetter: carts,
  totalGetter: total,
  finalTotalGetter: finalTotal
} = storeToRefs(cartsStore)
const step = route.meta.step
const emptyUserData = {
  name: '',
  email: '',
  tel: '',
  address: '',
  message: ''
}

const userData = ref({
  name: '',
  email: '',
  tel: '',
  address: '',
  message: ''
})

const resetUser = () => {
  userData.value = { ...emptyUserData.value }
}
const submitOrder = () => {
  const data = {
    data: {
      user: {
        name: userData.value.name,
        tel: userData.value.tel,
        email: userData.value.email,
        address: userData.value.address
      },
      message: userData.value.message
    }
  }

  postOrderApi(data)
    .then((response) => {
      if (response.data.success) {
        resetUser()
        getCarts()
        router.push('/finish')
      }
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
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
    <div class="row">
      <div class="col-md-6">
        <!-- 購物車區塊 -->
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  商品選項
                </th>
                <th
                  scope="col"
                  class="text-end"
                >
                  單價 X 數量
                </th>
                <th
                  scope="col"
                  class="text-end"
                >
                  小計
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
                      </div>
                    </div>
                  </th>
                  <td class="text-end">
                    {{ currency(cart.product.price) }} X {{ cart.qty }}
                  </td>
                  <td class="text-end">
                    NT ${{ cart.final_total }}
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
                  原價 NT $ {{ total }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-end"
                  colspan="100"
                >
                  總價 NT $ {{ finalTotal }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <VForm
          v-slot="{ errors }"
          @submit="submitOrder"
        >
          <div class="mb-3">
            <label
              for="name"
              class="form-label"
            >姓名</label>
            <VField
              id="name"
              v-model="userData.name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入 姓名"
              rules="required"
            />
            <error-message
              name="姓名"
              class="invalid-feedback"
            />
          </div>
          <div class="mb-3">
            <label
              for="email"
              class="form-label"
            >Email</label>
            <VField
              id="email"
              v-model="userData.email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
            />
            <error-message
              name="email"
              class="invalid-feedback"
            />
          </div>

          <div class="mb-3">
            <label
              for="tel"
              class="form-label"
            >電話</label>
            <VField
              id="tel"
              v-model="userData.tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入 電話"
              rules="required|min:8|max:10"
            />
            <error-message
              name="電話"
              class="invalid-feedback"
            />
          </div>
          <div class="mb-3">
            <label
              for="address"
              class="form-label"
            >地址</label>
            <VField
              id="address"
              v-model="userData.address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入 地址"
              rules="required"
            />
            <error-message
              v-model="userData.address"
              name="地址"
              class="invalid-feedback"
            />
          </div>
          <div class="mb-3">
            <label
              for="message"
              class="form-label"
            >留言</label>
            <textarea
              id="message"
              v-model="userData.message"
              class="form-control"
              placeholder="請輸入 留言"
              aria-describedby="message"
            />
          </div>
          <button
            class="btn btn-secondary"
            type="submit"
          >
            送出訂單
          </button>
        </VForm>
      </div>
    </div>
  </div>
</template>
