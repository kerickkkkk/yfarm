<script setup>
import { ref, inject } from 'vue'
const swal = inject('$swal')
const subscribeEmail = ref('1@1.cc')
const email = ref(null)
const subcribe = (values, actions) => {
  // 無法解決 focus 問題
  swal({
    title: '感謝訂閱',
    focusCancel: false
  })
  actions.resetForm()
  document.focus()
}
</script>
<template>
  <footer
    class="rounded-top-5 bg-cover py-10 mt-6 mt-md-12"
    style="backgroundImage: linear-gradient(to right, rgba(169, 193, 0 , 0.9), rgba(169, 193, 0, 0.9)), url(./images/ImgFooter.jpg)"
  >
    <div class="container text-white">
      <div class="row align-items-end">
        <div class="col-md-5">
          <div class="mb-3">
            <img
              style="width: 120px"
              src="/logo.png"
              alt=""
            >
          </div>
          <div class="mb-3">
            <label
              for="email"
              class="form-label"
            >關於農場的最新優惠，施作趣聞，不漏接</label>
            <div class="position-relative mb-">
              <VForm
                v-slot="{ errors }"
                @submit="subcribe"
              >
                <div class="mb-3">
                  <VField
                    id="email"
                    ref="email"
                    v-model="subscribeEmail"
                    name="email"
                    type="email"
                    class="form-control py-4"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                  />
                  <button
                    type="submit"
                    class="position-absolute end-0 top-50 translate-middle-y me-3 btn btn-sm btn-primary"
                  >
                    立即訂購
                  </button>
                  <error-message
                    name="email"
                    class="invalid-feedback"
                  />
                </div>
              </VForm>
              <!-- <input
                id="email"
                v-model.trim="subscribeEmail"
                type="email"
                class="form-control py-4"
                placeholder="name@example.com"
              > -->
            </div>
          </div>
          <div class="fs-7">
            © 楊家農舍 2023
          </div>
        </div>
        <div class="col-md-4 ms-md-auto mb-md-5 mb-4">
          <div>
            <h5 class="h4 text-white mb-3">
              聯絡我們
            </h5>
            <ul>
              <li
                class="d-flex mb-4"
              >
                <div>營業時間</div>
                <div>09:00 - 17:00</div>
              </li>
              <li
                class="d-flex mb-4"
              >
                <div class="me-7">
                  電話
                </div>
                <div>
                  <a
                    class="text-white"
                    href="tel:+886-912345678"
                  >0912-345-678</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="me-7">
                  地址
                </div>
                <div>
                  雲林縣土庫鎮奮起湖奮起 100 之 1 號
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 mb-md-5 mb-4">
          <h5 class="h4 text-white mb-4">
            加入官方帳號
          </h5>
          <div
            style="width: 96px; height: 96px;"
          >
            <img
              src="/logo.png"
              alt="qr code"
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.was-validated .form-control:invalid, .form-control.is-invalid {
    background-position: right calc(0.375em + 5.5rem) center;
}
.is-invalid + .btn{
  margin-top: -0.75rem;
}
</style>
