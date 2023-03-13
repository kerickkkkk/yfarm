<script setup>

const props = defineProps({
  item: {
    type: Object,
    default () {
      return {
        url: '',
        title: '原味花生糖'
      }
    }
  }
})

</script>

<template>
  <div
    class="card position-relative overflow-hidden"
  >
    <button
      type="button"
      class="customBtn position-absolute top-0 end-0 bg-white fs-2 p-4 rounded-circle border-0 m-5"
    >
      <i class="bi bi-heart-fill" />
    </button>

    <img
      :src="props.item.url"
      class="card-img-top"
      style="height: 286px;"
      :alt="props.item.tile"
    >
    <div class="card-body py-5">
      <h3 class="card-title h4 text-center mb-2">
        {{ props.item.title }}
      </h3>
      <div class="price d-flex w-25 mx-auto mb-5">
        <div class="original h4">
          $120
        </div>
        <del class="ms-auto h4 text-neutral">
          $170
        </del>
      </div>

      <div class="input-group mb-0 w-50 mx-auto">
        <button
          id="button-addon1"
          class="btn btn-outline-neutral"
          type="button"
        >
          <i class="bi bi-plus" />
        </button>
        <select
          id=""
          class="form-control"
        >
          <option
            v-for="n in 10"
            :key="n"
            :value="n"
            class="text-center"
          >
            {{ n }}
          </option>
        </select>
        <button
          id="button-addon2"
          class="btn btn-outline-neutral"
          type="button"
        >
          —
        </button>
      </div>
    </div>
    <div class="card-footer p-0">
      <div class="d-flex">
        <button class="btn py-4 btn-outline-neutral w-50 rounded-0">
          看詳細
        </button>
        <button class="btn py-4 btn-secondary w-50 rounded-0">
          <i class="bi bi-cart-fill" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "bootstrap/scss/functions";
@import "@/scss/helpers/variables";
.customBtn {
    color: $neutral;
    &:hover, &.active {
        color: $primary;
    }
}
</style>
