import { service } from '@/utils/service'

export function getOrdersApi (page = 1) {
  return service({
    method: 'GET',
    url: `/admin/orders?page=${page}`
  })
}

export function deleteOrderApi (id) {
  return service({
    method: 'Delete',
    url: `/admin/order/${id}`
  })
}

export function putOrderApi (data) {
  return service({
    method: 'PUT',
    url: `/admin/order/${data.id}`,
    data: {
      data
    }
  })
}
