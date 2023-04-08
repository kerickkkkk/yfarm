import { service } from '@/utils/service'

export function getCouponsApi (page = 1) {
  return service({
    method: 'GET',
    url: `/admin/coupons?page=${page}`
  })
}

export function deleteCouponApi (id) {
  return service({
    method: 'Delete',
    url: `/admin/coupon/${id}`
  })
}

export function putCouponApi (data) {
  return service({
    method: 'PUT',
    url: `/admin/coupon/${data.id}`,
    data: {
      data
    }
  })
}

// {
//   "data": {
//     "title": "超級特惠價格",
//     "is_enabled": 1,
//     "percent": 80,
//     "due_date": 1555459200,
//     "code": "testCode"
//   }
// }
export function postCouponApi (data) {
  return service({
    method: 'POST',
    url: '/admin/coupon',
    data: {
      data
    }
  })
}
