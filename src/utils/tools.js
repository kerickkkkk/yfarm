const projectName = import.meta.env.VITE_BASE_PROJECTNAME

export const goTop = (xPos = 0, yPos = 0) => {
  window.scrollTo(xPos, yPos)
}

export const setSookie = (token, expired) => {
  document.cookie = `${projectName}Token=${token}; Path=/;Expires=${new Date(expired)};`
}

export const deleteCookie = () => {
  document.cookie = `${projectName}Token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
