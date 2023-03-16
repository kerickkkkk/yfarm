<script setup>
import { ref } from 'vue'
import { currency } from '@/utils/filters.js'
import SelectCountComponent from './base/SelectCountComponent.vue'
import { useCartsStore } from '@/stores/cartsStore'
import { useLikesStore } from '@/stores/likesStore.js'
import { storeToRefs } from 'pinia'
const cartsStore = useCartsStore()
const { addCart } = cartsStore
const likesStore = useLikesStore()

const { setLike } = likesStore
const { likesGetter } = storeToRefs(likesStore)
const props = defineProps({
  item: {
    type: Object,
    default () {
      return {
        url: '',
        title: ''
      }
    }
  }
})

const qty = ref(1)
const maxQty = ref(10)
const setQty = (value) => {
  qty.value = value
}

</script>

<template>
  <div
    class="card position-relative overflow-hidden"
  >
    <button
      :class="{active: likesGetter?.includes(props.item.id)}"
      type="button"
      class="customBtn position-absolute top-0 end-0 bg-white fs-2 p-4 rounded-circle border-0 m-5"
      @click="setLike(props.item.id)"
    >
      <i class="bi bi-heart-fill" />
    </button>

    <img
      :src="props.item.imageUrl"
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
          ${{ currency(props.item.price) }}
        </div>
        <del class="ms-auto h4 text-neutral">
          ${{ currency(props.item.origin_price) }}
        </del>
      </div>

      <SelectCountComponent
        :qty="qty"
        :max-qty="maxQty"
        @set-qty="setQty"
      />
    </div>
    <div class="card-footer p-0">
      <div class="d-flex">
        <RouterLink
          :to="`/product/${item.id}`"
          class="btn py-4 btn-outline-neutral w-50 rounded-0"
        >
          看詳細
        </RouterLink>
        <button
          class="btn py-4 btn-secondary w-50 rounded-0"
          @click="addCart(props.item.id ,qty)"
        >
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
