<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  imageUrl: {
    type: String,
    default () {
      return ''
    }
  },
  alt: {
    type: String,
    default () {
      return ''
    }
  }
})
const tempUrl = ref('')
const onImageError = () => {
  tempUrl.value = '/logo.png'
}
const onImageLoad = () => {
  // console.log('loadinng')
}
onMounted(() => {

})
</script>

<template>
  <img
    :src="tempUrl"
    :alt="props.alt"
    @error="onImageError"
    @load="onImageLoad"
  >
</template>
