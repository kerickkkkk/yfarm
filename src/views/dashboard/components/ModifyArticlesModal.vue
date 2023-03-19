<script setup>
import { ref, onMounted, inject } from 'vue'
import Modal from 'bootstrap/js/dist/modal'
import noImage from '@/assets/noImage.png'
import { getArticleApi, postArticleApi, putArticleApi } from '@/api/dashboard/articles.js'

const swal = inject('$swal')
const tempArticle = ref({})
const modal = ref(null)
const isNew = ref(false)
const emit = defineEmits(['getArticles'])
const show = (outerIsNew, article) => {
  isNew.value = outerIsNew
  if (isNew.value) {
    tempArticle.value = article
    modal.value.show()
  } else {
    getArticleApi(article.id)
      .then(({ data }) => {
        console.log(data)
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
    .catch()
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
    .catch()
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
  console.log('onimgerror', noImage)
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
                >標題</label>
                <input
                  id="title"
                  v-model="tempArticle.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                >
              </div>
              <div class="mb-3">
                <label
                  for="author"
                  class="form-label"
                >作者</label>
                <input
                  id="author"
                  v-model="tempArticle.author"
                  type="text"
                  class="form-control"
                  placeholder="請輸入作者"
                >
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
              >內容</label>
              <textarea
                id="content"
                v-model="tempArticle.content"
                type="text"
                class="form-control"
                placeholder="請輸入內容"
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
            type="button"
            class="btn btn-secondary"
            @click="articleHandler"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
