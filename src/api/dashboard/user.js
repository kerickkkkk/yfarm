import { serviceNoPath } from '@/utils/service'

export function logoutApi () {
  return serviceNoPath({
    method: 'POST',
    url: '/logout'
  })
}
