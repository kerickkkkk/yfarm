<script setup>
import { ref, onMounted, inject } from 'vue'
import axios from 'axios'
import Modal from 'bootstrap/js/dist/modal'
import { useStatusStore } from '@/stores/statusStore.js'

const statusStore = useStatusStore()
const swal = inject('$swal')
const { setLoading } = statusStore
const baseUrl = import.meta.env.VITE_BASE_URL
const apiPath = import.meta.env.VITE_PATH

const productModal = ref(null)
const tempProduct = ref({
  // 避免多一層會有錯誤
  title: '',
  unit: '',
  category: '',
  imageUrl: ''
})
// 暫存多圖的連結
const imagesUrl = ref('')
const modalType = ref('')
const emit = defineEmits(['getProducts'])
const show = (product, type) => {
  productModal.value.show()
  modalType.value = type
  tempProduct.value = product
}

const addImagesUrl = () => {
  if (tempProduct.value.imagesUrl) {
    tempProduct.value.imagesUrl.push(imagesUrl.value)
  } else {
    tempProduct.value.imagesUrl = [imagesUrl.value]
  }
  imagesUrl.value = ''
}
const delImagesUrl = (index) => {
  tempProduct.value.imagesUrl.splice(index, 1)
}

const addEditProduct = (id) => {
  const method = modalType.value === 'new' ? 'post' : 'put'
  const url =
    modalType.value === 'new'
      ? `${baseUrl}/api/${apiPath}/admin/product`
      : `${baseUrl}/api/${apiPath}/admin/product/${id}`
  const data = { data: tempProduct.value }
  setLoading(true)
  axios({
    method,
    url,
    data
  })
    .then(({ data }) => {
      if (data.success) {
        setLoading(false)
        emit('getProducts')
        productModal.value.hide()
        swal(data.message)
        // 集中到 getProducts 內 resetProduct
        // resetProduct();
        // getProducts();
      }
    })
    .catch((error) => {
      let msg = error?.response?.data?.message
      if (Array.isArray(error?.response?.data?.message)) {
        msg = msg.join(',')
      } else {
        msg = msg.message
      }
      swal('', msg || '有錯誤', 'error')
      setLoading(false)
    })
}

onMounted(() => {
  // 從 cookie 取出
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('ttShopToken='))
    ?.split('=')[1]

  // 存取 ID 只會掛載一次
  productModal.value = new Modal('#productModal', {
    // 避免連點的時候 有 Uncaught RangeError: Maximum call stack size exceeded.
    focus: false
  })
  axios.defaults.headers.common.Authorization = token
})
// 開放方法使用
defineExpose({ show })
</script>

<template>
  <div
    id="productModal"
    ref="productModalDom"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <VForm
          v-slot="{ errors }"
          @submit="addEditProduct(tempProduct.id)"
        >
          <div class="modal-header bg-dark text-white">
            <h5
              id="productModalLabel"
              class="modal-title text-white"
            >
              <span>{{ modalType === "new" ? "新增" : "編輯" }}產品</span>
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
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <label
                      for="imageUrl"
                      class="form-label"
                    >輸入圖片網址</label>
                    <input
                      id="imageUrl"
                      v-model.trim="tempProduct.imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    >
                  </div>
                  <img
                    class="img-fluid"
                    :src="tempProduct.imageUrl"
                    alt="圖片預覽"
                  >
                </div>
                <div class="mb-2">
                  <div class="mb-3">
                    <label
                      for="imagesUrl"
                      class="form-label"
                    >輸入子圖片組</label>
                    <input
                      id="imagesUrl"
                      v-model.trim="imagesUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    >
                  </div>
                  <div class="row">
                    <div
                      v-for="(url, i) in tempProduct.imagesUrl"
                      :key="url"
                      class="position-relative col-4"
                    >
                      <div class="px-1 py-2">
                        <img
                          class="img-fluid"
                          :src="url"
                          alt="圖片預覽"
                        >
                        <button
                          class="btn btn-outline-primary rounded-circle position-absolute top-0 end-0 py-1 px-2"
                          @click="delImagesUrl(i)"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    v-if="imagesUrl !== ''"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="addImagesUrl"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label
                    for="title"
                    class="form-label"
                  > <span class="text-danger">*</span> 標題 </label>
                  <VField
                    id="title"
                    v-model.trim="tempProduct.title"
                    name="標題"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['標題'] }"
                    placeholder="請輸入標題"
                    rules="required"
                  />
                  <ErrorMessage
                    name="標題"
                    class="invalid-feedback"
                  />
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label
                      for="category"
                      class="form-label"
                    > <span class="text-danger">*</span> 分類</label>
                    <VField
                      id="category"
                      v-model.trim="tempProduct.category"
                      name="分類"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['分類'] }"
                      placeholder="請輸入分類"
                      rules="required"
                    />
                    <ErrorMessage
                      name="分類"
                      class="invalid-feedback"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label
                      for="price"
                      class="form-label"
                    > <span class="text-danger">*</span> 單位</label>
                    <VField
                      id="unit"
                      v-model.trim="tempProduct.unit"
                      name="單位"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['單位'] }"
                      placeholder="請輸入單位"
                      rules="required"
                    />
                    <ErrorMessage
                      name="單位"
                      class="invalid-feedback"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label
                      for="origin_price"
                      class="form-label"
                    >原價</label>
                    <input
                      id="origin_price"
                      v-model.number="tempProduct.origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="mb-3 col-md-6">
                    <label
                      for="price"
                      class="form-label"
                    >售價</label>
                    <input
                      id="price"
                      v-model.number="tempProduct.price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="d-flex">
                      <h6>星等：</h6>
                      <div class="rating">
                        <span
                          v-for="n in 5"
                          :key="n"
                          class="star"
                          :class="{ active: n <= tempProduct.star }"
                          @click="tempProduct.star = n"
                        />

                        <input
                          v-model="tempProduct.star"
                          type="hidden"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <hr>

                <div class="mb-3">
                  <label
                    for="content"
                    class="form-label"
                  >產品描述</label>
                  <textarea
                    id="content"
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="content"
                    class="form-label"
                  >說明內容</label>
                  <textarea
                    id="description"
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  />
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              @click="resetProduct"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn btn-primary"
            >
              確認
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.rating {
  display: flex;
  justify-content: center;
  &:hover > .star {
    background-color: gold;
  }
  > .star:hover ~ .star {
    background-color: lightgray;
  }
}

:deep(.star) {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: lightgray;
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  cursor: pointer;
  &.active {
    background-color: gold;
  }
}
</style>
