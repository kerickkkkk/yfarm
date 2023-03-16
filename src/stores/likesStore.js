import { defineStore } from 'pinia'
import { getAllProductsApi } from '@/api/products.js'
const projectName = import.meta.env.VITE_PROJECT_NAME
export const useLikesStore = defineStore('likes', {
  state: () => ({
    products: [],
    likes: []
  }),
  getters: {
    // state 與 getters 命名不可重複 加上後綴 getter
    likesGetter: ({ likes }) => likes,
    filterLikesProductsGetter: (state) => {
      return state.products.filter((product) => {
        return state.likes.includes(product.id)
      })
    },
    noLikesProductsGetter: (state) => {
      return state.products.filter((product) => {
        return !state.likes.includes(product.id)
      })
    }

  },
  actions: {
    async getAllProducts () {
      try {
        const { data } = await getAllProductsApi()
        this.products = data.products
      } catch (error) {

      }
    },
    async getLikes () {
      try {
        this.likes = JSON.parse(localStorage.getItem(projectName) || '[]')
      } catch (error) {

      }
    },
    async setLike (id) {
      try {
        const index = this.likes.findIndex((itemId) => {
          return itemId === id
        })
        if (index === -1) {
          this.likes.push(id)
        } else {
          this.likes.splice(index, 1)
        }
        localStorage.setItem(projectName, JSON.stringify(this.likes))
        this.getLikes()
      } catch (error) {

      }
    }
  }
})
