<script setup>
import { ref, onMounted } from 'vue'
import { getLocalDate, currency } from '@/utils/filters.js'
import Modal from 'bootstrap/js/dist/modal'

const tempOrder = ref('')
const modal = ref(null)
const emit = defineEmits(['putOrder'])
const show = (order) => {
  tempOrder.value = order
  modal.value.show()
}
const hide = () => {
  modal.value.hide()
  tempOrder.value = {}
}
const putOrderHandler = (e) => {
  // 因為是靠 modal 方法傳入 會沒有同步
  tempOrder.value.is_paid = e.target.checked
  emit('putOrder', { ...tempOrder.value }, e)
}
onMounted(() => {
  // 存取 ID 只會掛載一次 是否要改更通用的 或者在抽出一層
  modal.value = new Modal('#modal', {
    focus: false
  })
})
// 開放方法使用
defineExpose({ show })
</script>
<template>
  <div
    id="modal"
    class="modal fade modal-xl"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5
            id="modalLabel"
            class="modal-title"
          >
            <span>檢視訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>使用者資訊</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th width="80">
                      姓名
                    </th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單資訊</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th>編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th width="100">
                      下單時間
                    </th>
                    <td>{{ getLocalDate(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th width="100">
                      付款時間
                    </th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ getLocalDate(tempOrder.paid_date) }}
                      </span>
                      <span v-else>
                        時間格式錯誤
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>是否付款</th>
                    <td :class="[tempOrder.is_paid ? 'text-success': 'text-danger']">
                      {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      總價
                    </th>
                    <td>
                      {{ `NT ${currency(tempOrder.total)}` }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>訂購的商品</h3>
              <table class="table">
                <tbody v-if="tempOrder.products">
                  <tr
                    v-for="product in tempOrder.products"
                    :key="product.id"
                  >
                    <th>
                      {{ product.product.title }}
                    </th>
                    <td width="100">
                      {{ `${product.qty} / ${product.product.unit}` }}
                    </td>
                    <td
                      width="100"
                      class="text-end"
                    >
                      {{ `NT ${currency(product.final_total)}` }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    id="payChecked"
                    :checked="tempOrder.is_paid"
                    class="form-check-input"
                    type="checkbox"
                    @change="putOrderHandler($event)"
                  >
                  <label
                    class="form-check-label"
                    for="payChecked"
                  >
                    {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            @click="hide"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
