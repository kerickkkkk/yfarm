import { service } from '@/utils/service'

// 避免與 store 衝突 後綴 api
export function getProductsApi (page = 1, category = '') {
  // 調整加入 分類
  const parameter = category && category !== '全部' ? `page=${page}&category=${category}` : `page=${page}`
  return service({
    method: 'GET',
    url: `/products?${parameter}`
  })
}
export function getAllProductsApi () {
  // 調整加入 分類
  return service({
    method: 'GET',
    url: '/products/all'
  })
}
export function getProductApi (id) {
  return service({
    method: 'GET',
    url: `/product/${id}`
  })
}
