<script setup>
import BannerView from './components/BannerView.vue'

</script>

<template>
  <BannerView />
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink
            to="/"
            class="nav-link active p-0"
          >
            首頁
          </RouterLink>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          關於我們
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-6 mb-6">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1679407811934.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kSf6JmWV%2FJvT3R14bJUj%2F6m8YA%2FyeEvlnyH0Dt16hSrCd7ysjwIaRJZVD4aVb97yUlGFg%2BLEDQ4vVdpUgrt2ac8W2Bn99%2BbzXEF0ede8YKWH1jkbrMILrL210T8R5HnPaZBVQNVqqA3FfOETb3zEZh%2BqguPlWEmnudPc6L0xubmPvFyUQIQymkniLTJin3FugDEbgVGqrSk3ZQ5vlsguFbhKIqGbgYtTg6a1ZYEd%2FDBEmlH6Zf%2BNTSvZ%2F6eocUdWoSGPl4CUbUwJcca%2FEVAwGHW94Bl0xNW%2FOtGEGjiLTJHshVaA4Fmiqzs8vUgSiTFVqWbPIOdNYxNvSSysjFYOrw%3D%3D"
          alt="耕耘的地"
        >
      </div>
      <div class="col-md-6 mb-6">
        <div class="d-flex justify-content-center align-items-center h-100">
          <p class="col-10 lh-lg">
            農舍的目的就是希望可以在現在的農村生態裡，藉由版主在這些年出外求學及工作經驗，提高農民每一季的所得，讓有心在這一片土地上耕耘的人，除了將收成全數賣給大盤商外，有另一條銷售管道可以選擇。
          </p>
        </div>
      </div>
    </div>
    <div class="row flex-row-reverse">
      <div class="col-md-6 mb-6">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1679408171623.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qEFowxwRqGTsuJvi26hffS7z0GYev4T%2BULi%2F2ry%2Fpe6yKzx2pbNxrmaoM13Y6HULLE1OvwKSWWsCKqA6NZJx3KcEVrfx%2BQRoBOPF%2BmPSEIQkd1mvkXIJj77Q59Q%2FtfbnvBwup77FS%2F3SZKZASxRX5PB6%2BvyrJ%2BNpAvafOpfMRQ9V0p%2Bu4TZ7pJDnHVlr%2F2TKbGDjSKiCtPlKgFVs6Kzn2ugnzNEBOPwozwKSgiSvjn8tDuCQLwa32wUaXxZKKPvmnc3hSbMKtAdAo0lcNhMio4ReOtHCOAfVmEZb2n6n3bBZY0RlnMn1dhOSLMyeJqaS0AECf969C5%2Ftf7fwraVR6w%3D%3D"
          alt="一起努力"
        >
      </div>
      <div class="col-md-6 mb-6">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="col-10">
            <p class="lh-lg">
              從自家的農作物銷售是心裡夢想的起點，如果能得到父母親及家裡數代務農長輩們的認同，瞭解及接受除了大盤商之外，是還能有另一個路可以選擇的。
            </p>
            <p class="lh-lg">
              而在此基礎下，一定能影響更多的農民，一起為家庭的經濟及小孩子們的生活環境來努力改善農村經濟。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
