<script setup>
import { ref, onMounted, inject } from 'vue'
import Pagination from '@/components/base/PaginationComponent.vue'
import AddEditCouponModal from './components/AddEditCouponModal.vue'
import DeleteCouponModal from './components/DeleteCouponModal.vue'
import { getCouponsApi } from '@/api/dashboard/coupons.js'
import { getLocalDate } from '@/utils/filters.js'

const Swal = inject('$swal')
const coupons = ref([])
const pagination = ref({})
const addEditModal = ref(null)
const deleteModal = ref(null)
const openAddEditModel = (type, coupon = {}) => {
  addEditModal.value.show(type, coupon)
}
const getCoupons = () => {
  getCouponsApi()
    .then(({ data }) => {
      if (data.success) {
        coupons.value = data.coupons
        pagination.value = data.pagination
      }
    }).catch((error) => {
      Swal.fire('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
const openDeleteModal = (type, coupon) => {
  deleteModal.value.show(type, coupon)
  console.log('delete')
}

onMounted(() => {
  getCoupons()
})
</script>

<template>
  <section>
    <div class="container">
      <div class="text-end">
        <button
          type="button"
          class="btn btn-primary"
          @click="openAddEditModel('created')"
        >
          新增優惠卷
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>標題</th>
            <th>折扣碼</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>啟用</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="coupons.length > 0">
            <tr
              v-for="coupon in coupons"
              :key="coupon.id"
            >
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.code }}</td>
              <td>{{ coupon.percent }}</td>
              <td>{{ getLocalDate(coupon.due_date) }}</td>
              <td>
                <div :class="[coupon.is_enabled ? 'text-success' : 'text-danger']">
                  {{ coupon.is_enabled ? '啟用' : '停用' }}
                </div>
              </td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    @click="openAddEditModel('edit', coupon)"
                  >
                    修改
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    @click="openDeleteModal('delete', coupon)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td
                class="text-center"
                colspan="5"
              >
                沒有優惠代碼，快新增一個吧！
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <Pagination
        v-if="pagination.current_page"
        :current-page="pagination.current_page"
        :total-pages="pagination.total_pages"
        :has-next="pagination.has_next"
        :has-pre="pagination.has_pre"
        @get-page="getCoupons"
      />
    </div>
    <AddEditCouponModal
      ref="addEditModal"
      @get-coupons="getCoupons"
    />

    <DeleteCouponModal
      ref="deleteModal"
      @get-coupons="getCoupons"
    />
  </section>
</template>
