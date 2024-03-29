<script setup>
import { ref, onMounted, inject } from 'vue'
import Pagination from '@/components/base/PaginationComponent.vue'
import { getOrdersApi, putOrderApi, deleteOrderApi } from '@/api/dashboard/order.js'
import { getLocalDate, currency } from '@/utils/filters.js'
import OrderModal from './components/OrderModal.vue'
import DeleteItemModal from '../../components/modal/DeleteItemModal.vue'

const swal = inject('$swal')
const orderModel = ref(null)
const orders = ref([])
const pagination = ref(null)
const deleteOrderModal = ref(null)
const getOrders = (page = 1) => {
  getOrdersApi(page)
    .then(({ data }) => {
      orders.value = data.orders
      pagination.value = data.pagination
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
const openDeleteModal = (order) => {
  deleteOrderModal.value.show({
    id: order.id,
    title: order.id
  })
}
const putOrder = (order, e) => {
  // 如果是 checked 要用 checked 不然會找不到值
  order.is_paid = e.target.checked
  putOrderApi(order)
    .then(({ data }) => {
      swal(`${data.message}，訂單號碼：${order.id}`)
      getOrders()
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
const deleteOrder = (id) => {
  deleteOrderModal.value.hide()
  deleteOrderApi(id)
    .then(({ data }) => {
      swal(`訂單：${id}，${data.message} `)
      getOrders()
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
const openModal = (order) => {
  orderModel.value.show(order)
}
onMounted(() => {
  getOrders()
})
</script>

<template>
  <OrderModal
    ref="orderModel"
    @put-order="putOrder"
  />
  <div class="container">
    <table class="table mb-3">
      <thead>
        <tr>
          <th width="100">
            購買時間
          </th>
          <th width="100">
            Email
          </th>
          <th>
            購買款項
          </th>
          <th width="100">
            應付金額
          </th>
          <th width="150">
            是否付款
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="orders.length > 0">
          <tr
            v-for="order in orders"
            :key="order.id"
          >
            <!-- 會產生 "3/6/2023" -->
            <td>{{ getLocalDate(order.create_at) }}</td>
            <td>
              {{ order?.user.email }}
            </td>
            <td>
              <ul>
                <li
                  v-for="product in order.products"
                  :key="product.id"
                >
                  {{ `${product.product.title}: ${product.product.price} * ${product.qty} = ${product.final_total}` }}
                </li>
              </ul>
            </td>
            <!--  -->
            <td class="text-end">
              NTD {{ currency(order.total) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input
                  :id="`customSwitch${order.id}`"
                  :checked="order.is_paid"
                  class="form-check-input"
                  type="checkbox"
                  @change="putOrder(order, $event)"
                >
                <label
                  class="form-check-label"
                  :class="{'text-success': order.is_paid }"
                  :for="`customSwitch${ order.id }`"
                >{{ order.is_paid ? "已付款" : "未付款" }}</label>
              </div>
            </td>
            <td>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="openModal({...order})"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="openDeleteModal(order)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td
            class="text-center"
            colspan="100"
          >
            目前沒有訂單唷!!!
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      v-if="pagination"
      :current-page="pagination.current_page"
      :total-pages="pagination.total_pages"
      :has-next="pagination.has_next"
      :has-pre="pagination.has_pre"
      @get-items="getOrders"
    />
  </div>
  <DeleteItemModal
    ref="deleteOrderModal"
    modal-title="訂單"
    @delete-method="deleteOrder"
  />
</template>
