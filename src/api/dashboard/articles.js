import { service } from '@/utils/service'

export function getArticlesApi (page = 1) {
  return service({
    method: 'GET',
    url: `/admin/articles?page=${page}`
  })
}

export function getArticleApi (id) {
  return service({
    method: 'GET',
    url: `/admin/article/${id}`
  })
}
// {
//   "data": {
//     "title": "新增第一篇文章2",
//     "description": "文章內容2",
//     "image": "test.testtest",
//     "tag": [
//       "tag1"
//     ],
//     "create_at": 1234566,
//     "author": "alice",
//     "isPublic": false,
//     "content": "這是內容"
//   }
// }

export function putArticleApi (data) {
  return service({
    method: 'PUT',
    url: `/admin/article/${data.id}`,
    data: { data }
  })
}

export function deleteArticleApi (id) {
  return service({
    method: 'DELETE',
    url: `/admin/article/${id}`
  })
}

// {
//   "data": {
//     "title": "新增第一篇文章2",
//     "description": "文章內容2",
//     "image": "test.testtest",
//     "tag": [
//       "tag1"
//     ],
//     "create_at": 1234566,
//     "author": "alice",
//     "isPublic": false,
//     "content": "這是內容"
//   }
// }
export function postArticleApi (data) {
  return service({
    method: 'POST',
    url: '/admin/article',
    data: {
      data
    }
  })
}
