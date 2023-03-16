<script setup>
import { onMounted } from 'vue'
import { useCartsStore } from '@/stores/cartsStore'
import { storeToRefs } from 'pinia'
import { useLikesStore } from '@/stores/likesStore.js'
const cartsStore = useCartsStore()
const likesStore = useLikesStore()
const { getCarts } = cartsStore
const { getLikes } = likesStore
const { cartsGetter } = storeToRefs(cartsStore)
const { likesGetter } = storeToRefs(likesStore)
onMounted(() => {
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
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        style="transform: translateX(12px);line-height: 50px; width: 60px "
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="offcanvasExample"
        class="offcanvas offcanvas-start bg-light w-100"
        tabindex="-1"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close p-4 fs-1 text-white bg-primary ms-auto rounded-circle opacity-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
              >
                產品
              </RouterLink>
            </li>
            <li class="nav-item dropdown rounded-5">
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
            </li>
            <li class="nav-item">
              <a
                class="nav-link active p-5"
                aria-current="page"
                href="#"
              >最新消息</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active p-5"
                aria-current="page"
                href="#"
              >常見問題</a>
            </li>
          </ul>
          <ul class="navbar-nav bg-md-primary text-center rounded-3">
            <li class="nav-item bg-white bg-md-transparent mb-4 mb-md-0">
              <RouterLink
                class="text-md-white nav-link py-5 px-md-4 position-relative"
                aria-current="page"
                to="/cart"
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
              >
                <div class="position-md-relative">
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
</template>
