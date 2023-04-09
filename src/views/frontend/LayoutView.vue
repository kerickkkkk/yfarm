<script setup>
import { ref, onMounted } from 'vue'
import { useCartsStore } from '@/stores/cartsStore'
import { storeToRefs } from 'pinia'
import { useLikesStore } from '@/stores/likesStore.js'
import FooterView from './components/FooterView.vue'
import Offcanvas from 'bootstrap/js/dist/offcanvas'

const cartsStore = useCartsStore()
const likesStore = useLikesStore()
const offcanvas = ref(null)
const { getCarts } = cartsStore
const { getLikes } = likesStore
const { cartsGetter } = storeToRefs(cartsStore)
const { likesGetter } = storeToRefs(likesStore)
const offcanvasShow = () => {
  offcanvas.value.show()
}
const offcanvasHide = () => {
  offcanvas.value.hide()
}
onMounted(() => {
  offcanvas.value = new Offcanvas('#offcanvas', {
    // 避免連點的時候 有 Uncaught RangeError: Maximum call stack size exceeded.
    focus: false
  })
  getCarts()
  getLikes()
})
</script>

<template>
  <nav
    style="z-index:9999;"
    class="navbar navbar-expand-md position-fixed start-0 end-0 bg-white bg-md-transparent navbar-white mt-md-9 py-0"
  >
    <div class="container w-md-100">
      <RouterLink
        class="d-md-none d-block"
        to="/"
      >
        <img
          style="width: 60px;"
          src="/logo.png"
          alt="首頁"
        >
      </RouterLink>
      <!-- 不確定Ｘ是黑色的原因 -->
      <button
        class="navbar-toggler ms-auto bg-primary rounded-0"
        type="button"
        style="transform: translateX(12px);line-height: 50px; width: 60px "
        @click="offcanvasShow"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="offcanvas"
        class="offcanvas offcanvas-start bg-light w-100"
        tabindex="-1"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close p-4 fs-1 text-white bg-primary ms-auto rounded-circle opacity-100"
            @click="offcanvasHide"
          />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav bg-md-white flex-grow-1 text-center me-md-5 rounded-3 px-md-5">
            <li class="nav-item me-auto d-none d-md-block">
              <RouterLink
                class="nav-link"
                to="/"
              >
                <img
                  style="width: 60px;"
                  src="/logo.png"
                  alt="首頁"
                >
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link p-5"
                aria-current="page"
                to="/products"
                @click="offcanvasHide"
              >
                產品
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/aboutus"
                class="nav-link p-5"
                aria-current="page"
                @click="offcanvasHide"
              >
                關於我們
              </RouterLink>
            </li>
            <!-- 先做單頁面 -->
            <!-- <li class="nav-item dropdown rounded-5">
              <button
                id="navbarDropdown"
                class="dropdown-toggle bg-transparent border-0 w-100 p-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                關於我們
              </button>
              <ul
                id="collapseOne"
                class="dropdown-menu collapse text-center"
              >
                <li>
                  <a
                    class="dropdown-item py-md-2 py-5"
                    href="#"
                  >關於我們</a>
                </li>
                <li>
                  <a
                    class="dropdown-item py-md-2 py-5"
                    href="#"
                  >農村紀錄</a>
                </li>
                <li>
                  <a
                    class="dropdown-item py-md-2 py-5"
                    href="#"
                  >送驗紀錄</a>
                </li>
                <li>
                  <a
                    class="dropdown-item py-md-2 py-5"
                    href="#"
                  >產品成分</a>
                </li>
              </ul>
            </li> -->
            <li class="nav-item">
              <RouterLink
                to="/articles"
                class="nav-link p-5"
                aria-current="page"
                @click="offcanvasHide"
              >
                最新消息
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/qa"
                class="nav-link p-5"
                aria-current="page"
                @click="offcanvasHide"
              >
                常見問題
              </RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav bg-md-primary text-center rounded-3">
            <li class="nav-item bg-white bg-md-transparent mb-4 mb-md-0">
              <RouterLink
                class="text-md-white nav-link py-5 px-md-4 position-relative"
                aria-current="page"
                to="/cart"
                @click="offcanvasHide"
              >
                <div class="position-md-relative">
                  <i class="bi bi-cart-fill" />
                  <div class="position-absolute top-md-0 top-50 fs-md-6 end-md-auto end-0 start-md-100 rounded-circle text-white py-md-0 py-1 px-2 bg-secondary translate-middle-md translate-middle-y">
                    {{ cartsGetter.length }}
                  </div>
                </div>
              </RouterLink>
            </li>
            <li class="nav-item bg-white bg-md-transparent mb-4 mb-md-0">
              <RouterLink
                class="nav-link px-md-4 py-5 position-relative"
                aria-current="page"
                to="/likes"
                @click="offcanvasHide"
              >
                <div
                  class="position-md-relative"
                  @click="offcanvasHide"
                >
                  <i class="bi bi-heart-fill" />
                  <div class="position-absolute top-md-0 top-50 fs-md-6 end-md-auto end-0 start-md-100 rounded-circle text-white py-md-0 py-1 px-2 bg-secondary translate-middle-md translate-middle-y">
                    {{ likesGetter.length }}
                  </div>
                </div>
              </RouterLink>
            </li>
            <li class="nav-item bg-white bg-md-transparent mb-4 mb-md-0">
              <RouterLink
                to="/login"
                class="nav-link px-md-4 py-5"
                aria-current="page"
                @click="offcanvasHide"
              >
                <i class="bi bi-person-fill" />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView
    :key="$route.fullPath"
  />
  <FooterView />
</template>
