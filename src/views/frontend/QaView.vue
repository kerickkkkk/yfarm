<script setup>
import BannerView from './components/BannerView.vue'

</script>
<template>
  <BannerView />
  <div class="container">
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
          常見問題
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h3><i class="bi bi-info-circle" /> 商品保存期限</h3>
        <p class="ps-4 mb-5">
          保存期限三個月未開封，這是指該商品在正確儲存的情況下可以保持最佳品質的時間。如果您在保存期限內沒有開封該商品，那麼您可以放心地享用這些新鮮的商品。這樣不僅能確保您的健康，還能讓您品嚐到商品的最佳口感和風味。
        </p>
        <h3><i class="bi bi-info-circle" /> 取消、修改訂單</h3>
        <p class="ps-4 mb-5">
          訂單取消，以及修改 請直接撥打 <a
            href="tel:0800000000"
            target="_blank"
          > 電話</a> ，或者 <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >粉絲頁</a> 留言。
        </p>
        <h3>
          <i class="bi bi-info-circle" /> 退貨以及退款
        </h3>
        <ul>
          <li class="mb-3">
            1.退換貨之商品必須是全新的未拆封。
          </li>
          <li class="mb-3">
            2.商品本身有瑕疵而退換貨者，如果經查證是人為破壞恕不接受退換貨。
          </li>
          <li class="mb-3">
            3.如收到當天發現瑕疵，請上網填寫退換貨表單以便處理退換貨。
          </li>
          <li class="mb-3">
            4.換貨必需更換同一商品及數量，或將原訂單以退貨處理並重新下訂單。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
