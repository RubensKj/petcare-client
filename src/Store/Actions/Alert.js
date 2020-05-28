export function addValueAlert(type, value) {
  return { type: type, value }
}

export function setTitleAlert(value) {
  return { type: 'SET_ALERT_TITLE', value }
}

export function setDescriptionAlert(value) {
  return { type: 'SET_ALERT_DESCRIPTION', value }
}

export function setSuccessedAlert(value) {
  return { type: 'SET_ALERT_OK', value }
}