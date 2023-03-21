<script setup>
import { ref, onMounted } from 'vue'
import { getArticlesApi } from '@/api/articles.js'
import Pagination from '../../components/base/PaginationComponent.vue'
import BannerView from './components/BannerView.vue'
const articles = ref([])
const pagination = ref({})
const getAritcles = (page = 1) => {
  getArticlesApi(page)
    .then(({ data }) => {
      articles.value = data.articles
      pagination.value = data.pagination
    })
    .catch()
}
onMounted(() => {
  getAritcles()
})
</script>
<template>
  <BannerView />
  <div class="container mb-8">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            to="/"
            class="nav-link active p-0"
          >
            首頁
          </router-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          最新消息
        </li>
      </ol>
    </nav>
    <section class="row">
      <template v-if="articles.length > 0">
        <div
          v-for="article in articles"
          :key="article.id"
          class="col-md-6 col-lg-6"
        >
          <div
            class="card border-0 mb-4"
          >
            <div class="row g-1">
              <div class="col-md-4">
                <img
                  :src="article.image"
                  class="img-fluid rounded-start h-100"
                  :alt="article.title"
                >
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <span
                      v-for="item,index in article.tag"
                      :key="`${item}-${index}`"
                      class="badge rounded-pill text-bg-light"
                    >{{ item }}</span>
                  </div>
                  <h5 class="card-title">
                    {{ article.title }}
                  </h5>
                  <p class="card-text">
                    {{ article.description }}
                  </p>
                  <p class="card-text text-end">
                    <RouterLink
                      class="btn btn-link"
                      :to="`/article/${article.id}`"
                    >
                      看詳細...
                    </RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <h2
          class="text-center"
        >
          沒有最新消息
        </h2>
      </template>
    </section>
    <Pagination
      v-if="pagination.total_pages"
      :current-page="pagination.current_page"
      :total-pages="pagination.total_pages"
      :has-next="pagination.has_next"
      :has-pre="pagination.has_pre"
      @get-page="getAritcles"
    />
  </div>
</template>
<style lang="scss">

</style>
