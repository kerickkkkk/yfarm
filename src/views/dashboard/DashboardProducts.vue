<script setup>
import axios from 'axios'
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import Pagination from '../../components/base/PaginationComponent.vue'
import { useStatusStore } from '@/stores/statusStore.js'
import AddEditProductModal from './components/AddEditProductModal.vue'
import DeleteProductModal from './components/DeleteProductModal.vue'
import UploadImageModal from '../../components/modal/UploadImageModal.vue'
const router = useRouter()
const statusStore = useStatusStore()
const swal = inject('$swal')

const { setLoading } = statusStore
const baseUrl = import.meta.env.VITE_BASE_URL
const apiPath = import.meta.env.VITE_PATH

const productObj = {
  category: '',
  content: '',
  description: '',
  imageUrl: '',
  imagesUrl: [],
  is_enabled: '',
  num: '',
  origin_price: 0,
  price: 0,
  title: '',
  unit: ''
}

const products = ref([])
const tempProduct = ref({ ...productObj })
const pagination = ref(null)
const modalType = ref('')
// const productModalDom = ref(null);
const addEditProductRef = ref(null)
// const productModal = ref(null);
const uploadImageRef = ref(null)
const deleteProductRef = ref(null)
const getProducts = (page = 1) => {
  resetProduct()
  setLoading(true)
  axios
    .get(`${baseUrl}/api/${apiPath}/admin/products?page=${page}`)
    .then(({ data }) => {
      products.value = data.products
      pagination.value = data.pagination
    })
    .catch((error) => {
      setLoading(false)
      swal('', error?.response?.data?.message || '有錯誤', 'error')
      // 在確認沒有權限的寫法
      router.push({ name: 'Login' })
    })
    .finally(() => setLoading(false))
}

const openUploadModal = () => {
  uploadImageRef.value.show()
}
const openModalHandler = (type, product) => {
  modalType.value = type
  if (type === 'new') {
    resetProduct()
  } else {
    tempProduct.value = product
  }
  if (type === 'new' || type === 'edit') {
    addEditProductRef.value.show(tempProduct.value, modalType.value)
  } else if (type === 'delete') {
    deleteProductRef.value.show(product)
  } else {
    swal('錯誤')
  }
}

const resetProduct = () => {
  tempProduct.value = { ...productObj }
}

onMounted(() => {
  // 從 cookie 取出
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('ttShopToken='))
    ?.split('=')[1]
  axios.defaults.headers.common.Authorization = token
  getProducts()
})
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary me-3"
        @click="openUploadModal"
      >
        上傳圖片
      </button>
      <button
        class="btn btn-primary"
        @click="openModalHandler('new')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">
            {{ product.origin_price }}
          </td>
          <td class="text-end">
            {{ product.price }}
          </td>
          <td>
            <span
              v-if="product.is_enabled"
              class="text-success"
            >啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModalHandler('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModalHandler('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="pagination?.total_pages">
      <Pagination
        v-if="pagination"
        :current-page="pagination.current_page"
        :total-pages="pagination.total_pages"
        :has-next="pagination.has_next"
        :has-pre="pagination.has_pre"
        @get-page="getProducts"
      />
    </div>
  </div>
  <!-- Modal -->
  <AddEditProductModal
    ref="addEditProductRef"
    @get-products="getProducts"
  />
  <!--  刪除 -->
  <DeleteProductModal
    ref="deleteProductRef"
    @get-products="getProducts"
  />
  <UploadImageModal ref="uploadImageRef" />
  <!-- Modal -->
</template>

<style scoped lang="scss">
img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 300px;
}

.images {
  height: 150px;
}
</style>
