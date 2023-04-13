<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleApi } from '@/api/articles.js'
import BannerView from './components/BannerView.vue'
const route = useRoute()

const article = ref([])
const getAritcle = (id) => {
  getArticleApi(id)
    .then(({ data }) => {
      article.value = data.article
    })
    .catch()
}
onMounted(() => {
  const { id } = route.params
  getAritcle(id)
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
    <section class="row justify-content-center">
      <template v-if="article.title">
        <div class="col-md-6 col-lg-8">
          <div
            class="card border-0 mb-4"
          >
            <div>
              <img
                :src="article.image"
                class="img-fluid rounded-start"
                :alt="article.title"
              >
            </div>
            <div>
              <div class="card-body">
                <div class="d-flex flex-wrap">
                  <span
                    v-for="item,index in article.tag"
                    :key="`${item}-${index}`"
                    class="badge rounded-pill text-bg-light"
                  >{{ item }}</span>
                </div>
                <h2 class="card-title">
                  {{ article.title }}
                </h2>
                <p class="card-text">
                  {{ article.content }}
                </p>
                <p class="card-text text-end">
                  <RouterLink
                    class="btn btn-link"
                    to="/articles"
                  >
                    回最新消息列表
                  </RouterLink>
                </p>
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
  </div>
</template>
