export function addValue(type, value) {
  return { type: type, value }
}

export function setUser(value) {
  return { type: 'SET_USER', value }
}

export function setIsLoading(value) {
  return { type: 'SET_ISLOADING', value }
}

export function setErrors(value) {
  return { type: 'SET_ERRORS', value }
}