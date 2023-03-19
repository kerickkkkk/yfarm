import { service } from '@/utils/service'

export function getArticlesApi (page = 1) {
  return service({
    method: 'GET',
    url: `/articles?page=${page}`
  })
}
export function getArticleApi (id) {
  return service({
    method: 'GET',
    url: `/article/${id}`
  })
}
