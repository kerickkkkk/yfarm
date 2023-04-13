const projectName = import.meta.env.VITE_BASE_PROJECTNAME

export const goTop = (xPos = 0, yPos = 0) => {
  window.scrollTo(xPos, yPos)
}

export const setSookie = (token, expired) => {
  document.cookie = `${projectName}Token=${token}; Path=/;Expires=${new Date(expired)};`
}

export const deleteCookie = () => {
  document.cookie = `LoginToken=;expires=${new Date()};`
  document.cookie = `${projectName}Token=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export const _uuid = () => {
  let d = Date.now()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
