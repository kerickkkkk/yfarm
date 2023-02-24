<script setup>
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
}
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li
        :class="{ disabled: !props.has_pre }"
        class="page-item"
      >
        <a
          class="page-link"
          aria-label="Previous"
          @click.prevent="
            getPage(props.current_page - 1 ? props.current_page - 1 : 0)
          "
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(n, i) in props.total_pages"
        :key="n"
        :class="{
          active: i === current_page - 1,
        }"
        class="page-item"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="getPage(n)"
        >{{ n }}</a>
      </li>
      <li
        :class="{ disabled: !props.has_next }"
        class="page-item"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="
            getPage(
              props.current_page + 1 <= props.total_pages
                ? props.current_page + 1
                : props.total_pages
            )
          "
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
