<script setup>
import { goTop } from '@/utils/tools.js'
const emit = defineEmits(['getPage'])
const props = defineProps({
  currentPage: {
    type: Number,
    default () {
      return 0
    }
  },
  totalPages: {
    type: Number,
    default () {
      return 0
    }
  },
  hasNext: {
    type: Boolean,
    default () {
      return false
    }
  },
  hasPre: {
    type: Boolean,
    default () {
      return false
    }
  }
})

const getPage = (page) => {
  emit('getPage', page)
  goTop()
}
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li
        :class="{ disabled: !props.hasPre }"
        class="page-item"
      >
        <a
          class="page-link"
          aria-label="Previous"
          @click.prevent="
            getPage(props.currentPage - 1 ? props.currentPage - 1 : 0)
          "
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="n in props.totalPages"
        :key="n"
        :class="{
          active: n === props.currentPage,
        }"
        class="page-item"
      >
        <!-- 修正 會重複觸發  以 css 觸發-->
        <a
          :disabled="n === props.currentPage && 'disabled'"
          class="page-link"
          @click.prevent="getPage(n)"
        >{{ n }}</a>
      </li>
      <li
        :class="{ disabled: !props.hasNext }"
        class="page-item"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="
            getPage(
              props.currentPage + 1 <= props.totalPages
                ? props.currentPage + 1
                : props.totalPages
            )
          "
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
// 處理 觸發 與 樣式
a[disabled="disabled"] {
  pointer-events: none;
}
a:not([disabled="disabled"]) {
  cursor: pointer;
}
</style>
