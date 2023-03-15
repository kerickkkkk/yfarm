<script setup>
const props = defineProps({
  step: {
    type: Number,
    default () {
      return 1
    }
  }
})
</script>
<template>
  <div class="row py-5 g-0">
    <div class="col-md-4 mb-2">
      <div
        class="fs-1 text-white rounded-5 text-center bg-primary rounded-start-0 py-3 w-75 m-x-auto"
      >
        購物車
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div
        :class="[props.step > 1 ? 'text-white bg-primary' : 'text-dark bg-light']"
        class="fs-1 rounded-5 text-center rounded-start-0 py-3 w-75 m-x-auto"
      >
        填寫資料
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div
        :class="[props.step > 2 ? 'text-white bg-primary' : 'text-dark bg-light']"
        class="fs-1 rounded-5 text-center rounded-start-0 py-3 w-75 m-x-auto"
      >
        訂購完成
      </div>
    </div>
  </div>
</template>
