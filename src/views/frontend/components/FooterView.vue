<template>
  <footer
    class="py-10 rounded-top-5 bg-cover"
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
              <input
                id="email"
                type="email"
                class="form-control py-4"
                placeholder="name@example.com"
              >
              <button class="position-absolute end-0 top-50 translate-middle-y me-3 btn btn-sm btn-primary">
                立即訂購
              </button>
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
