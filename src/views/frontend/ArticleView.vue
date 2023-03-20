<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleApi } from '@/api/articles.js'

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
  <div
    class="bg-cover mb-5"
    style="height: 40vh; backgroundImage: url(./images/ImgAbout01.png)"
  />
  <div class="container mb-8">
    <h2 class="text-center mb-7">
      <span class="dot">
        最新消息
      </span>
    </h2>
    <section class="row">
      <template v-if="article.title">
        <div
          class="card mb-4"
        >
          <div class="row g-1">
            <div class="col-md-4">
              <img
                :src="article.image"
                class="img-fluid rounded-start"
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
<style lang="scss">

</style>
