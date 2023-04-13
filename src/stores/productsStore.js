import { defineStore } from 'pinia'
import { getProductsApi, getProductApi } from '@/api/products.js'
import Swal from 'sweetalert2'
export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    product: {},
    pagination: []
  }),
  getters: {
    // state 與 getters 命名不可重複 加上後綴 getter
    productsGetter: ({ products }) => products,
    productGetter: ({ product }) => product,
    paginationGetter: ({ pagination }) => pagination
  },
  actions: {
    async getProducts (page = 1, category = '') {
      try {
        if (page === this.pagination.value?.current_page) {
          return false
        }
        const { data } = await getProductsApi(page, category)
        this.products = data.products
        this.pagination = data.pagination
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    },
    async getProduct (id) {
      try {
        if (this.products.length > 0) {
          this.product = this.products.find(product => product.id === id)
        } else {
          const { data } = await getProductApi(id)
          this.product = data.product
        }
      } catch (error) {
        Swal('', error?.response?.data?.message || '有錯誤', 'error')
      }
    }
  }
})
