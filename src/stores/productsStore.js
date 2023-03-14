import { defineStore } from 'pinia'
import { getProductsApi } from '@/api/products.js'
import Swal from 'sweetalert2'
export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    pagination: []
  }),
  getters: {
    // state 與 getters 命名不可重複 加上後綴 getter
    productsGetter: ({ products }) => products,
    paginationGetter: ({ pagination }) => pagination
  },
  actions: {
    async getProducts (page = 1) {
      try {
        if (page === this.pagination.value?.current_page) {
          return false
        }
        const { data } = await getProductsApi(page)
        this.products = data.products
        this.pagination = data.pagination
        console.log(data, this.products, this.pagination)
      } catch (error) {
        Swal.fire('', error?.response?.data?.message || '有錯誤', 'error')
      }
    }
  }
})
