<script setup>
import { ref, onMounted } from 'vue'
import Modal from 'bootstrap/js/dist/modal'

const modal = ref(null)
const itemId = ref('')
const itemTitle = ref('')

const props = defineProps({
  modalTitle: {
    type: String,
    default: () => {
      return ''
    }
  }
})
const emit = defineEmits(['deleteMethod'])

const show = ({ id, title }) => {
  modal.value.show()
  itemId.value = id
  itemTitle.value = title
}
const hide = () => {
  modal.value.hide()
}
const handleDelete = (id) => {
  emit('deleteMethod', id)
}
onMounted(() => {
  modal.value = new Modal('#deleteModal', {
    focus: false
  })
})
defineExpose({ show, hide })
</script>

<template>
  <div
    id="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger">
          <h5
            id="modalLabel"
            class="modal-title text-white"
          >
            <span>刪除{{ props.modalTitle }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="hide"
          />
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ itemTitle }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hide"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="handleDelete(itemId)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
