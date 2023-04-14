<script setup>
import { ref, onMounted, inject } from 'vue'
import Modal from 'bootstrap/js/dist/modal'
import noImage from '@/assets/scss/noImage.png'
import { getArticleApi, postArticleApi, putArticleApi } from '@/api/dashboard/articles.js'

const swal = inject('$swal')
const tempArticle = ref({
  title: '',
  author: ''
})
const modal = ref(null)
const isNew = ref(false)
const emit = defineEmits(['getArticles'])
const show = (outerIsNew, article) => {
  isNew.value = outerIsNew
  if (isNew.value) {
    tempArticle.value = {
      title: '',
      author: ''
    }
    modal.value.show()
  } else {
    getArticleApi(article.id)
      .then(({ data }) => {
        tempArticle.value = data.article
        modal.value.show()
      })
  }
}
const tempTag = ref('')
const restoreArticle = () => {
  tempArticle.value = {}
  tempTag.value = ''
}
const hide = () => {
  modal.value.hide()
  restoreArticle()
}
const putArticle = () => {
  putArticleApi(tempArticle.value)
    .then(({ data }) => {
      swal(data.message)
      emit('getArticles')
      hide()
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}

const postArticle = () => {
  if (tempArticle.value.isPublic === undefined) {
    tempArticle.value.isPublic = false
  }
  tempArticle.value = {
    ...tempArticle.value,
    create_at: (new Date()).getTime()
  }
  postArticleApi(tempArticle.value)
    .then(({ data }) => {
      swal(data.message)
      emit('getArticles')
      hide()
    })
    .catch((error) => {
      const temp = error?.response?.data?.message
      const msg = Array.isArray(temp) ? temp.join(',') : temp
      console.log(error?.response?.data?.message)
      swal('', msg || '有錯誤', 'error')
    })
}
const articleHandler = () => {
  isNew.value ? postArticle() : putArticle()
}
const tagHandler = () => {
  if (tempTag.value === '') {
    return false
  }
  // 過濾重複 再做
  if (tempArticle.value.tag === undefined) {
    tempArticle.value.tag = []
  }
  tempArticle.value.tag.push(tempTag.value)
  tempTag.value = ''
}
const removeTag = (index) => {
  tempArticle.value.tag.splice(index, 1)
}
const onImageError = (event) => {
  event.target.src = noImage
}
onMounted(() => {
  modal.value = new Modal('#modal', {
    focus: false
  })
})
defineExpose({ show })
</script>

<template>
  <div
    id="modal"
    class="modal fade modal-xl"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <VForm
          v-slot="{ errors }"
          @submit="articleHandler"
        >
          <div class="modal-header">
            <h5
              id="modalLabel"
              class="modal-title"
            >
              {{ isNew ? '新增' :'修改' }}文章
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
              <div class="col-md-6">
                <div class="mb-3">
                  <label
                    for="title"
                    class="form-label"
                  > <span class="text-danger">*</span> 標題</label>
                  <VField
                    id="title"
                    v-model.trim="tempArticle.title"
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
                <div class="mb-3">
                  <label
                    for="author"
                    class="form-label"
                  > <span class="text-danger">*</span>  作者</label>
                  <VField
                    id="author"
                    v-model.trim="tempArticle.author"
                    name="作者"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['作者'] }"
                    placeholder="請輸入作者"
                    rules="required"
                  />
                  <ErrorMessage
                    name="作者"
                    class="invalid-feedback"
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="description"
                    class="form-label"
                  >描述</label>
                  <input
                    id="description"
                    v-model="tempArticle.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入描述"
                  >
                </div>
                <div class="mb-3">
                  <label
                    for="tempTag"
                    class="form-label"
                  >標籤</label>
                  <div class="input-group mb-3">
                    <input
                      v-model="tempTag"
                      type="text"
                      class="form-control"
                      placeholder="輸入標籤"
                    >
                    <button
                      :disabled="tempTag === ''"
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="tagHandler"
                    >
                      輸入
                    </button>
                  </div>

                  <div
                    v-if="tempArticle?.tag?.length > 0"
                    class="d-flex flex-wrap"
                  >
                    <button
                      v-for="(singleTag,i) in tempArticle.tag"
                      :key="i"
                      class="btn btn-sm btn-outline-info mb-2 me-2"
                      @click="removeTag(i)"
                    >
                      {{ singleTag }}
                    </button>
                    <div class="text-warning">
                      <span>再點一次，就取消。</span>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="isPublic"
                      v-model="tempArticle.isPublic"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label
                      class="form-check-label"
                      for="isPublic"
                    >是否發布</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-2">
                  <div class="mb-3">
                    <label
                      for="imageUrl"
                      class="form-label"
                    >輸入圖片網址</label>
                    <input
                      id="imageUrl"
                      v-model="tempArticle.image"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    >
                  </div>
                  <img
                    class="img-fluid"
                    :src="tempArticle.image"
                    alt="image"
                    @error="onImageError"
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="mb-3">
                <label
                  for="content"
                  class="form-label"
                > <span class="text-danger">*</span> 內容</label>
                <VField
                  id="content"
                  v-model="tempArticle.content"
                  as="textarea"
                  cols="30"
                  rows="10"
                  name="內容"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['內容'] }"
                  placeholder="請輸入內容"
                  rules="required"
                />
                <ErrorMessage
                  name="內容"
                  class="invalid-feedback"
                />
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
              type="submit"
              class="btn btn-secondary"
            >
              確認
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
