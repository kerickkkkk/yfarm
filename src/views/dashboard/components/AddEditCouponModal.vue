<script setup>
import { ref, onMounted, inject } from 'vue'
import Modal from 'bootstrap/js/dist/modal'
import { postCouponApi, putCouponApi } from '@/api/dashboard/coupons.js'
import dayjs from 'dayjs'
const Swal = inject('$swal')
const modal = ref(null)
const status = ref('')
const tempCoupon = ref({})
const emit = defineEmits('getCoupons')
const show = (type, item) => {
  modal.value.show()
  if (type === 'created') {
    status.value = type
    tempCoupon.value = { is_enabled: 0 }
  } else {
    status.value = type
    tempCoupon.value = {}
    tempCoupon.value = {
      ...item,
      due_date: dayjs(item.due_date * 1000).format('YYYY-MM-DD')
    }
  }
}
const hide = () => {
  modal.value.hide()
}

const couponHandler = () => {
  // 處理型別
  tempCoupon.value.coupon = tempCoupon.value.coupon * 1
  tempCoupon.value.due_date = dayjs(tempCoupon.value.due_date).valueOf() / 1000

  if (status.value === 'created') {
    postCouponApi(tempCoupon.value)
      .then(({ data }) => {
        if (data.success) {
          hide()
          Swal('成功', data.message)
            .then(() => emit('get-coupons'))
        }
      }).catch((error) => {
        hide()
        const msg = error?.response?.data?.message.length > 0 ? error?.response?.data?.message.join() : '有錯誤'
        Swal.fire('錯誤', msg, 'error')
      })
  } else if (status.value === 'edit') {
    putCouponApi(tempCoupon.value)
      .then(({ data }) => {
        if (data.success) {
          hide()
          Swal('修改成功', data.message)
            .then(() => {
              emit('get-coupons')
            })
        } else {
          tempCoupon.value.due_date = dayjs(tempCoupon.value.due_date * 1000).format('YYYY-MM-DD')
          Swal('錯誤', data.message.join(), 'error')
        }
      }).catch((error) => {
        hide()
        const msg = error?.response?.data?.message.length > 0 ? error?.response?.data?.message.join() : '有錯誤'
        Swal.fire('錯誤', msg, 'error')
      })
  }
}

onMounted(() => {
  modal.value = new Modal('#modal', {
    focus: false
  })
})
defineExpose({ show, hide })
</script>

<template>
  <div
    id="modal"
    class="modal fade modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5
            id="modalLabel"
            class="modal-title"
          >
            {{ status === 'created' ? '新增' :'修改' }}優惠卷
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="hide"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="mb-3">
              <label
                for="title"
                class="form-label"
              >標題</label>
              <input
                id="title"
                v-model.trim="tempCoupon.title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
              >
            </div>
            <div class="mb-3">
              <label
                for="code"
                class="form-label"
              >折扣碼</label>
              <input
                id="code"
                v-model.trim="tempCoupon.code"
                type="text"
                class="form-control"
                placeholder="請輸入折扣碼"
              >
            </div>
            <div class="mb-3">
              <label
                for="percent"
                class="form-label"
              >折扣百分比</label>
              <input
                id="percent"
                v-model.number="tempCoupon.percent"
                type="text"
                class="form-control"
                placeholder="請輸入折扣百分比"
              >
            </div>
            <div class="mb-3">
              <label
                for="due_date"
                class="form-label"
              >到期日</label>
              <input
                id="due_date"
                v-model="tempCoupon.due_date"
                type="date"
                class="form-control"
              >
            </div>
            <div class="mb-3">
              <div class="form-check form-switch form-check-reverse">
                <input
                  id="enableSwitch"
                  v-model="tempCoupon.is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                >
                <label
                  :class="[tempCoupon.is_enabled ? 'text-success' : 'text-danger']"
                  class="form-check-label"
                  for="enableSwitch"
                >
                  {{ tempCoupon.is_enabled ? '啟用' : '停用' }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hide"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="couponHandler"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
