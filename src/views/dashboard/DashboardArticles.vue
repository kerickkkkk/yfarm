<script setup>
import { ref, onMounted, inject } from 'vue'
import Pagination from '@/components/base/PaginationComponent.vue'
import { getArticlesApi, deleteArticleApi } from '@/api/dashboard/articles.js'
import { getLocalDate } from '@/utils/filters.js'
import ModifyArticlesModal from '@/views/dashboard/components/ModifyArticlesModal.vue'
const swal = inject('$swal')
const articleModel = ref(null)
const articles = ref([])
const pagination = ref(null)

const getArticles = (page = 1) => {
  getArticlesApi(page)
    .then((response) => {
      articles.value = response.data.articles || []
      pagination.value = response.data.pagination || {}
    })
    .catch()
}
const deleteArticle = (id) => {
  deleteArticleApi(id)
    .then(({ data }) => {
      swal(`文章：${id}，${data.message} `)
      getArticles()
    })
    .catch()
}

const openModal = (isNew, tempArticle) => {
  articleModel.value.show(isNew, { ...tempArticle })
}

onMounted(() => {
  getArticles()
})
</script>

<template>
  <ModifyArticlesModal
    ref="articleModel"
    @get-articles="getArticles"
  />
  <div class="container">
    <div class="text-end">
      <button
        class="btn btn-secondary"
        @click="openModal(true)"
      >
        新增文章
      </button>
    </div>
    <table class="table mb-3">
      <thead>
        <tr>
          <th width="100">
            文章建立時間
          </th>
          <th>
            文章標題
          </th>
          <th width="100">
            作者
          </th>
          <th>
            標籤
          </th>
          <th width="100">
            圖片
          </th>
          <th>
            文章描述
          </th>
          <th width="150">
            是否發布
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="articles.length > 0">
          <tr
            v-for="article in articles"
            :key="article.id"
          >
            <td>{{ getLocalDate(article.create_at) }}</td>
            <td>
              {{ article.title }}
            </td>
            <td>
              {{ article.author }}
            </td>
            <td>
              <div
                v-if="article?.tag?.length > 0"
                class="d-flex flex-wrap"
              >
                <div
                  v-for="(singleTag, i) in article.tag"
                  :key="i"
                  class="badge rounded-pill text-bg-info mb-2 me-2"
                >
                  {{ singleTag }}
                </div>
              </div>
            </td>
            <td>
              <img
                width="100"
                :src="article.image"
                :alt="article.title"
              >
            </td>
            <td>
              {{ article.description }}
            </td>
            <td>
              <!-- 暫留 切換模式 -->
              <!-- <div class="form-check form-switch">
                <input
                  :id="`customSwitch${article.id}`"
                  :checked="article.isPublic"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  :class="{'text-success': article.isPublic }"
                  :for="`customSwitch${ article.id }`"
                >{{ article.isPublic ? "發布" : "未發布" }}</label>
              </div> -->
              <div
                class="form-check-label"
                :class="{'text-success': article.isPublic }"
              >
                {{ article.isPublic ? "發布" : "未發布" }}
              </div>
            </td>
            <td>
              <div
                class="btn-group btn-group-sm"
                role="group"
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="openModal(false ,{...article})"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="deleteArticle(article.id)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td
            class="text-center"
            colspan="100"
          >
            目前沒有文章唷!，新增一篇文章吧！
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      v-if="pagination"
      :current-page="pagination.current_page"
      :total-pages="pagination.total_pages"
      :has-next="pagination.has_next"
      :has-pre="pagination.has_pre"
      @get-page="getArticles"
    />
  </div>
</template>
