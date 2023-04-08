<script setup>
import { ref, onMounted, inject } from 'vue'
import Modal from 'bootstrap/js/dist/modal'
import { deleteCouponApi } from '@/api/dashboard/coupons.js'

const Swal = inject('$swal')

const modal = ref(null)
const couponId = ref('')
const couponTitle = ref('')
const emit = defineEmits('getCoupons')
const show = (type, { id, title }) => {
  modal.value.show()
  couponId.value = id
  couponTitle.value = title
}
const hide = () => {
  modal.value.hide()
}
const delCoupon = (id) => {
  deleteCouponApi(id)
    .then(({ data }) => {
      if (data.success) {
        hide()
        Swal('成功', data.message)
          .then(() => emit('get-coupons'))
      }
    })
    .catch((error) => {
      const msg = error?.response?.data?.message.length > 0 ? error?.response?.data?.message.join() : '有錯誤'
      Swal.fire('錯誤', msg, 'error')
      hide()
    })
}
onMounted(() => {
  // 如果都用 #modal 會衝突 和新增修改
  modal.value = new Modal('#modal2', {
    focus: false
  })
})
defineExpose({ show, hide })
</script>
<template>
  <div
    id="modal2"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger">
          <h5
            id="modalLabel"
            class="modal-title text-white"
          >
            <span>刪除優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="hide"
          />
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ couponTitle }}</strong>
          Coupon(刪除後將無法恢復)。
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
            class="btn btn-danger"
            @click="delCoupon(couponId)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
