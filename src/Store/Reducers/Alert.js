const INITIAL_STATE = {
  titleError: '',
  descriptionError: '',
  successed: false,
}

export default function alert(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ALERT_TITLE':
      return { ...state, titleError: action.value }
    case 'SET_ALERT_DESCRIPTION':
      return { ...state, descriptionError: action.value }
    case 'SET_ALERT_OK':
      return { ...state, successed: action.value }
    default:
      return state;
  }
};