import { service } from '@/utils/service'

export function getOrdersApi (page = 1) {
  return service({
    method: 'GET',
    url: `/admin/orders?page=${page}`
  })
}
