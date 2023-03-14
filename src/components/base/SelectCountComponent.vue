<script setup>
import { ref } from 'vue'
const emit = defineEmits(['setQty'])
const props = defineProps({
  qty: {
    type: Number,
    default () {
      return 1
    }
  },
  maxQty: {
    type: Number,
    default () {
      return 10
    }
  }
})
const tempQty = ref(props.qty)
</script>

<template>
  <div class="input-group mb-0 w-50 mx-auto">
    <button
      id="button-addon1"
      class="btn btn-outline-neutral"
      type="button"
      :disabled="tempQty <= 1"
      @click="emit('setQty', --tempQty)"
    >
      —
    </button>
    <select
      v-model="tempQty"
      class="form-control"
    >
      <option
        v-for="n in props.maxQty"
        :key="n"
        :value="n"
        class="text-center"
      >
        {{ n }}
      </option>
    </select>
    <button
      class="btn btn-outline-neutral"
      type="button"
      :disabled="tempQty >= maxQty"
      @click="emit('setQty', ++tempQty)"
    >
      <i class="bi bi-plus" />
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>
