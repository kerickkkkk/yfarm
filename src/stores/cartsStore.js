import { defineStore } from 'pinia'
import {
  getCartsApi,
  postCartsApi,
  putCartApi,
  deleteCartApi,
  deleteAllCartsApi
} from '@/api/carts'
import Swal from 'sweetalert2'

export const useCartsStore = defineStore('carts', {
  state: () => ({
    carts: [],
    total: 0,
    finalTotal: 0
  }),
  getters: {
    cartsGetter: ({ carts }) => carts,
    totalGetter: ({ total }) => total,
    finalTotalGetter: ({ finalTotal }) => finalTotal
  },
  actions: {
    async getCarts () {
      try {
        const { data } = await getCartsApi()
        this.carts = data.data.carts
        this.total = data.data.total
        this.finalTotal = data.data.final_total
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    },
    async addCart (id, qty = 1) {
      qty = qty * 1 || 1
      try {
        const { data } = await postCartsApi(id, qty)
        Swal.fire(data.message || '加入購物車成功')
        this.getCarts()
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    },
    async updateCart (cartId, id, qty = 1) {
      qty = qty * 1 || 1
      try {
        await putCartApi(cartId, id, qty)
        this.getCarts()
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    },
    async deleteCart (cartId) {
      try {
        await deleteCartApi(cartId)
        this.getCarts()
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    },

    async deleteAllCarts (cartId) {
      try {
        await deleteAllCartsApi(cartId)
        this.getCarts()
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    }
  }
})
