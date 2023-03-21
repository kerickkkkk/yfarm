// import { computed } from 'vue'
// 改寫 vue2 filters to computed
// return computed 要 .value 不然在外層引用 要在自己加
export const currency = (num) => {
  // return computed(() => {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
  // })
}

export const getLocalDate = (time) => {
  // return computed(() => {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
  // }).value
}
